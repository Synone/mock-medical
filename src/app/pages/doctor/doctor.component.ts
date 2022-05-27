import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
})
export class DoctorComponent implements OnInit {
  constructor() {}
  items!: MenuItem[];
  isActive: boolean = true;
  addDoctor(): void {}
  ngOnInit() {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
          this.update();
        },
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => {
          this.delete();
        },
      },
    ];
  }
  update() {}

  delete() {}
}
