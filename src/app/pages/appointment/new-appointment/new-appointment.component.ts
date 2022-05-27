import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/base/base.component';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.scss'],
})
export class NewAppointmentComponent extends BaseComponent implements OnInit {
  uploadedFiles: any[] = [];

  constructor(private fb: FormBuilder, private _location: Location) {
    super();
  }
  userForm!: FormGroup;

  public fieldKeyNames = {
    username: 'username',
    userphone: 'userphone',
    gender: 'gender',
    appointmentTime: 'appointmentTime',
    appointmentDate: 'appointmentDate',
  };
  private minlength: number = 4;
  public errorMessages: any = {
    required: 'You must enter this field!',
    minlength: `Must be at least ${this.minlength} characters`,
    pattern: 'Must be numbers!',
  };
  private buildForm(): void {
    const me = this;
    me.userForm = me.fb.group({
      username: ['', [Validators.required, Validators.minLength(me.minlength)]],
      userphone: [
        '',
        [
          Validators.required,
          Validators.minLength(me.minlength),
          Validators.pattern('[- +()0-9]+'),
        ],
      ],
      appointmentTime: ['', [Validators.required]],
      appointmentDate: ['', [Validators.required]],
    });
  }
  public isValidControl(controlName: string): boolean {
    const me = this;
    const control = me.userForm.get(controlName);
    // = userForm.controls[controlName]
    if (!control) {
      return false;
    }
    return control.invalid && (control.touched || control.dirty);
  }
  public getErrorMessage(controlName: string): string[] {
    const me = this;
    let errorObj = me.userForm.get(controlName)?.errors;
    if (!errorObj) {
      return [];
    }
    let errorKeys = Object.keys(errorObj || {});
    if (errorKeys.length === 0) {
      return [];
    }
    const messagesList = errorKeys.reduce(
      (allMessages: string[], currentKey: string) => {
        const msg = me.errorMessages[currentKey];
        allMessages.push(msg);
        return allMessages;
      },
      []
    );

    return messagesList;
  }
  ngOnInit() {
    const me = this;
    me.buildForm();
  }

  // get userName() {
  //   return this.userForm.get('userName');
  // }

  // get userPhone() {
  //   return this.userForm.get('userPhone');
  // }

  // get userTime() {
  //   return this.userForm.get('userTime');
  // }

  // get userDate() {
  //   return this.userForm.get('userDate');
  // }

  sendData(valueForm: any) {
    console.log(valueForm);
    this._location.back();
  }
  onBasicUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
    console.log(this.uploadedFiles);
  }
}
