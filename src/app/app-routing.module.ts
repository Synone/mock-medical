import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((md) => md.LoginModule),
  },

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
  // {
  //   path: 'new-appointment',
  //   loadChildren: () =>
  //     import('./pages/appointment/new-appointment/appointment-new.module').then(
  //       (md) => md.NewAppointmentModule
  //     ),
  // },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then((md) => {
        return md.DashBoardModule;
      }),
  },

  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
