import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css'],
})
export class TemplateDrivenFormComponent implements OnInit {
  public contact: contactModel;
  constructor() {}

  ngOnInit(): void {
    this.contact = {
      name: 'To the new',
      gender: 'female',
      isMarried: true,
      email: '',
    };
  }

  onSubmit(formVal: NgForm) {
    // if (formVal.invalid) return;
    console.log(formVal.value);
  }
}

export class contactModel {
  name: string;
  gender: string;
  isMarried: boolean;
  email: string;
}
