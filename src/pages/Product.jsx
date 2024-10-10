import React from 'react';

const Product = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="max-w-4xl bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-emerald-500 mb-4">Our Courses</h1>
        <p className="text-gray-700 text-lg mb-6">
          We offer a wide range of courses to help students build technical skills in fields like IT consulting, software development, and more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div className="bg-emerald-100 p-5 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold text-emerald-600">Software Development</h2>
            <p className="text-gray-600 mt-3">Hands-on training in the latest programming languages and tools.</p>
          </div>
          <div className="bg-emerald-100 p-5 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold text-emerald-600">IT Consulting</h2>
            <p className="text-gray-600 mt-3">In-depth training on how to consult and provide IT solutions to businesses.</p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button className="bg-emerald-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-emerald-400 transition duration-300">
            Explore All Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
