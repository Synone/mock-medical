import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.scss']
})
export class NewAppointmentComponent implements OnInit {

  name!: string;
  phone_number!: string;
  date!: string;
  time!: string;
  gender!: string;



  userForm!: FormGroup;

  constructor(private fb: FormBuilder, private _location: Location) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(4)]],
      userPhone: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[- +()0-9]+')]],
      userTime: ['', [Validators.required]],
      userDate: ['', [Validators.required]]
    })
  }

  get userName() {
    return this.userForm.get('userName');
  }

  get userPhone() {
    return this.userForm.get('userPhone');
  }

  get userTime() {
    return this.userForm.get('userTime');
  }

  get userDate() {
    return this.userForm.get('userDate');
  }


  sendData(valueForm:any) {
    console.log(valueForm);
    this._location.back();
  }

}

