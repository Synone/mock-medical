import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { IconModule } from 'src/assets/icons/icon.module';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DropdownModule } from 'primeng/dropdown';
import { OnlyNumberDirective } from './directives/only-number.directive';
import { InnerMsgDirective } from './directives/inner-msg.directive';
import { BaseComponent } from '../base/base.component';
import { CommonModule } from '@angular/common';
const declarations: any[] = [
  SidebarComponent,
  HeaderComponent,
  InnerMsgDirective,
  OnlyNumberDirective,
  BaseComponent,
];

const imports = [
  CommonModule,
  FormsModule,
  SplitButtonModule,
  InputTextModule,
  IconModule,
  DropdownModule,
];

@NgModule({
  declarations: [declarations],
  imports: [imports],
  exports: [...imports, ...declarations],
  providers: [MessageService],
})
export class SharedModule {}
