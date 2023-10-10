import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RobotRoutingModule } from './robot-routing.module';
import { CreaterobotComponent } from './createrobot/createrobot.component';
import { ListrobotComponent } from './listrobot/listrobot.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  MatButtonModule, MatCardModule,
  MatInputModule, MatListModule,
  MatToolbarModule, MatSelectModule,
  MatFormFieldModule, MatTableModule,
  MatPaginatorModule, MatSortModule,
  MatProgressBarModule, MatIconModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule} from '@angular/forms';
import { RobotsdetailsComponent } from './robotsdetails/robotsdetails.component';
import { ListplanificationComponent } from '../planification/listplanification/listplanification.component';

@NgModule({
  declarations: [CreaterobotComponent, ListrobotComponent, RobotsdetailsComponent],
  imports: [
    CommonModule,
    RobotRoutingModule,
    FormsModule,
    HttpClientModule ,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressBarModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,


  ]
  ,exports:[
     ListrobotComponent,
  
  ]
})
export class RobotModule { }
