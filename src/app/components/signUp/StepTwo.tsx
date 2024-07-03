import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { StripeElementsOptions } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const CheckoutForm: React.FC<{ nextStep: () => void }> = ({ nextStep }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement!,
    });

    if (!error) {
      // Handle successful payment here
      nextStep();
    } else {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="my-4">
        <CardElement />
      </div>
      <button
        type="submit"
        disabled={!stripe}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Pay
      </button>
    </form>
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
