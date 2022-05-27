import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppointmentModule } from './pages/appointment/appointment.module';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { DoctorModule } from './pages/doctor/doctor.module';
import { LayoutComponent } from './shared/components/layout/layout.component';
@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    AppointmentModule,
    SharedModule,
    DoctorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
