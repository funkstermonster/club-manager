import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WageInfoComponent } from 'src/app/modules/wage/wage-dashboard/wage-dashboard.component';

const routes: Routes = [
  {path: '', component: WageInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WageRoutingModule { }
