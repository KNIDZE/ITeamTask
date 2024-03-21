import IJobData from '@/interfaces/IJobData';
import Link from 'next/link';

const JobCard = ({ job }: { job: IJobData }) => {
  const {
    employerName,
    jobIsRemote,
    jobTitle,
    jobCity,
    jobMaxSalary,
    jobMinSalary
  } = job;
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden p-4 w-80"
    >
      <div className="flex justify-between">
        <div className="text-blue-500 font-semibold">
          {employerName}
        </div>
        <div className="text-gray-400 text-sm">
          {jobIsRemote ? 'Remote' : 'In-person'}
        </div>
      </div>

      <div className="my-2 text-xl font-semibold">
        {jobTitle}
      </div>
      <div className="mb-4">
        {jobCity}
      </div>
      <div className="flex justify-between items-center">
        <Link href={`/job-details/${job.jobId}`} className="bg-black rounded-md text-white px-3 py-1">Details</Link>
        {jobMinSalary && <div className="font-semibold">
          Salary: {jobMinSalary == jobMaxSalary ? `${jobMinSalary}$` : `${jobMinSalary} - ${jobMaxSalary}$`}
        </div>}

      </div>
    </div>
  );
};

export default JobCard;
