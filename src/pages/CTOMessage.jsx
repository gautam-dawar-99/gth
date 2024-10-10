import React from 'react';

const CTOMessage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="max-w-4xl bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-emerald-500 mb-4 text-center">Message from the CTO</h1>

        {/* CTO Information Section */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-emerald-600">Pankaj Bajaj</h2>
          <p className="text-gray-600 text-sm">
            Chief Operating Officer at Geeta Technical Hub <br />
            Certified Amazon Cloud Instructor | Microsoft Azure Certified | Redhat Certified System Administrator |
            Google Search Ads Certified | Google Display Ads | Digital Marketing Expert
          </p>
        </div>

        {/* Message Section */}
        <div className="text-gray-700 text-lg">
          <p className="mb-4">
            As the Chief Operating Officer at Geeta Technical Hub, Geeta University, I am committed to revolutionizing
            education and empowering students to excel in their careers. Our mission is to provide students with
            cutting-edge, industry-relevant skills that set them apart in a competitive job market.
          </p>
          <p className="mb-4">
            At Geeta Technical Hub, we focus on a comprehensive curriculum that encompasses Data Structures and
            Algorithms (DSA), Competitive Coding, MERN/MEAN Stack Development, Artificial Intelligence and Machine
            Learning, Data Science, Cyber Security, Augmented and Virtual Reality, and many more emerging technologies.
          </p>
          <p className="mb-4">
            We believe that students should be job-ready from day one, and that's why we continuously update our course
            offerings to reflect the latest trends and demands of the industry. Join us at Geeta Technical Hub to
            unlock your potential and become a future-ready professional.
          </p>
          <p className="text-center font-bold mt-6">- Pankaj Bajaj</p>
        </div>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <a href="/contact" className="bg-emerald-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-emerald-400 transition duration-300">
            Contact Us for More Information
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTOMessage;
