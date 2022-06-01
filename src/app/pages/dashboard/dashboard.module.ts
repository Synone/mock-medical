import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';

const imports: any = [CommonModule, DashboardRoutes];
const declarations = [DashboardComponent];

@NgModule({
  imports: [imports],
  declarations: [declarations],
  exports: [...imports, ...declarations],
  providers: [],
})
export class DashBoardModule {}
