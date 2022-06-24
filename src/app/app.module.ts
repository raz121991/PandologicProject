import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ViewdataComponent } from './viewdata/viewdata.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import {jobsDataReducer} from './reducers/jobs.reducer';
import { EffectsModule } from '@ngrx/effects';
import {JobsDataEffects} from './effects/jobs.effects';
import { CommonModule, DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    ViewdataComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('jobs',jobsDataReducer),
    EffectsModule.forRoot([JobsDataEffects])
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
