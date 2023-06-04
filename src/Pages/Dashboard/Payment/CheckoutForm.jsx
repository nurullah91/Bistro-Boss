import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useEffect } from 'react';

const CheckoutForm = ({ price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const [clientSecret, setClientSecret] = useState('');
    const [cardError, setCardError] = useState('');


    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
    }, [axiosSecure, price])




    const handleSubmit = async event => {
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
            setCardError(error.message)
            console.log('[error]', error);
        } else {
            setCardError('');
            console.log('[PaymentMethod]', paymentMethod);
        }

        const { paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details:{
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'unknown'
                    }
                }
            }
        )

        if(confirmError){
            console.log(confirmError);
        }
        console.log(paymentIntent);
    }
    return (
        <div className='md:w-3/4 mx-auto my-5 bg-slate-100 shadow-md px-6 py-10 rounded-md'>
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
                <button className='bg-orange-400 px-5 py-2 font-bold text-white shadow-md rounded my-6' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-center text-red-500'>{cardError}</p>}
        </div>
    );
};

export default CheckoutForm;