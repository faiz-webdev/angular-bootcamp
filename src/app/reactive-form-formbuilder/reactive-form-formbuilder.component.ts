import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      skills: this.formBuilder.array([]),
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
    return this.contactForm.get('address')?.get('city');
  }

  get skills(): FormArray {
    return this.contactForm.get('skills') as FormArray;
  }

  newSkill(): FormGroup {
    return this.formBuilder.group({
      skill: ['', Validators.required],
      exp: [''],
    });
  }

  addSkills() {
    this.skills.push(this.newSkill());
  }

  removeSkill(i:number) {
    this.skills.removeAt(i);
  }
  
}
