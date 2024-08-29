'use client';

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'; // Import axios for HTTP requests

// Validation schema using Yup
const validationSchema = Yup.object({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
});

const SimpleForm: React.FC = () => {
  const webhookUrl = 'https://hook.us1.make.com/pbiheg53uchfgi7cdxtlucz3yms9z0ni'; 
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Contact Us</h2>
      <Formik
        initialValues={{ fullName: '', email: '' }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          try {
            // Send form data to the Make.com webhook using axios
            await axios.post(webhookUrl, values);
            alert('Form submitted successfully!');
          } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to submit form. Please try again.');
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Full Name Field */}
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <Field
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Your Full Name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
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
