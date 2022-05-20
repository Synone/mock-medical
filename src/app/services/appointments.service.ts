import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListItem } from '../pages/appointment/list-appointment/list-item';

@Injectable()
export class AppointmentsService {
  constructor(private http: HttpClient) {}
  getListAppoint() {
    return this.http.get<ListItem[]>('../../assets/datas/patients.json');
  }
}
