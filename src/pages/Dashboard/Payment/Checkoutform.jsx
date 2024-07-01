import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxioSecure from '../../Components/hooks/useAxioSecure'
import useCart from '../../Components/hooks/useCart'
import useAuth from '../../Components/hooks/useAuth';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
const Checkoutform = () => {
    const [error,seterror]=useState('');
    const [clientSecret,setClientSecret]=useState('');
    const[transactionid,setTransactionId]=useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure=useAxioSecure();//user login
    const {user}=useAuth();
    const [cart,refetch]=useCart();
  const navigate=useNavigate();


    const totalprice=cart.reduce((total,item)=>total+item.price,0)//get the totalprice
    useEffect(()=>{
        if(totalprice >0){
 axiosSecure.post('/create-payment-intent',{price:totalprice})
.then(res=>{
    console.log(res.data.clientSecret);
    setClientSecret(res.data.clientSecret)
})
        }
    },[axiosSecure,totalprice])
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('payment error', error);
            seterror(error.message)
        } else {
            console.log('PaymentMethod', paymentMethod);
            seterror('');
        }

//confirm payment
const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
 clientSecret,
  {
    payment_method: {
      card:card,
      billing_details: {
      email:user?.email||'anonymous',
        name:user?.displayName||'anonymous',
      },
    },
  },);

if(confirmError){
console.log('confirm error')
}

else  
{
console.log('payment intent',paymentIntent)
if(paymentIntent.status==='succeeded'){
console.log('trannsaction id', paymentIntent.id);
setTransactionId(paymentIntent.id);
//now save the payment in the database
const payment={
    email:user.email,
    price:totalprice,
    transactionid:paymentIntent.id,
    date: new Date(),//utc data convert.use moment js
    cartId:cart.map(item=>item._id),
    menuItemId:cart.map(item=>item.menuId),
    status:'pending'

}
const res =await  axiosSecure.post('/payment',payment);
console.log('payment saved',res.data);
refetch();
if (res.data?.paymentResult?.insertedId) {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Thank you for the taka paisa",
        showConfirmButton: false,
        timer: 1500
    });
    navigate('/dashboard/paymenthistory')
}

}

}

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm btn-primary' type='submit' disabled={!stripe||!clientSecret}>
                    PAY
                </button>
                <p>{error}</p>
                {transactionid && <p className='text-green-600'>
                Your transaction id:{transactionid}</p>}
                
            </form>
        </div>
    );
};

export default Checkoutform;
