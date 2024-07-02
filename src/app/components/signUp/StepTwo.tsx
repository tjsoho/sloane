import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const CheckoutForm: React.FC<{ nextStep: () => void }> = ({ nextStep }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch('/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 5000 }) // amount in cents
    })
    .then(res => res.json())
    .then(data => setClientSecret(data.clientSecret));
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'https://your-site.com/checkout-complete',
      },
    });

    if (error) {
      console.error(error);
    } else if (paymentIntent?.status === 'succeeded') {
      nextStep();
    }
  };

  return (
    clientSecret && (
      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
        <div className="my-4">
          <PaymentElement />
        </div>
        <button
          type="submit"
          disabled={!stripe}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 w-full"
        >
          Pay
        </button>
      </form>
    )
  );
};

const StepTwo: React.FC<{ nextStep: () => void }> = ({ nextStep }) => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-xl font-Archivo mb-4">Payment</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm nextStep={nextStep} />
      </Elements>
    </div>
  );
};

export default StepTwo;
