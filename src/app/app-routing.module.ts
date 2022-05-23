import { RouterModule, Routes } from '@angular/router';

import { AppointmentComponent } from './pages/appointment/appointment.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { NgModule } from '@angular/core';
import { NewAppointmentComponent } from './pages/appointment/new-appointment/new-appointment.component';

// import { DashBoard } from './../../../fa-medical-app/src/assets/icons/svg/logo';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'appointment',
    component: AppointmentComponent,
  },
  {
    path: 'doctors',
    component: DoctorComponent,
  },
  {
    path: 'new-appointment',
    component: NewAppointmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
