import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListItem } from '../../pages/appointment/list-appointment/list-item';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class AppointmentsService {
  appointmentsList = new Subject<ListItem[] | any>();

  constructor(private http: HttpClient) {}

  initList: any;
  apptList: Observable<any> = this.http.get(
    '../../../assets/data/patients.json'
  );
  getListAppoint() {
    const me = this;

    return me.http.get<ListItem[]>('../../../assets/data/patients.json');
  }

  createAppointment(appoint: any) {
    const me = this;
  }
}
