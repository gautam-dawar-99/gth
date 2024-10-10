import React from 'react';

const stories = [
  {
    name: 'Ravi Kumar',
    title: 'Software Developer at XYZ',
    story: 'Geeta Technical Hub helped me land my dream job with hands-on experience in MERN Stack Development.',
    image: 'link-to-image',
  },
  // Add more stories
];

const SuccessStories = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-emerald-500 mb-8 text-center">Success Stories</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stories.map((story, index) => (
          <div key={index} className="bg-white p-5 rounded-lg shadow-lg text-center">
            <img src={story.image} alt={story.name} className="w-24 h-24 rounded-full mx-auto mb-4"/>
            <h2 className="text-2xl font-semibold text-emerald-600">{story.name}</h2>
            <p className="text-gray-500 text-sm">{story.title}</p>
            <p className="mt-3 text-gray-600">"{story.story}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
