import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="max-w-4xl bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-emerald-500 mb-4">About Geeta Technical Hub</h1>
        <p className="text-gray-700 text-lg mb-6">
          Geeta Technical Hub was founded in 2021 with a mission to empower students with cutting-edge technology and make them industry-ready.
          We provide training in various fields like IT services, software development, and IT consulting.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div className="bg-emerald-100 p-5 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold text-emerald-600">Our Vision</h2>
            <p className="text-gray-600 mt-3">
              To become a leading tech training hub and provide hands-on learning opportunities for students, enabling them to excel in their careers.
            </p>
          </div>
          <div className="bg-emerald-100 p-5 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold text-emerald-600">Our Team</h2>
            <p className="text-gray-600 mt-3">
              We have a dedicated team of professionals and mentors who guide students through practical learning and industry projects.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button className="bg-emerald-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-emerald-400 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
