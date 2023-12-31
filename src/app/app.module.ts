import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { HomeComponent } from './components/user/home/home.component';
import { DetailComponent } from './components/user/detail/detail.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { ProductListComponent } from './components/admin/product-list/product-list.component';
import { UserTemplateComponent } from './components/template/user-template/user-template.component';
import { AdminTemplateComponent } from './components/template/admin-template/admin-template.component';
import { NotFoundComponent } from './components/error/not-found/not-found.component';
import { UnathorizedComponent } from './components/error/unathorized/unathorized.component';

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
import { TransactionListComponent } from './components/admin/transaction-list/transaction-list.component';
import { RobotsComponent } from './components/admin/robots/robots.component';
import { RobotModule } from './components/admin/robot/robot.module';
import { PlayerIndex } from '@angular/core/src/render3/interfaces/player';
import { PlanificationModule } from './components/admin/planification/planification.module';
import { ExcutionModule } from './components/admin/excution/excution.module';
import { MyuserModule } from './components/admin/myuser/myuser.module';
import { AddexcutiontComponent } from './components/admin/addexcutiont/addexcutiont.component';
import { ExcutiotdetailsComponent } from './components/admin/excutiotdetails/excutiotdetails.component';
import { ExcutiontlistComponent } from './components/admin/excutiontlist/excutiontlist.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    DetailComponent,
    DashboardComponent,
    UserListComponent,
    ProductListComponent,
    UserTemplateComponent,
    AdminTemplateComponent,
    NotFoundComponent,
    UnathorizedComponent,
    TransactionListComponent,
    RobotsComponent,
    AddexcutiontComponent,
    ExcutiotdetailsComponent,
    ExcutiontlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    RobotModule,
    PlanificationModule,
    ExcutionModule,
    MyuserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
