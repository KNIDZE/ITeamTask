import React, { useState } from 'react';
import IJobData from "@/interfaces/IJobData";
import JobCard from "@/components/jobCard";
import AppHeader from "@/components/header";

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const jobs: IJobData[] = [
    {employer_name: 'John',
    job_id: 1,
      job_description: 'John',
      job_image: 'images/',
    job_max_salary: 100,
    job_city: 'San Francisco',
    job_min_salary: 100,
    job_title: 'Prog',
    job_is_remote: true},
    {employer_name: 'John2',
      job_description: 'John2',
      job_image: 'images/',
      job_id: 2 ,
      job_max_salary: 100,
      job_city: 'San Francisco',
      job_min_salary: 100,
      job_title: 'Prog',
      job_is_remote: true},
  ];
  const filteredJobs = jobs.filter((job) =>{
    return job.job_title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="h-screen">
      <AppHeader />
      <div className="flex flex-col justify-center items-center 6 mt-0">
      <h3 className="text-3xl mb-8" >Recommendations</h3>
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

      <div className="grid grid-cols-4 gap-5">
        {filteredJobs.map((job) => {
          return (
            <div key={job.job_id} className="w-full md:w-1/3 px-2 mb-4">
              <JobCard job={job} />
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default Jobs;
