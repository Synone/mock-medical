import { NgModule } from '@angular/core';
import { ListAppointmentComponent } from './list-appointment/list-appointment.component';
import { AppointmentComponent } from './appointment.component';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentsService } from 'src/app/shared/services/appointments.service';
import { CalendarModule } from 'primeng/calendar';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { AppointmentRoutes } from './appointment.routing';
import { PaginatorModule } from 'primeng/paginator';
const declarations = [ListAppointmentComponent, AppointmentComponent];

const imports: any = [
  CommonModule,
  MenuModule,
  ButtonModule,
  TableModule,
  HttpClientModule,
  CalendarModule,
  PaginatorModule,
  AppointmentRoutes,
];

@NgModule({
  imports: [...imports],
  declarations: [...declarations],
  bootstrap: [AppointmentComponent],
  exports: [...declarations, ...imports],
  providers: [AppointmentsService],
})
export class AppointmentModule {}
