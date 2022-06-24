import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { JobData } from '../model/jobData.model';
import * as jobsActions from '../actions/jobs.actions';
import { JobState } from '../reducers/jobs.reducer';
import { getJobsData } from '../selectors/jobs.selector';
import { Chart,registerables } from 'chart.js';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.css']
})
export class ViewdataComponent implements OnInit {

  jobsDataViews$: Observable<JobData[]> ;
  jobViews:number[] = [];
  predictedJobViews:number[] = [];
  chart:any;
  jobsData:JobData[] = [];

  constructor(private store:Store<{jobsState:JobState}>,public datepipe:DatePipe) { 
    Chart.register(...registerables);
   this.jobsDataViews$ = this.store.select(getJobsData);
   this.jobsDataViews$.subscribe(jobsData => {
    debugger;
    this.jobsData = jobsData;

      console.log(this.jobsData);
    this.loadChart();

   }
   )
  
  }
  

  ngOnInit(): void {
    this.chart = document.getElementById('jobsData');
    this.store.dispatch(jobsActions.getJobsViews());
  }

  loadChart():void
  {
    new Chart(this.chart,{
      type:'line',
      data: {
        datasets:[
          {
            data:this.jobsData.map(jd => jd.jobViews),
            label:'Job Views',
            backgroundColor:'#32CD32',
            borderColor:'#32CD32'
          },
          {
            data:this.jobsData.map(jd => jd.predictedJobViews),
            label:'Predicted Job Views',
            backgroundColor:'#29b6f6',
            borderColor:'#29b6f6'
          }
        ],
        labels:this.jobsData.map(jd => jd.date),

      },
      options:{
        responsive:true,
        plugins:{
          tooltip:{
            enabled:true,
          }
        },
        maintainAspectRatio:false,
        scales:{
          y:{
            grid:{
              drawBorder:false
            },
            beginAtZero:true
          },
          x:{
            grid:{
              borderDash:[1,2]
            }
          }
        }
      }
    })
  }

}
