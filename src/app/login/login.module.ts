import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';

const imports: any = [];
const declarations = [LoginComponent];

@NgModule({
  imports: [...imports],
  declarations: [...declarations],
  exports: [...imports, ...declarations],
})
export class LoginModule {}
