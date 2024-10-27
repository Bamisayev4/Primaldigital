import Link from 'next/link';
import React from 'react';

export const Knowus = () => {

  return (
    <div className="flex flex-col items-center justify-center shadow mt-40 container mx-auto py-20 text-center bg-black text-white">
      <h2 className="text-3x1"> About Us </h2>
      <p>we are best in academy and also in project an team work </p>
      <p>we will likke to have you</p>
      <a 
        href="http://instagram.com/habakuk"
        className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg transition duration-300 hover:bg-blue-600"
      >I'm am here</a>
      
    </div>
  );
}
