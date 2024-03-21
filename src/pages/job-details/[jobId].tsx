import IJobData from "@/interfaces/IJobData";
import React, {useState} from "react";
import Image from 'next/image';
import { MdFavorite } from 'react-icons/md';
import {useRouter} from "next/router";
import AppHeader from "@/components/header";
const JobPage = () => {
  const jobs1: IJobData[] = [
    {employer_name: 'John',
      job_id: 1,
      job_description: 'John',
      job_image: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
      job_max_salary: 100,
      job_city: 'San Francisco',
      job_min_salary: 100,
      job_title: 'Prog',
      job_is_remote: true},
    {employer_name: 'John2',
      job_description: 'John2',
      job_image: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
      job_id: 2 ,
      job_max_salary: 400,
      job_city: 'New York',
      job_min_salary: 100,
      job_title: 'Accounter',
      job_is_remote: false},
  ];

  const router = useRouter();
  if (!router.query.jobId)
      return <div></div>
  const {
    job_description,
    job_city,
    job_title,
    job_min_salary,
    job_max_salary,
    job_is_remote,
    job_image,
    employer_name} = jobs1.filter((job)=>{
      if (router.query.jobId) return job.job_id == +router.query.jobId})[0];

  const [isLiked, setIsLiked] = useState(false);
  const handleLike = () => {
    setIsLiked((liked)=> !liked);
  };

  return (
    <div className="bg-white shadow-md rounded h-screen flex flex-col  items-center relative">
      <AppHeader />
      <div className="shadow-blue-900 shadow-2xl p-10 w-3/6 px-20">
        <div className="flex justify-between">

          <div className="w-42 m-4 ml-0">
            <h2 className="text-3xl font-bold">{job_title}</h2>
            <p className="text-gray-500 text-2xl">{employer_name}</p>
          </div>
          <Image
            src={job_image}
            alt={job_title}
            width={200}
            height={200}
            className="rounded"
          />
        </div>
          <button
            className={`mr-2 flex items-center text-xl ${isLiked ? 'text-blue-300' : ''}`}
            onClick={handleLike}
          >
            <MdFavorite
              className={`text-gray-500 text-3xl mr-3 duration-300 ${isLiked ? 'text-blue-300' : ''}`}
            />
            {isLiked ? 'Liked' : 'Like'}
          </button>
        <div className="mt-4">
          <p className="text-gray-500 text-xl">City: {job_city}</p>
          <p className="text-gray-500 text-xl">
            Salary: {job_min_salary == job_max_salary ? `${job_min_salary}$` : `${job_min_salary} - ${job_max_salary}$`}
          </p>
          <p className="text-gray-500 text-xl">
            Remote: {job_is_remote ? 'Yes' : 'No'}
          </p>
        </div>
        <div className="mt-4">
          <p className="text-gray-500 break-all">{job_description}</p>
        </div>
        <div className="flex justify-between mt-4">

        </div>
      </div>
    </div>
  );
}
export default JobPage;
