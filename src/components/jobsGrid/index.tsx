import JobCard from '@/components/jobCard';
import React from 'react';
import IJobData from '@/interfaces/IJobData';

const JobsGrid = (props: { jobs: IJobData[] }) => {
  const { jobs } = props;
  return (
    <div className="grid my-8  gap-5 grid-cols-2 lg:grid-cols-3">
      {jobs.map((job) => {
        return (
          <div key={job.jobId} className="w-full md:w-1/3 px-2 mb-4">
            <JobCard job={job} />
          </div>
        );
      })}
    </div>
  );
};
export default JobsGrid;
