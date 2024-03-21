import { AxiosResponse } from 'axios';

export default interface IGetResponse extends AxiosResponse {
    data: {
        employer_name: string;
        job_title: string;
        job_id: number;
        employer_logo: string;
        job_description: string;
        job_city: string;
        job_is_remote: boolean;
        job_min_salary: number;
        job_max_salary: number;
        job_apply_link: string;
    }[]
}
