import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[showErrorMsg]',
})
export class ShowErrorMsgDirective {
  @Input() showErrorMsg!: string;
  
}
