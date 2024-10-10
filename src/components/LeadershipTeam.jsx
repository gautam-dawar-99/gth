// import React from 'react';

// const teamMembers = [
//   {
//     name: 'Pankaj Bajaj',
//     title: 'Chief Operating Officer',
//     bio: 'Certified Amazon Cloud Instructor, Microsoft Azure Certified, and Digital Marketing Expert.',
//     image: 'link-to-image',
//   },
//   {
//     name: 'Another Leader',
//     title: 'CTO',
//     bio: 'Details about their expertise and contributions.',
//     image: 'link-to-image',
//   },
//   // Add more team members as necessary
// ];

// const LeadershipTeam = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
//       <h1 className="text-4xl font-bold text-emerald-500 mb-8 text-center">Meet Our Leadership</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {teamMembers.map((member, index) => (
//           <div key={index} className="bg-white p-5 rounded-lg shadow-lg text-center">
//             <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4"/>
//             <h2 className="text-2xl font-semibold text-emerald-600">{member.name}</h2>
//             <p className="text-gray-500 text-sm">{member.title}</p>
//             <p className="mt-3 text-gray-600">{member.bio}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LeadershipTeam;
import React from 'react';

const teamMembers = [
  {
    name: 'Pankaj Bajaj',
    title: 'Chief Operating Officer',
    bio: 'Certified Amazon Cloud Instructor, Microsoft Azure Certified, and Digital Marketing Expert.',
    image: 'link-to-image', // Replace with actual image URL
  },
  {
    name: 'Another Leader',
    title: 'CTO',
    bio: 'Details about their expertise and contributions.',
    image: 'link-to-image', // Replace with actual image URL
  },
  // Add more team members as necessary
];

const LeadershipTeam = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-emerald-500 mb-8 text-center">Meet Our Leadership</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white p-5 rounded-lg shadow-lg text-center">
            <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4"/>
            <h2 className="text-2xl font-semibold text-emerald-600">{member.name}</h2>
            <p className="text-gray-500 text-sm">{member.title}</p>
            <p className="mt-3 text-gray-600">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipTeam;
