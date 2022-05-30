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

  private focusElementInvalid() {
    const listElement = document.querySelectorAll('input.ng-invalid');
    console.log(listElement.item);
    for (let i = 0; i < listElement.length; i++) {
      (listElement.item(i) as HTMLElement)?.focus();
      return;
    }
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
  // Initialize form
  private buildForm(): void {
    const me = this;
    me.userForm = me.fb.group({
      [me.fieldKeyNames.username]: [
        '',
        [Validators.required, Validators.minLength(me.minlength)],
      ],
      [me.fieldKeyNames.userphone]: [
        '',
        [
          Validators.required,
          Validators.minLength(me.minlength),
          Validators.pattern('[- +()0-9]+'),
        ],
      ],
      [me.fieldKeyNames.appointmentTime]: ['', [Validators.required]],
      [me.fieldKeyNames.appointmentDate]: ['', [Validators.required]],
    });
  }
  // Submit form function
  onSubmitFormGroup() {
    const me = this;
    const isValid = me.userForm.valid;
    me.userForm.markAllAsTouched();
    me.userForm.markAsDirty();
    me.userForm.updateValueAndValidity();
    Object.keys(me.userForm.controls).map((controlName) => {
      const control = me.userForm.get(controlName);
      control?.markAsDirty();
      control?.markAllAsTouched();
      control?.updateValueAndValidity();
    });
    console.log(isValid);
    if (!isValid) {
      me.focusElementInvalid();
      return;
    }
    const valueOfForm = me.userForm.getRawValue();
    console.log(valueOfForm);
    me._location.back();
  }

  onBasicUpload(event: any) {}
}
