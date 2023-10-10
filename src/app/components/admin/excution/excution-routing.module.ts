import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListexcutionComponent } from './listexcution/listexcution.component';

const routes: Routes = [{
   path:'' , component:ListexcutionComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExcutionRoutingModule { }
