import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-base',
  template: '',
  styles: [],
})
export class BaseComponent implements OnDestroy {
  destroy$ = new Subject<void>();
  constructor() {}
  ngOnDestroy(): void {
    const me = this;
    me.destroy$.next();
    me.destroy$.complete();
  }
}
