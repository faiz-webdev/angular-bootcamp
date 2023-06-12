import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  contactForm = new FormGroup({
    firstname: new FormControl({value:'tothenewtechnology', disabled: false}, [
      Validators.required,
      Validators.minLength(10),
      Validators.pattern('^[a-zA-Z]+$'),
    ]),
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
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.contactForm.value);
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
}
