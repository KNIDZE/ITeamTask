import IJobData from "@/interfaces/IJobData";
import Link from "next/link";

const JobCard = ({ job } : {job: IJobData}) => {
  const { employer_name, job_is_remote, job_city, job_title, job_min_salary, job_max_salary } = job;
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden p-4 w-64"
    >
      <div className="flex justify-between">
        <div className="text-blue-500 font-semibold">
          {employer_name}
        </div>
        <div className="text-gray-400">
          {job_is_remote ?'Remote' : 'In-person'}
        </div>
      </div>

      <div className="my-2 text-xl font-semibold">
        {job_title}
      </div>
      <div className="mb-4">
        {job_city}
      </div>
      <div className="flex justify-between items-center">
        <div className="font-semibold">
          {`${job_min_salary}$ - ${job_max_salary}$`}
        </div>
        <Link href={`/job-details/${job.job_id}`} className="bg-black rounded-md text-white px-3 py-1">Details</Link>
      </div>
    </div>
  );
};

export default JobCard;
