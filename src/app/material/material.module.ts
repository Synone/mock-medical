import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';

const MaterialComponents = [ButtonModule, MenuModule];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
