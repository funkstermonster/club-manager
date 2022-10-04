import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { StatisticBoxComponent } from './components/statistic-box/statistic-box.component';
import { LeftMenuAreaComponent } from './components/left-menu-area/left-menu-area.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { WageInfoComponent } from './components/wage-info/wage-info.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    StatisticBoxComponent,
    LeftMenuAreaComponent,
    WageInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
