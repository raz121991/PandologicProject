import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JobData } from './model/jobData.model';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

   url = 'https://localhost:44385/jobs';
  constructor(private http:HttpClient) { }
  
  jobsData:JobData[] = [];

  getJobsViewsData()
  {
    return this.http.get<JobData[]>(this.url);
    }
  }

