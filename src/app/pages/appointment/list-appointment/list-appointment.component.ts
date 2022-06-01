import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppointmentsService } from 'src/app/shared/services/appointments.service';
import { ListItem } from './list-item';

@Component({
  selector: 'app-list-appointment',
  templateUrl: './list-appointment.component.html',
  styleUrls: ['./list-appointment.component.scss'],
})
export class ListAppointmentComponent implements OnInit, OnDestroy {
  listItems: ListItem[] = [];
  subscription?: Subscription;
  constructor(private doctorService: AppointmentsService) {}

  ngOnInit() {
    this.subscription = this.doctorService
      .getListAppoint()
      .subscribe((listItem: any) => {
        this.listItems = listItem.data;
      });
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription?.unsubscribe();
  }
}
