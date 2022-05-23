import { NgModule } from '@angular/core';
import { DoctorComponent } from './doctor.component';
import { CardModule } from 'primeng/card';
import { MaterialModule } from 'src/app/material/material.module';
@NgModule({
  imports: [CardModule, MaterialModule],
  declarations: [DoctorComponent],
  exports: [DoctorComponent],
  bootstrap: [DoctorComponent],
})
export class DoctorModule {}
