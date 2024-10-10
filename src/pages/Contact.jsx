import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic goes here
    console.log('Form data:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="max-w-4xl bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-emerald-500 mb-4 text-center">Contact Us</h1>
        <p className="text-gray-700 text-lg mb-6 text-center">
          We're here to help you! Feel free to reach out for any information or queries.
        </p>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-emerald-100 p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold text-emerald-600">Call Us</h2>
            <p className="text-gray-600 mt-3">+91 9896803571</p>
          </div>
          <div className="bg-emerald-100 p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold text-emerald-600">Visit Us</h2>
            <p className="text-gray-600 mt-3">Geeta University Panipat, Haryana</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:border-emerald-400"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:border-emerald-400"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:border-emerald-400"
              placeholder="Type your message here"
              rows="5"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-emerald-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-emerald-400 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Footer Information */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 text-sm">
            For more information, email us at <a href="mailto:info@gth.com" className="text-emerald-500">info@gth.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
