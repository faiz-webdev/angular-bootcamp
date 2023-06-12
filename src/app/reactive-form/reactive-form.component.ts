import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidators } from '../_helper/password-cpassword-match';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  constructor() {}

  contactForm = new FormGroup(
    {
      firstname: new FormControl(
        { value: 'tothenewtechnology', disabled: false },
        [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern('^[a-zA-Z]+$'),
        ]
      ),
      email: new FormControl('', [Validators.email, Validators.required]),
      gender: new FormControl('', [Validators.required]),
      isMarried: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      address: new FormGroup({
        city: new FormControl('', [Validators.required]),
        street: new FormControl(''),
        pincode: new FormControl('', [
          Validators.required,
          Validators.maxLength(6),
          Validators.pattern('^[0-9]*$'),
        ]),
      }),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    [PasswordValidators.MatchValidator('password', 'confirmPassword')]
  );

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.contactForm.value);
  }

  get f() {
    return this.contactForm.controls;
  }

  get firstname() {
    return this.contactForm.get('firstname');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get city() {
    return this.contactForm.get('address')?.get('city');
  }

  get password() {
    return this.contactForm.get('password');
  }

  get confirmPassword() {
    return this.contactForm.get('confirmPassword');
  }

  get passwordMatchError() {
    return (
      this.contactForm.getError('mismatch') &&
      this.contactForm.get('confirmPassword')?.dirty
    );
  }
}
