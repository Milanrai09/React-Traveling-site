import React from 'react';
import { HiUser, HiMail, HiPhone, HiPencilAlt } from 'react-icons/hi';
import Footer from '../components/Footer';
import Header from '../components/Header';

const InputField = ({ icon: Icon, ...props }) => (
  <div className="relative mb-4">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <Icon className="h-5 w-5 text-gray-400" />
    </div>
    <input
      {...props}
      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-white pl-10"
    />
  </div>
);

const TextArea = ({ icon: Icon, ...props }) => (
  <div className="relative mb-4">
    <div className="absolute top-3 left-3 pointer-events-none">
      <Icon className="h-5 w-5 text-gray-400" />
    </div>
    <textarea
      {...props}
      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-white pl-10 h-32 resize-none"
    />
  </div>
);

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your contact form submission logic here
    console.log('Contact form submitted');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 h-screen">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Contact Us
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              We'd love to hear from you. Please fill out this form.
            </p>
          </div>
          <form className="mt-8 space-y-6 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <InputField
                icon={HiUser}
                id="full-name"
                name="fullName"
                type="text"
                required
                placeholder="Full Name"
              />
              <InputField
                icon={HiMail}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Email address"
              />
              <InputField
                icon={HiPhone}
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone Number (optional)"
              />
              <TextArea
                icon={HiPencilAlt}
                id="message"
                name="message"
                required
                placeholder="Your Message"
              />
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
              >
                Send Message
              </button>
            </div>
          </form>
          <div className="text-center">
            <p className="text-sm text-gray-500">
              By submitting this form, you agree to our{' '}
              <a href="/privacy-policy" className="font-medium text-indigo-600 hover:text-indigo-500">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;