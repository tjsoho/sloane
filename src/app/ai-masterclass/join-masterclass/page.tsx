'use client';

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

interface SimpleFormProps {
  onFormSubmit?: () => void;
}

// Validation schema using Yup
const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  Email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  Questions: Yup.string().required(
    'At least one question or comment is required'
  ),
});

const inputClass =
  'my-4 block w-full py-2 px-4 border border-brand-logo rounded-full bg-transparent text-brand-green-dark placeholder-green-700 focus:border-brand-green-dark outline-none';
const labelClass = 'block text-lg font-Quicksand text-brand-cream';
const inputClass2 =
  'my-4 block w-full px-4 py-3 border border-brand-logo rounded-[25px] bg-transparent text-brand-green-dark placeholder-green-700 overflow-hidden focus:border-brand-green-dark outline-none';

const SimpleForm: React.FC<SimpleFormProps> = ({ onFormSubmit }) => {
  const webhookUrl =
    'https://hook.us1.make.com/pbiheg53uchfgi7cdxtlucz3yms9z0ni'; // Make.com webhook URL

  // Stripe payment link
  const stripePaymentLink = 'https://buy.stripe.com/fZe5mfgyj5qw7L24gm'; // Replace with your actual Stripe payment link

  return (
    <div className="mx-auto mt-10 flex max-w-md flex-col justify-center rounded-xl bg-brand-green p-6">
      <h2 className="mb-6 text-center text-4xl font-bold text-brand-cream">
        Ai Masterclass
      </h2>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          Email: '',
          Questions: '',
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const payload = {
              firstName: values.firstName,
              lastName: values.lastName,
              Email: values.Email,
              Questions: values.Questions,
            };

            await axios.post(webhookUrl, payload);

            if (onFormSubmit) {
              onFormSubmit();
            }

            // Redirect to Stripe payment link after form submission
            window.location.href = stripePaymentLink;
          } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to submit form. Please try again.');
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <label htmlFor="firstName" className={labelClass}>
                First Name
              </label>
              <Field
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Your First Name"
                className={inputClass}
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="mt-1 text-sm text-red-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="lastName" className={labelClass}>
                Last Name
              </label>
              <Field
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Your Last Name"
                className={inputClass}
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="mt-1 text-sm text-red-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="Email" className={labelClass}>
                Email Address
              </label>
              <Field
                type="email"
                id="Email"
                name="Email"
                placeholder="Your Email"
                className={inputClass}
              />
              <ErrorMessage
                name="Email"
                component="div"
                className="mt-1 text-sm text-red-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="Questions" className={labelClass}>
                What are you looking to learn?
              </label>
              <Field
                as="textarea"
                id="Questions"
                name="Questions"
                placeholder="Add your questions here"
                className={inputClass2}
              />
              <ErrorMessage
                name="Questions"
                component="div"
                className="mt-1 text-sm text-red-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 w-full rounded-full bg-brand-cream px-8 py-2 font-Archivo uppercase text-brand-green hover:bg-brand-green-dark hover:text-brand-logo"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SimpleForm;
