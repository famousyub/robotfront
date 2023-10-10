import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanificationRoutingModule } from './planification-routing.module';
import { ListplanificationComponent } from './listplanification/listplanification.component';
import { CreateplanificationComponent } from './createplanification/createplanification.component';
import {
  MatButtonModule, MatCardModule,
  MatInputModule, MatListModule,
  MatToolbarModule, MatSelectModule,
  MatFormFieldModule, MatTableModule,
  MatPaginatorModule, MatSortModule,
  MatProgressBarModule, MatIconModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [ListplanificationComponent, CreateplanificationComponent],
  imports: [
    CommonModule,
    PlanificationRoutingModule,
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
  ],
  exports:[
    ListplanificationComponent,
    CreateplanificationComponent
  ]
})
export class PlanificationModule { }
