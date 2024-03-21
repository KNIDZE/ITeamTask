import IJobData from '@/interfaces/IJobData';

export const toggleLikedJob = (jobData: IJobData, inList: boolean) => {
  const likedData = localStorage.getItem('liked');
  // create new instance if it doesn't exist
  if (!likedData) {
    localStorage.setItem('liked', JSON.stringify([jobData]));
    return;
  }
  const likedList: IJobData[] = JSON.parse(likedData);
  if (inList) {
    // set to local storage filtered list
    localStorage.setItem('liked', JSON.stringify(likedList.filter((item) => item.jobId !== jobData.jobId)));
  } else {
    likedList.push(jobData);
    localStorage.setItem('liked', JSON.stringify(likedList));
  }
};

export const isJobInStorage = (jobData: IJobData): boolean => {
  const likedData = localStorage.getItem('liked');
  if (!likedData) {
    return false;
  }
  const likedList: IJobData[] = JSON.parse(likedData);
  // find returns boolean or undefined, so !! like transform to boolean
  return !!likedList.find((item) => item.jobId == jobData.jobId);
};

export const getLikedJobs = () => {
  const likedData = localStorage.getItem('liked');
  if (likedData) {
    return JSON.parse(likedData);
  }
  return undefined;
};

export function deleteLikedJob(jobData: IJobData) {
  const likedData = localStorage.getItem('liked');
  if (likedData) {
    const likedList: IJobData[] = JSON.parse(likedData);
    const filtered = likedList.filter((item) => item.jobId !== jobData.jobId);
    localStorage.setItem('liked', JSON.stringify(filtered));
    return filtered;
  }
  return [];
}
