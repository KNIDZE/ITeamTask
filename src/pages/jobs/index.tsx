import React, { Suspense, useEffect, useState } from 'react';
import AppHeader from '@/components/appHeader';
import JobsGrid from '@/components/jobsGrid';
import useSWR from 'swr';
import IAccount from '@/interfaces/IAccount';
import { MdSearch } from 'react-icons/md';
import { listJobsFetcher } from '@/modules/requests';
import Loader from '@/components/loader';

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [shouldFetch, setShouldFetch] = useState(false);
  const { data, isLoading } = useSWR(shouldFetch ? searchTerm : null, listJobsFetcher);
  useEffect(() => {
    const userString = localStorage.getItem('user');
    if (userString !== null) {
      const user: IAccount = JSON.parse(userString);
      setSearchTerm(user.about + ' ' + user.desiredPosition);
      handleSearch();
    }
  }, []);
  const handleSearch = () => {
    setShouldFetch(true);
  };
  return (
    <div className="min-h-screen">
      <AppHeader />
      <div className="flex flex-col justify-center items-center 6 mt-0">
        <h3 className="text-3xl mb-8">Recommendations</h3>
        <div className="w-11/12 md:w-1/2 flex items-center ">
          <input
            type="text"
            placeholder="Search job title"
            className="w-full p-3 border-gray-400 border-2 rounded-lg"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <button
            className=" bg-blue-500 hover:bg-blue-400 active:bg-white
             aspect-square flex justify-center items-center rounded-xl ml-4 duration-300 p-2 h-full">
            <MdSearch className="text-3xl" onClick={handleSearch} />
          </button>
        </div>
        {data && <JobsGrid jobs={data} />}
          {isLoading && <Loader />}
      </div>
    </div>
  );
};

export default Jobs;
