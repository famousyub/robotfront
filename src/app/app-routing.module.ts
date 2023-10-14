import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/user/home/home.component';
import {LoginComponent} from './components/user/login/login.component';
import {RegisterComponent} from './components/user/register/register.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {DetailComponent} from './components/user/detail/detail.component';
import {DashboardComponent} from './components/admin/dashboard/dashboard.component';
import {UserListComponent} from './components/admin/user-list/user-list.component';
import {ProductListComponent} from './components/admin/product-list/product-list.component';
import {UnathorizedComponent} from './components/error/unathorized/unathorized.component';
import {NotFoundComponent} from './components/error/not-found/not-found.component';
import {TransactionListComponent} from './components/admin/transaction-list/transaction-list.component';
import {AuthGuard} from './guards/auth.guard';
import {Role} from './model/role';
import { ListrobotComponent } from './components/admin/robot/listrobot/listrobot.component';
import { ListplanificationComponent } from './components/admin/planification/listplanification/listplanification.component';
import { ListexcutionComponent } from './components/admin/excution/listexcution/listexcution.component';
import { ListuserComponent } from './components/admin/myuser/listuser/listuser.component';
import { AddexcutiontComponent } from './components/admin/addexcutiont/addexcutiont.component';
import { ExcutiotdetailsComponent } from './components/admin/excutiotdetails/excutiotdetails.component';

const routes: Routes = [
  //Main page
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  //User pages
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile',
  component: ProfileComponent,
  canActivate: [AuthGuard]
  },
  {
    path: 'rebots'  ,  component: ListrobotComponent , canActivate:[AuthGuard]
  },

  {
    path: 'robot-excution'  ,  component:ExcutiotdetailsComponent , canActivate:[AuthGuard]
  },

  {
    path: 'add-excution'  ,  component:AddexcutiontComponent , canActivate:[AuthGuard]
  },
  ///user-action

  {
    path: 'user-action'  ,  component: ListuserComponent , canActivate:[AuthGuard]
  },
  {
    path: 'excution'  ,  component: ListexcutionComponent , canActivate:[AuthGuard]
  },

  {
    path: 'planification'  ,  component: ListplanificationComponent , canActivate:[AuthGuard]
  },






  {path: 'detail', component: DetailComponent},
  {path: 'detail/:id', component: DetailComponent},

  //admin panel
  {path: 'dashboard',
  component: DashboardComponent,
  canActivate: [AuthGuard],

  },
  {path: 'user-list',
  component: UserListComponent,
  canActivate: [AuthGuard],

  },
  {path: 'robot-list',
  component: ProductListComponent,
  canActivate: [AuthGuard],
 
 },
 {path: 'plan-list',
 component: TransactionListComponent,
 canActivate: [AuthGuard],

},

  //error pages
  {path: '404', component: NotFoundComponent},
  {path: '401', component: UnathorizedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
constructor(private router: Router) {
  this.router.errorHandler = (error: any) => {
    this.router.navigate(['/404']);
  }
}
}
