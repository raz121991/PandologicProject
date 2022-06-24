import { createAction, props } from '@ngrx/store';
import { JobData } from '../model/jobData.model';

export const getJobsViews = createAction(
  '[ViewJobsDataPage] GetJobsData'
);

export const getJobsViewsSuccess = createAction(
    '[ViewJobsDataPage] GetJobsData Success',  props<{jobsView: any}>()
  );