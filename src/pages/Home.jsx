import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="max-w-4xl bg-white p-10 rounded-lg shadow-lg text-center rounded-lg shadow-lg hover:bg-emerald-100">
        <h1 className="text-4xl font-bold text-emerald-500 mb-4">Welcome to Geeta Technical Hub</h1>
        <p className="text-gray-700 text-lg mb-6">
          At Geeta Technical Hub, we provide unmatched opportunities for students to develop technical skills and become job-ready through hands-on training.
        </p>
        <button className="bg-emerald-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-emerald-400 transition duration-300">
          Explore Our Courses
        </button>
      </div>
    </div>
  );
};

export default Home;
