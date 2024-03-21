import api from '../api/index';
import { AxiosResponse } from 'axios';
import IGetResponse from '@/interfaces/IGetResponse';
import IJobData from '@/interfaces/IJobData';

export async function listJobsFetcher(searchTerm: string): Promise<IJobData[] | undefined> {
  try {
    const response: AxiosResponse<IGetResponse> = await api.get('/search', {
      method: 'GET',
      params: { query: searchTerm }
    });
    console.log(response.data);
    return response.data.data.map((jobData): IJobData => {
      return {
        employerName: jobData.employer_name,
        jobTitle: jobData.job_title,
        jobId: jobData.job_id,
        jobImage: jobData.employer_logo,
        jobDescription: jobData.job_description,
        jobCity: jobData.job_city,
        jobIsRemote: jobData.job_is_remote,
        jobMinSalary: jobData.job_min_salary,
        jobMaxSalary: jobData.job_max_salary,
        applyLink: jobData.job_apply_link,
      };
    });
  } catch (e) {
    console.log('Error while getting response: ', e);
  }
}

export async function detailFetcher(id: string): Promise<IJobData | undefined> {
  try {
    const response: AxiosResponse<IGetResponse> = await api.get('/job-details', {
      method: 'GET',
      params: {
        job_id: id,
        extended_publisher_details: false
      }
    });
    return response.data.data.map((jobData): IJobData => {
      return {
        employerName: jobData.employer_name,
        jobTitle: jobData.job_title,
        jobId: jobData.job_id,
        jobImage: jobData.employer_logo,
        jobDescription: jobData.job_description,
        jobCity: jobData.job_city,
        jobIsRemote: jobData.job_is_remote,
        jobMinSalary: jobData.job_min_salary,
        jobMaxSalary: jobData.job_max_salary,
        applyLink: jobData.job_apply_link,
      };
    })[0];
  } catch (e) {
    console.log('Error while getting response: ', e);
  }
}
