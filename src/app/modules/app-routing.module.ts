import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "../components/home-page/home-page.component";


const routes: Routes = [
    {path: '', component: HomePageComponent },
    {path: 'player', loadChildren: () => import('./player/player.module').then((m) => m.PlayerModule)},
    {path: 'wage', loadChildren: () => import('./wage/wage.module').then((m) => m.WageModule)},
  ]
  
@NgModule(
    {
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    }
)
export class AppRoutingModule {

}