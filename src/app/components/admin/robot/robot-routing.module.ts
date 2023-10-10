import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListrobotComponent } from './listrobot/listrobot.component';
import { RobotsdetailsComponent } from './robotsdetails/robotsdetails.component';
import { CreaterobotComponent } from './createrobot/createrobot.component';

const routes: Routes = [

  { path: '', redirectTo: '/robots', pathMatch: 'full' },
  { path: 'robots', component: ListrobotComponent },
  { path: 'robots/:id', component: RobotsdetailsComponent },
  { path: 'robots/add', component: CreaterobotComponent },
  //{ path: 'robots/edit/:id', component: RobotEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RobotRoutingModule { }
