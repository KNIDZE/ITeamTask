import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { MdFavorite } from 'react-icons/md';
import { useRouter } from 'next/router';
import AppHeader from '@/components/appHeader';
import { toggleLikedJob } from '@/modules/like';
import useSWR from 'swr';
import { detailFetcher } from '@/modules/requests';
import Loader from '@/components/loader';

const JobPage = () => {
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(false);
  const [userId, setUserId] = useState<string | undefined>('');
  // setting initial state for job card
  useEffect(() => {
    if (router.query.jobId) setUserId(router.query.jobId.toString());
  }, []);
  const { data, isLoading } = useSWR(userId ? userId : null, detailFetcher);
  if (!data || isLoading) return <Loader/>;
  const {
    jobCity,
    applyLink,
    jobTitle,
    jobDescription,
    jobImage,
    jobIsRemote,
    jobMinSalary,
    jobMaxSalary,
    employerName
  } = data;
  const handleLike = () => {
    if (data) {
      setIsLiked((liked) => !liked);
      toggleLikedJob(data, isLiked);
    }
  };

  return (
    <div className="shadow-md rounded min-h-screen flex flex-col  items-center relative">
      <AppHeader />
      <div className="shadow-blue-900 bg-white shadow-2xl p-10 w-3/6 px-20">
        <div className="flex justify-between items-center">

          <div className="w-42 m-4 ml-0">
            <h3 className="text-3xl font-bold">{jobTitle}</h3>
            <p className="text-gray-500 text-2xl">{employerName}</p>

          </div>
          {jobImage && <Image
            src={jobImage}
            alt={jobTitle}
            width={32}
            height={32}
            className="rounded w-16 aspect-square h-16 block"
          />}
        </div>
        <button type="button"
          className={`mr-2 flex items-center text-xl ${isLiked ? 'text-blue-300' : ''}`}
          onClick={handleLike}
        >
          <MdFavorite
            className={`text-3xl mr-3 duration-300 ${isLiked ? 'text-blue-300' : 'text-gray-500'}`}
          />
          {isLiked ? 'Liked' : 'Like'}
        </button>
        <div className="my-4">
          <p className="text-gray-500 text-xl">City: {jobCity ? jobCity : 'No information'}</p>
          {jobMinSalary && <p className="text-gray-500 text-xl">
            Salary: {jobMinSalary === jobMaxSalary ? `${jobMinSalary}$` : `${jobMinSalary} - ${jobMaxSalary}$`}
          </p>}
          <p className="text-gray-500 text-xl">
            Remote: {jobIsRemote ? 'Yes' : 'No'}
          </p>
        </div>
        {/* Link in new tab */}
        {applyLink && <a target="_blank" rel="noopener noreferrer" className="p-2 px-8 bg-blue-500 rounded-xl
             hover:bg-blue-400 text-white decoration-0" href={applyLink}>Apply</a>}
        <div className="mt-4">
          <p className="text-gray-500 break-all">{jobDescription}</p>
        </div>
      </div>
    </div>
  );
};
export default JobPage;
