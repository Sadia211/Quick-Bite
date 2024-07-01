import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import Sectiontitle from '../../Components/Sectiontitle';
import { useStripe } from '@stripe/react-stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Checkoutform from './Checkoutform';
    
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_Gateway_pk);
    const Payment = () => {
    return (
        <div>
            <Sectiontitle heading="Payment" subheading="Please pay to eat"></Sectiontitle>
            <div>
            <Elements stripe={stripePromise}>
      <Checkoutform />
    </Elements>
            </div>
        </div>
    );
};

export default Payment;