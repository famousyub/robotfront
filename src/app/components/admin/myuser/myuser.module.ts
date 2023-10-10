import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyuserRoutingModule } from './myuser-routing.module';
import { ListuserComponent } from './listuser/listuser.component';
import { AddusersComponent } from './addusers/addusers.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [ListuserComponent, AddusersComponent],
  imports: [
    CommonModule,
    MyuserRoutingModule,
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
})
export class MyuserModule { }
