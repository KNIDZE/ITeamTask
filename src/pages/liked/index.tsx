import React, { useState } from 'react';
import IJobData from "@/interfaces/IJobData";
import JobCard from "@/components/jobCard";
import AppHeader from "@/components/header";
import { MdDelete } from "react-icons/md";
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
const Liked = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flex flex-col  items-center 6 h-screen mt-0">
      <AppHeader />
      <h2 className="text-3xl mb-8">Liked Jobs</h2>
      <div className="grid grid-cols-4 gap-6 ">
        {jobs.map((job) =>
          <div key={job.job_id} className="bg-blue-300 rounded-lg flex flex-row items-center ">
          <JobCard job={job}/>
            <MdDelete className="text-white mx-2 text-2xl hover:cursor-pointer"/>
          </div>)}
      </div>
    </div>
  );
};

export default Liked;
