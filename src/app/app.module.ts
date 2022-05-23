import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppointmentModule } from './pages/appointment/appointment.module';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { ShareModule } from './shared/share.module';
import { DoctorModule } from './pages/doctor/doctor.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    AppointmentModule,
    ShareModule,
    DoctorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
