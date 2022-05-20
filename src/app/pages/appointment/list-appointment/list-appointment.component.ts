import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { ListItem } from './list-item';

@Component({
  selector: 'app-list-appointment',
  templateUrl: './list-appointment.component.html',
  styleUrls: ['./list-appointment.component.scss'],
})
export class ListAppointmentComponent implements OnInit {
  listItems: ListItem[] = [];
  constructor(private doctorService: AppointmentsService) {}

  ngOnInit() {
    this.doctorService.getListAppoint().subscribe((listItem: any) => {
      this.listItems = listItem.data;
      console.log(listItem);
    });
  }
}
