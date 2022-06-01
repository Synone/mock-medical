import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { NewAppointmentComponent } from './pages/appointment/new-appointment/new-appointment.component';

const routes: Routes = [
  {
    path: 'appointment',
    loadChildren: () =>
      import('./pages/appointment/appointment.module').then(
        (md) => md.AppointmentModule
      ),
  },
  {
    path: 'doctors',
    loadChildren: () =>
      import('./pages/doctor/doctor.module').then((md) => md.DoctorModule),
  },
  {
    path: 'new-appointment',
    loadChildren: () =>
      import('./pages/appointment/new-appointment/appointment-new.module').then(
        (md) => md.NewAppointmentModule
      ),
  },

  {
    path: '',
    redirectTo: '/appointment',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
