import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {
    const booking = useLoaderData();
    const { appointmentDate, slot, price, treatment } = booking;

    // navigation from react router dom to find loading status
    const navigation = useNavigation();
    if(navigation.state === 'loading'){
        return <Loading></Loading>
    }

    console.log(booking);
    return (
        <div className='m-5 '>
            <h2 className='text-4xl font-semibold text-center text-secondary my-5'>Payment for: {treatment}</h2>
            <p className="text-xl text-center">Please pay: <span className='font-bold'>$ {price}</span> for your appointment on <span className='font-bold'>{appointmentDate}</span> at <span className='font-bold'>{slot}</span></p>
            <div className='w-7/12 my-12 mx-auto'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                    booking = {booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;