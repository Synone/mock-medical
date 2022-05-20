import { RouterModule, Routes } from '@angular/router';

import { AppointmentComponent } from './pages/appointment/appointment.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { NgModule } from '@angular/core';

// import { DashBoard } from './../../../fa-medical-app/src/assets/icons/svg/logo';



const routes: Routes = [
  {
    path:'', redirectTo: 'dashboard', pathMatch: 'full'
   
  },
  {
    path:'dashboard', component: DashboardComponent 
  },
  {
    path:'appointment', component: AppointmentComponent,
  },
  {
    path: 'doctors', component: DoctorComponent,
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
