'use client';

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'; // Import axios for HTTP requests

// Validation schema using Yup with correct casing
const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  Email: Yup.string().email('Invalid email address').required('Email is required'),
});

const SimpleForm: React.FC = () => {
  const webhookUrl = 'https://hook.us1.make.com/pbiheg53uchfgi7cdxtlucz3yms9z0ni'; // Replace with the URL from Make.com

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Contact Us</h2>
      <Formik
        initialValues={{ firstName: '', lastName: '', Email: '' }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          try {
            const payload = {
              firstName: values.firstName,
              lastName: values.lastName,
              Email: values.Email, // Note the capital 'E' in 'Email'
            };

            console.log('Sending payload:', payload);

            await axios.post(webhookUrl, payload);
            alert('Form submitted successfully!');
          } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to submit form. Please try again.');
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* First Name Field */}
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <Field
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Your First Name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Last Name Field */}
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <Field
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Your Last Name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <Field
                type="email"
                id="Email"
                name="Email"
                placeholder="Your Email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <ErrorMessage name="Email" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
