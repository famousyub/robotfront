import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExcutionRoutingModule } from './excution-routing.module';
import { CreateexcutionComponent } from './createexcution/createexcution.component';
import { ListexcutionComponent } from './listexcution/listexcution.component';
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
  declarations: [CreateexcutionComponent, ListexcutionComponent],
  imports: [
    CommonModule,
    ExcutionRoutingModule,
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
  ],exports:[CreateexcutionComponent]
})
export class ExcutionModule { }
