import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerListComponent } from 'src/app/modules/player/player-list/player-list.component';

const routes: Routes = [
  {
    path: '',
    component: PlayerListComponent,
    children: [{ path: '', redirectTo: 'list', pathMatch: 'full' }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerRoutingModule {}
