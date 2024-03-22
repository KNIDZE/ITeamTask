import React, { Suspense, useState } from 'react';
import AppHeader from '@/components/appHeader';
import useSWR from 'swr';
import { MdSearch } from 'react-icons/md';
import JobsGrid from '@/components/jobsGrid';
import { listJobsFetcher } from '@/modules/requests';
import Loader from '@/components/loader';


const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [shouldFetch, setShouldFetch] = useState(false);
  const { data } = useSWR(shouldFetch ? null : searchTerm, listJobsFetcher);
  const handleSearch = () => {
    setShouldFetch(true);
  };
  return (
    <Suspense fallback={<Loader />}>
      <div className="min-h-screen flex flex-col">
        <AppHeader />
        <div className="flex flex-col justify-center items-center mt-8">
          <h3 className="text-3xl mb-8">Find Your Job</h3>
          <div className="w-11/12 md:w-1/2 flex items-center">
            <input
              type="text"
              placeholder="Search job title"
              className="w-full p-3 border-gray-400 border-2 rounded-lg outline-0"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  handleSearch();
                }
              }}
            />
            <button type="button"
              className=" bg-blue-500 hover:bg-blue-400 active:bg-white
             aspect-square flex justify-center items-center rounded-xl ml-4 duration-300 p-2">
              <MdSearch className="text-3xl" onClick={handleSearch} />
            </button>
          </div>
          {data && <JobsGrid jobs={data} />}
        </div>
      </div>
    </Suspense>
  );
};

export default Home;
