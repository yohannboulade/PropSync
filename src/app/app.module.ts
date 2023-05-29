import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogementsComponent } from './logements/logements.component';
import { LocatairesComponent } from './locataires/locataires.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LogementsComponent,
    LocatairesComponent,
    SidebarComponent,
    TopbarComponent,
    MaincontentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
