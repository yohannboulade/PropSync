import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogementsComponent } from './logements/logements.component';
import { LocatairesComponent } from './locataires/locataires.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'logements', component: LogementsComponent},
  { path: 'locataires', component: LocatairesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
