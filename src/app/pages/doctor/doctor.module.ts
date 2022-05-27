import { NgModule } from '@angular/core';
import { DoctorComponent } from './doctor.component';
import { CardModule } from 'primeng/card';
import { MaterialModule } from 'src/app/material/material.module';
import { IconModule } from 'src/assets/icons/icon.module';
import { MenuModule } from 'primeng/menu';

@NgModule({
  imports: [CardModule, MaterialModule, IconModule, MenuModule],
  declarations: [DoctorComponent],
  exports: [DoctorComponent],
  bootstrap: [DoctorComponent],
})
export class DoctorModule {}
