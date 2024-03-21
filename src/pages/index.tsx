import React, { useState } from 'react';
import AppHeader from "@/components/header";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="h-screen">
      <AppHeader />
      <div className="flex flex-col justify-center items-center 6 mt-0">
      <h3 className="text-3xl mb-8" >Find Your Job</h3>
      <div className="w-11/12 md:w-1/2  ">
        <input
          type="text"
          placeholder="Search job title"
          className="w-full p-3 mb-4 border-gray-400 border-2 rounded-lg"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
      </div>
    </div>
  );
};

export default Home;
