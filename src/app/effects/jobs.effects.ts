import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, merge } from 'rxjs';
import { map, exhaustMap, catchError, mergeMap } from 'rxjs/operators';
import { JobsService } from '../jobs.service';
import * as jobsActions from '../actions/jobs.actions'; 

@Injectable()
export class JobsDataEffects {
 
  
    loadJobsData$ = createEffect(() => this.actions$.pipe(
        ofType(jobsActions.getJobsViews),
        mergeMap(() => this.jobsDataService.getJobsViewsData()
        .pipe(map(jobsView => {
            console.log(jobsView);
            return jobsActions.getJobsViewsSuccess({jobsView}) }))),
            catchError(() => EMPTY),
            )
            );
 
  constructor(
    private actions$: Actions,
    private jobsDataService:JobsService
  ) {}
}