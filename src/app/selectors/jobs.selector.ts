import { createFeatureSelector, createSelector, State } from "@ngrx/store";
import { jobsFeatureKey, JobState } from "../reducers/jobs.reducer";

export const selectJobState = createFeatureSelector<JobState>(
    jobsFeatureKey
  );
  
  export const getJobsData = createSelector(
    selectJobState,
      (state: JobState) => state.jobsData
  );