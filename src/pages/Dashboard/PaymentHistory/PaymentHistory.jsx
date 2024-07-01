import React from 'react';
import useAuth from '../../Components/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxioSecure from '../../Components/hooks/useAxioSecure';
const PaymentHistory = () => {
    const {user}=useAuth();
const axiossecure=useAxioSecure();
const {data:payments=[]}=useQuery({
    queryKey:['payments',user.email],
    queryFn:async()=>{
        const res=await axiossecure.get(`/payments/${user.email}`)
        return res.data
}
})
    return (
        <div>
            <h2>Total payments :{payments.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>price</th>
        <th>Transaction id</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
        {payments.map((payment,index)=>
    
      <tr key={payment._id}>
        <th>{index+1}</th>
        <td>{payment.price}</td>
        <td>{payment.transactionid}</td>
        <td>{payment.status}</td>
      </tr>)}
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;