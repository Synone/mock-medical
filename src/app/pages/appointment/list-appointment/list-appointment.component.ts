import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/shared/components/base.component';
import { AppointmentsService } from 'src/app/shared/services/appointments.service';
import { ListItem } from './list-item';

@Component({
  selector: 'app-list-appointment',
  templateUrl: './list-appointment.component.html',
  styleUrls: ['./list-appointment.component.scss'],
})
export class ListAppointmentComponent
  extends BaseComponent
  implements OnInit, OnDestroy
{
  listItems!: ListItem[];

  onDestroy(): void {
    const me = this;
    alert('Move to new other sites!');
    console.log(me.listItems);
  }
  constructor(private appointService: AppointmentsService) {
    super();
  }

  ngOnInit() {
    const me = this;
    me.appointService
      .getListAppoint()
      .pipe(takeUntil(me.destroy$))
      .subscribe((listItem: any) => {
        me.listItems = listItem.data;
      });
  }
}
