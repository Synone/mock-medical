import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './../pages/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { IconModule } from 'src/assets/icons/icon.module';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SplitButtonModule } from 'primeng/splitbutton';

const declarations: any[] = [
  SidebarComponent,
  HeaderComponent,
  DashboardComponent,
];

const imports = [
  FormsModule,
  BrowserAnimationsModule,
  SplitButtonModule,
  InputTextModule,
  IconModule,
];

@NgModule({
  declarations: [declarations],
  imports: [imports],
  exports: [...imports, ...declarations],
  providers: [MessageService],
})
export class ShareModule {}
