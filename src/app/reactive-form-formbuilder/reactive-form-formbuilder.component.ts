import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-formbuilder',
  templateUrl: './reactive-form-formbuilder.component.html',
  styleUrls: ['./reactive-form-formbuilder.component.css'],
})
export class ReactiveFormFormbuilderComponent implements OnInit {
  contactForm: FormGroup;
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      address: this.formBuilder.group({
        city: ['', [Validators.required]],
      }),
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.contactForm.valid) return;

    console.log(this.contactForm.value);
  }

  get firstname() {
    return this.contactForm.get('firstname');
  }

  get contactFormControls() {
    return this.contactForm.controls;
  }

  get city() {
    return this.contactForm.get("address")?.get('city');
  }
}
