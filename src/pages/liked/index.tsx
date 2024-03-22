import React, { useEffect, useState } from 'react';
import JobCard from '@/components/jobCard';
import AppHeader from '@/components/appHeader';
import { MdDelete } from 'react-icons/md';
import IJobData from '@/interfaces/IJobData';
import { deleteLikedJob, getLikedJobs } from '@/modules/like';

const Liked = () => {
  const [likedJobs, setLikedJobs] = useState<IJobData[]>([]);
  useEffect(() => {
    setLikedJobs(getLikedJobs());
  });
  const handleDelete = (job: IJobData) => {
    deleteLikedJob(job);
    const filtered = deleteLikedJob(job);
    setLikedJobs(filtered);
  };
  return (
    <div className="flex flex-col  items-center 6 min-h-screen mt-0">
      <AppHeader />
      <h2 className="text-3xl mb-8">Liked Jobs</h2>
      <div className="grid  gap-5 grid-cols-2 lg:grid-cols-4">
        {likedJobs ? likedJobs.map((job) =>
            <div key={job.jobId} className="bg-blue-300 rounded-lg flex flex-row items-center ">
              <JobCard job={job} />
              <MdDelete
                className="text-white mx-2 text-2xl hover:cursor-pointer"
                onClick={() =>handleDelete(job)} />
            </div>) :
          <p className="absolute left-1/2 -translate-x-1/2"> There aren&apos;t liked jobs</p>}
      </div>
    </div>
  );
};

export default Liked;
