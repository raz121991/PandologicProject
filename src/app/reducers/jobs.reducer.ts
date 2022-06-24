import { createReducer, on } from "@ngrx/store";
import { getJobsViews } from '../actions/jobs.actions';
import { JobData } from "../model/jobData.model";
import * as jobsActions from '../actions/jobs.actions';

export interface JobState {
    jobsData: JobData[];
}

export const initialJobState: JobState = {
    jobsData: []
}


export const jobsFeatureKey = 'jobs';

export const jobsDataReducer = createReducer(initialJobState,
    on(jobsActions.getJobsViewsSuccess, (state, { jobsView }) => {
        debugger;
        return (
            ({ ...state, jobsData: jobsView }))
    }))




