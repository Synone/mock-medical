import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { map } from 'rxjs';
import { DoctorModel } from 'src/app/shared/models/doctor.model';
import { DoctorService } from 'src/app/shared/services/doctor.service';
@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss'],
})
export class DoctorListComponent implements OnInit {
  items!: MenuItem[];
  isActive: boolean = false;
  @Input() DoctorList?: DoctorModel.DoctorInfo[] = [];

  constructor(private doctorService: DoctorService) {}

  ngOnInit() {
    const me = this;
    me.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
          me.update();
        },
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => {
          me.delete();
        },
      },
    ];
  }
  update() {}

  delete() {}
}
