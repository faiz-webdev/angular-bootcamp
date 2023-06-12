# TemplateDrivenForm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## final template
-- <div class="container">
    <div class="row align-items-start">
        <div class="col-md-6">
            <h1 class="my-2">Template driven form</h1>
            <form class="my-3 form" #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm)">
            <p>
                <label for="name">Name: </label>
                <input type="text" id="name" name="name" ngModel class="mx-2" required #name="ngModel" [minlength]="4" />
                <span class="error" *ngIf="name.touched && name.errors?.['required']">Name is required!</span>
                <span class="error" *ngIf="name.touched && name.errors?.['minlength']">Name minimum length is {{name.errors?.['minlength']?.requiredLength}}</span>
            </p>
            <p>
                <label for="email">Email: </label>
                <input type="text" id="email" name="email" ngModel class="mx-2" required #email="ngModel"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"  />
                    <span *ngIf="!email?.valid && (email?.touched || email?.dirty)" class="error">
                        <span  *ngIf="email.errors?.['required']">Email is required!</span>
                        <span  *ngIf="email.errors?.['pattern']">Email is required!</span>
                    </span>
                    <!-- <span *ngIf="(contactForm.submitted && email.errors)|| (email?.touched || email?.dirty)" class="error">
                        <span  *ngIf="email.errors?.['required']">Email is required!</span>
                        <span  *ngIf="email.errors?.['pattern']">Email is required!</span>
                    </span> -->
            </p>
            <p>
                <label for="gender">Geneder: </label>
                <input type="radio" value="male" id="gender" name="gender" ngModel class="mx-2" required #gender="ngModel" />
                Male
                <input type="radio" value="female" id="gender" name="gender" ngModel required #gender="ngModel" />
                Female
                <span *ngIf="!gender?.valid && (gender?.dirty || gender?.touched)" class="error">
                    <span *ngIf="gender.errors?.['required']">
                    Gender is required
                    </span>
                </span>
            </p>
            <p>
                <label for="isMarried">Married: </label>
                <input type="checkbox" id="isMarried" name="isMarried" ngModel class="mx-2" #isMarried="ngModel" />
                <span>
                    <span class="error" *ngIf="isMarried.touched && isMarried.errors?.['required']">Married is required!</span>
                </span>
            </p>
            <p>
                <button class="btn btn-primary" type="submit" [disabled]="!contactForm.valid">Submit</button>
            </p>
            </form>
        </div>
    </div>
</div>

## On button click form validation
-- <div class="container">
    <div class="row align-items-start">
        <div class="col-md-6">
            <h1 class="my-2">Template driven form</h1>
            <form class="my-3 form" #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm)">
            <p>
                <label for="name">Name: </label>
                <input type="text" id="name" name="name" ngModel class="mx-2" required #name="ngModel" [minlength]="4" />
                <span class="error" *ngIf="name.touched && name.errors?.['required']">Name is required!</span>
                <span class="error" *ngIf="name.touched && name.errors?.['minlength']">Name minimum length is {{name.errors?.['minlength']?.requiredLength}}</span>
            </p>
            <p>
                <label for="email">Email: </label>
                <input type="text" id="email" name="email" ngModel class="mx-2" required #email="ngModel"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"  />
                    <span *ngIf="(contactForm.submitted && email.errors)|| (email?.touched || email?.dirty)" class="error">
                        <span  *ngIf="email.errors?.['required']">Email is required!</span>
                        <span  *ngIf="email.errors?.['pattern']">Email is required!</span>
                    </span>
            </p>
            <p>
                <label for="gender">Geneder: </label>
                <input type="radio" value="male" id="gender" name="gender" ngModel class="mx-2" required #gender="ngModel" />
                Male
                <input type="radio" value="female" id="gender" name="gender" ngModel required #gender="ngModel" />
                Female
                <span *ngIf="!gender?.valid && (gender?.dirty || gender?.touched)" class="error">
                    <span *ngIf="gender.errors?.['required']">
                    Gender is required
                    </span>
                </span>
            </p>
            <p>
                <label for="isMarried">Married: </label>
                <input type="checkbox" id="isMarried" name="isMarried" ngModel class="mx-2" #isMarried="ngModel" />
                <span>
                    <span class="error" *ngIf="isMarried.touched && isMarried.errors?.['required']">Married is required!</span>
                </span>
            </p>
            <p>
                <button class="btn btn-primary" type="submit" [disabled]="!contactForm.valid">Submit</button>
            </p>
            </form>
        </div>
    </div>
</div>

## Reset form
    <div class="container">
 <div class="row align-items-start">
   <div class="col-md-6">
     <h1 class="my-2">Template driven form</h1>
     <form class="my-3 form" #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm); contactForm.reset()">
       <p>
         <label for="name">Name: </label>
         <input type="text" id="name" name="name" ngModel class="mx-2" required #name="ngModel" [minlength]="4" />
         <span class="error" *ngIf="name.touched && name.errors?.['required']">Name is required!</span>
         <span class="error" *ngIf="name.touched && name.errors?.['minlength']">Name minimum length is {{name.errors?.['minlength']?.requiredLength}}</span>
       </p>
       <p>
         <label for="email">Email: </label>
         <input type="text" id="email" name="email" ngModel class="mx-2" required #email="ngModel"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"  />
            <span *ngIf="!email?.valid && (email?.touched || email?.dirty)" class="error">
                <span  *ngIf="email.errors?.['required']">Email is required!</span>
                <span  *ngIf="email.errors?.['pattern']">Email is required!</span>
            </span>
            <!-- <span *ngIf="(contactForm.submitted && email.errors)|| (email?.touched || email?.dirty)" class="error">
                <span  *ngIf="email.errors?.['required']">Email is required!</span>
                <span  *ngIf="email.errors?.['pattern']">Email is required!</span>
            </span> -->
       </p>
       <p>
         <label for="gender">Geneder: </label>
         <input type="radio" value="male" id="gender" name="gender" ngModel class="mx-2" required #gender="ngModel" />
         Male
         <input type="radio" value="female" id="gender" name="gender" ngModel required #gender="ngModel" />
         Female
         <span *ngIf="!gender?.valid && (gender?.dirty || gender?.touched)" class="error">
            <span *ngIf="gender.errors?.['required']">
              Gender is required
            </span>
          </span>
       </p>
       <p>
         <label for="isMarried">Married: </label>
         <input type="checkbox" id="isMarried" name="isMarried" ngModel class="mx-2" #isMarried="ngModel" />
         <span>
            <span class="error" *ngIf="isMarried.touched && isMarried.errors?.['required']">Married is required!</span>
         </span>
       </p>
       <p>
         <button class="btn btn-primary" type="submit" [disabled]="!contactForm.valid">Submit</button>
       </p>
     </form>
   </div>
 </div>
</div>

## prefill form
-- <div class="container">
 <div class="row align-items-start">
   <div class="col-md-6">
     <h1 class="my-2">Template driven form</h1>
     <form class="my-3 form" #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm); contactForm.reset()">
       <p>
         <label for="name">Name: </label>
         <input type="text" id="name" name="name" ngModel class="mx-2" required #name="ngModel" [minlength]="4" [(ngModel)]="contact.name" />
         <span class="error" *ngIf="name.touched && name.errors?.['required']">Name is required!</span>
         <span class="error" *ngIf="name.touched && name.errors?.['minlength']">Name minimum length is {{name.errors?.['minlength']?.requiredLength}}</span>
       </p>
       <p>
         <label for="email">Email: </label>
         <input type="text" id="email" name="email" ngModel class="mx-2" required #email="ngModel"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" [(ngModel)]="contact.email" />
            <span *ngIf="!email?.valid && (email?.touched || email?.dirty)" class="error">
                <span  *ngIf="email.errors?.['required']">Email is required!</span>
                <span  *ngIf="email.errors?.['pattern']">Email is required!</span>
            </span>
            <!-- <span *ngIf="(contactForm.submitted && email.errors)|| (email?.touched || email?.dirty)" class="error">
                <span  *ngIf="email.errors?.['required']">Email is required!</span>
                <span  *ngIf="email.errors?.['pattern']">Email is required!</span>
            </span> -->
       </p>
       <p>
         <label for="gender">Geneder: </label>
         <input type="radio" value="male" id="gender" name="gender" ngModel class="mx-2" required #gender="ngModel" checked [(ngModel)]="contact.gender" />
         Male
         <input type="radio" value="female" id="gender" name="gender" ngModel required #gender="ngModel" checked [(ngModel)]="contact.gender" />
         Female
         <span *ngIf="!gender?.valid && (gender?.dirty || gender?.touched)" class="error">
            <span *ngIf="gender.errors?.['required']">
              Gender is required
            </span>
          </span>
       </p>
       <p>
         <label for="isMarried">Married: </label>
         <input type="checkbox" id="isMarried" name="isMarried" ngModel class="mx-2" #isMarried="ngModel"[(ngModel)]="contact.isMarried" />
         <span>
            <span class="error" *ngIf="isMarried.touched && isMarried.errors?.['required']">Married is required!</span>
         </span>
       </p>
       <p>
         <button class="btn btn-primary" type="submit" [disabled]="!contactForm.valid">Submit</button>
       </p>
     </form>
   </div>
 </div>
</div>

## custom validation
-- <div class="container">
 <div class="row align-items-start">
   <div class="col-md-6">
     <h1 class="my-2">Template driven form</h1>
     <form class="my-3 form" #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm); contactForm.reset()">
       <p>
         <label for="name">Name: </label>
         <input type="text" id="name" name="name" ngModel class="mx-2" required #name="ngModel" [minlength]="4" />
         <span class="error" *ngIf="name.touched && name.errors?.['required']">Name is required!</span>
         <span class="error" *ngIf="name.touched && name.errors?.['minlength']">Name minimum length is {{name.errors?.['minlength']?.requiredLength}}</span>
       </p>
       <p>
         <label for="email">Email: </label>
         <input type="text" id="email" name="email" ngModel class="mx-2" required #email="ngModel"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" appEmailValidator  />
            <span *ngIf="!email?.valid && (email?.touched || email?.dirty)" class="error">
                <span  *ngIf="email.errors?.['required']">Email is required!</span>
                <span  *ngIf="email.errors?.['pattern']">Please enter valid email!</span>
                <!-- <span  *ngIf="email.hasError('emailvalidator')">Please provide a valid email address!</span> -->
            </span>
            <!--click on submit button validation---->
            <!-- <span *ngIf="(contactForm.submitted && email.errors)|| (email?.touched || email?.dirty)" class="error">
                <span  *ngIf="email.errors?.['required']">Email is required!</span>
                <span  *ngIf="email.errors?.['pattern']">Email is required!</span>
            </span> -->
       </p>
       <p>
         <label for="gender">Geneder: </label>
         <input type="radio" value="male" id="gender" name="gender" ngModel class="mx-2" required #gender="ngModel" checked [(ngModel)]="contact.gender" />
         Male
         <input type="radio" value="female" id="gender" name="gender" ngModel required #gender="ngModel" checked [(ngModel)]="contact.gender" />
         Female
         <span *ngIf="!gender?.valid && (gender?.dirty || gender?.touched)" class="error">
            <span *ngIf="gender.errors?.['required']">
              Gender is required
            </span>
          </span>
       </p>
       <p>
         <label for="isMarried">Married: </label>
         <input type="checkbox" id="isMarried" name="isMarried" ngModel class="mx-2" #isMarried="ngModel"[(ngModel)]="contact.isMarried" />
         <span>
            <span class="error" *ngIf="isMarried.touched && isMarried.errors?.['required']">Married is required!</span>
         </span>
       </p>
       <p>
        <label for="name">Password: </label>
        <input type="password" id="password" name="password" ngModel class="mx-2" required #password="ngModel" [minlength]="4" />
        <span class="error" *ngIf="password.touched && password.errors?.['required']">Password is required!</span>
        <span class="error" *ngIf="password.touched && password.errors?.['minlength']">Password minimum length is {{password.errors?.['minlength']?.requiredLength}}</span>
      </p>
      <p>
        <label for="name">Confirm password: </label>
        <input type="password" id="cpassword" name="cpassword" ngModel class="mx-2" required #cpassword="ngModel" appPasswordvalidator="password" />
        <span class="error" *ngIf="cpassword.touched && cpassword.errors?.['required']">Confirm password is required!</span>
        <span *ngIf="cpassword.hasError('passwordMatchError')">
            Confirm Password & Password must be same.
          </span>
      </p>
       <p>
         <button class="btn btn-primary" type="submit" [disabled]="!contactForm.valid">Submit</button>
       </p>
     </form>
   </div>
 </div>
</div>

# Reactive Form
  ## form with controler
  --<div class="container">
  <div class="row align-items-start">
    <div class="col-md-6">
      <h1 class="my-2">Reactive form</h1>
      <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
        <p>
          <label for="firstname">First Name </label>
          <input type="text" id="firstname" name="firstname" formControlName="firstname" />
        </p>
        <p>
          <label for="email">Email </label>
          <input type="text" id="email" name="email" formControlName="email" />
        </p>
        <p>
          <label for="gender">Geneder </label>
          <input type="radio" value="male" id="gender" name="gender" formControlName="gender" /> Male
          <input type="radio" value="female" id="gender" name="gender" formControlName="gender" /> Female
        </p>
        <p>
          <label for="isMarried">Married </label>
          <input type="checkbox" id="isMarried" name="isMarried"  formControlName="isMarried" />
        </p>
        <p>
          <label for="country">country </label>
          <select id="country" name="country" formControlName="country">
            <option [value]="1">India</option>
            <option [value]="2">USA</option>
            <option [value]="3">England</option>
            <option [value]="4">Singapore</option>
          </select>
        </p>
        <p>
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  </div>
</div>

 ## Reactive form with validation html
  --<div class="container">
  <div class="row align-items-start">
    <div class="col-md-6">
      <h1 class="my-2">Reactive form</h1>
      <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
        <p>
          <label for="firstname">First Name </label>
          <input type="text" id="firstname" formControlName="firstname" />
          <span class="text-danger"
            *ngIf="!contactForm.controls.firstname?.valid && (contactForm.controls.firstname?.dirty
            ||contactForm.controls.firstname?.touched)">
            <span *ngIf="contactForm.controls.firstname.errors?.['required']">
              First Name is required!
            </span>
            <span *ngIf="contactForm.controls.firstname.errors?.['minlength']">
              First Name must be 10 characters!
            </span>
            <span *ngIf="contactForm.controls.firstname.errors?.['pattern']">
              Special characters is not allowed
            </span>
          </span>
        </p>
        <p>
          <label for="email">Email </label>
          <input type="text" id="email" formControlName="email" />
          <span class="text-danger"
            *ngIf="!contactForm.controls.email?.valid && (contactForm.controls.email?.dirty
            ||contactForm.controls.email?.touched)">
            <span *ngIf="contactForm.controls.email.errors?.['required']">
              Email is required!
            </span>
            <span *ngIf="contactForm.controls.email.errors?.['email']">
              Email must be valid email!
            </span>
          </span>
        </p>
        <p><label for="gender">Geneder </label>
          Male <input type="radio" value="male" id="gender" formControlName="gender" />
          Female <input type="radio" value="female" id="gender" formControlName="gender" />
          <span class="text-danger"
            *ngIf="!contactForm.controls.gender?.valid && (contactForm.controls.gender?.dirty
            ||contactForm.controls.gender?.touched)">
            <span *ngIf="contactForm.controls.gender.errors?.['required']">
              Gender is required!
            </span>
          </span>
        </p>
        <p><label for="isMarried">Married </label>
          <input type="checkbox" id="isMarried" formControlName="isMarried" />
        </p>
        <p>
          <label for="country">country </label>
          <select id="country" formControlName="country">
            <option [value]="1">India</option>
            <option [value]="2">USA</option>
          </select>
          <span class="text-danger"
            *ngIf="!contactForm.controls.country?.valid && (contactForm.controls.country?.dirty
            ||contactForm.controls.country?.touched)">
            <span *ngIf="contactForm.controls.country.errors?.['required']">
              Country is required!
            </span>
          </span>
        </p>
        <h5>Address</h5>
        <div formGroupName="address">
          <div class="form-group"><label for="city">City</label>
            <input type="text" class="form-control" name="city" formControlName="city" />
            <span class="text-danger"
              *ngIf="!contactForm.controls.address.controls.city.valid && (contactForm.controls.address.controls.city?.dirty
              ||contactForm.controls.address.controls.city?.touched)">
              <span *ngIf="contactForm.controls.address.controls.city.errors?.['required']">
                City is required!
              </span>
            </span>
          </div>
          <div class="form-group"><label for="street">Street</label>
            <input type="text" class="form-control" name="street" formControlName="street" />
          </div>
          <div class="form-group"><label for="pincode">Pin Code</label>
            <input type="text" class="form-control" name="pincode" formControlName="pincode"/>
              <span class="text-danger"
                *ngIf="!contactForm.controls.address.controls.pincode.valid && (contactForm.controls.address.controls.pincode?.dirty
                ||contactForm.controls.address.controls.pincode?.touched)">
                <span *ngIf="contactForm.controls.address.controls.pincode.errors?.['maxlength']">
                  Pincode can be max 6 characters long!
                </span>
                <span *ngIf="contactForm.controls.address.controls.pincode.errors?.['pattern']">
                  Only number allowed!
                </span>
              </span>
          </div>
        </div>
        <p><button [disabled]="!contactForm.valid" type="submit" class="my-2">Submit</button></p>
      </form>
    </div>
  </div>
</div>

  ## .ts
    --import { Component, OnInit } from '@angular/core';
    import { FormGroup, FormControl, Validators } from '@angular/forms';

    @Component({
      selector: 'app-reactive-form',
      templateUrl: './reactive-form.component.html',
      styleUrls: ['./reactive-form.component.css'],
    })
    export class ReactiveFormComponent implements OnInit {
      contactForm = new FormGroup({
        firstname: new FormControl({value:'tothenewtechnology', disabled: true}, [
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
    }

## Reactive Form validation with get method html
  --<div class="container">
  <div class="row align-items-start">
    <div class="col-md-6">
      <h1 class="my-2">Reactive form</h1>
      <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
        <p>
          <label for="firstname">First Name </label>
          <input type="text" id="firstname" formControlName="firstname" />
          <span class="text-danger"
            *ngIf="!firstname?.valid && (firstname?.dirty
            ||firstname?.touched)">
            <span *ngIf="firstname?.errors?.['required']">
              First Name is required!
            </span>
            <span *ngIf="firstname?.errors?.['minlength']">
              First Name must be 10 characters!
            </span>
            <span *ngIf="contactForm.controls.firstname.errors?.['pattern']">
              Special characters is not allowed
            </span>
          </span>
        </p>
        <p>
          <label for="email">Email </label>
          <input type="text" id="email" formControlName="email" />
          <span class="text-danger"
            *ngIf="!email?.valid && (email?.dirty
            ||email?.touched)">
            <span *ngIf="email?.errors?.['required']">
              Email is required!
            </span>
            <span *ngIf="email?.errors?.['email']">
              Email must be valid email!
            </span>
          </span>
        </p>
        <p><label for="gender">Geneder </label>
          Male <input type="radio" value="male" id="gender" formControlName="gender" />
          Female <input type="radio" value="female" id="gender" formControlName="gender" />
          <span class="text-danger"
            *ngIf="!contactForm.controls.gender?.valid && (contactForm.controls.gender?.dirty
            ||contactForm.controls.gender?.touched)">
            <span *ngIf="contactForm.controls.gender.errors?.['required']">
              Gender is required!
            </span>
          </span>
        </p>
        <p><label for="isMarried">Married </label>
          <input type="checkbox" id="isMarried" formControlName="isMarried" />
        </p>
        <p>
          <label for="country">country </label>
          <select id="country" formControlName="country">
            <option [value]="1">India</option>
            <option [value]="2">USA</option>
          </select>
          <span class="text-danger"
            *ngIf="!contactForm.controls.country?.valid && (contactForm.controls.country?.dirty
            ||contactForm.controls.country?.touched)">
            <span *ngIf="contactForm.controls.country.errors?.['required']">
              Country is required!
            </span>
          </span>
        </p>
        <h5>Address</h5>
        <div formGroupName="address">
          <div class="form-group"><label for="city">City</label>
            <input type="text" class="form-control" name="city" formControlName="city" />
            <span class="text-danger"
              *ngIf="!city?.valid && (city?.dirty
              ||city?.touched)">
              <span *ngIf="city?.errors?.['required']">
                City is required!
              </span>
            </span>
          </div>
          <div class="form-group"><label for="street">Street</label>
            <input type="text" class="form-control" name="street" formControlName="street" />
          </div>
          <div class="form-group"><label for="pincode">Pin Code</label>
            <input type="text" class="form-control" name="pincode" formControlName="pincode"/>
              <span class="text-danger"
                *ngIf="!contactForm.controls.address.controls.pincode.valid && (contactForm.controls.address.controls.pincode?.dirty
                ||contactForm.controls.address.controls.pincode?.touched)">
                <span *ngIf="contactForm.controls.address.controls.pincode.errors?.['maxlength']">
                  Pincode can be max 6 characters long!
                </span>
                <span *ngIf="contactForm.controls.address.controls.pincode.errors?.['pattern']">
                  Only number allowed!
                </span>
              </span>
          </div>
        </div>
        <p><button [disabled]="!contactForm.valid" type="submit" class="my-2">Submit</button></p>
      </form>
    </div>
  </div>
</div>

## Reactive Form validation with get method ts
  --import { Component, OnInit } from '@angular/core';
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

## Reactive Form with prefil and custom validation html
  --<div class="container">
    <div class="row align-items-start">
      <div class="col-md-6">
        <h1 class="my-2">Reactive form</h1>
        <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
          <p>
            <label for="firstname">First Name </label>
            <input type="text" id="firstname" formControlName="firstname" />
            <span class="text-danger"
              *ngIf="!firstname?.valid && (firstname?.dirty
              ||firstname?.touched)">
              <span *ngIf="firstname?.errors?.['required']">
                First Name is required!
              </span>
              <span *ngIf="firstname?.errors?.['minlength']">
                First Name must be 10 characters!
              </span>
              <span *ngIf="contactForm.controls.firstname.errors?.['pattern']">
                Special characters is not allowed
              </span>
            </span>
          </p>
          <p>
            <label for="email">Email </label>
            <input type="text" id="email" formControlName="email" />
            <span class="text-danger"
              *ngIf="!email?.valid && (email?.dirty
              ||email?.touched)">
              <span *ngIf="email?.errors?.['required']">
                Email is required!
              </span>
              <span *ngIf="email?.errors?.['email']">
                Email must be valid email!
              </span>
            </span>
          </p>
          <p><label for="gender">Geneder </label>
            Male <input type="radio" value="male" id="gender" formControlName="gender" />
            Female <input type="radio" value="female" id="gender" formControlName="gender" />
            <span class="text-danger"
              *ngIf="!contactForm.controls.gender?.valid && (contactForm.controls.gender?.dirty
              ||contactForm.controls.gender?.touched)">
              <span *ngIf="contactForm.controls.gender.errors?.['required']">
                Gender is required!
              </span>
            </span>
          </p>
          <p><label for="isMarried">Married </label>
            <input type="checkbox" id="isMarried" formControlName="isMarried" />
          </p>
          <p>
            <label for="country">country </label>
            <select id="country" formControlName="country">
              <option [value]="1">India</option>
              <option [value]="2">USA</option>
            </select>
            <span class="text-danger"
              *ngIf="!contactForm.controls.country?.valid && (contactForm.controls.country?.dirty
              ||contactForm.controls.country?.touched)">
              <span *ngIf="contactForm.controls.country.errors?.['required']">
                Country is required!
              </span>
            </span>
          </p>
          <p>
            <label for="firstname">Password </label>
            <input type="text" id="password" formControlName="password" />
            <span class="text-danger"
              *ngIf="!password?.valid && (password?.dirty
              ||password?.touched)">
              <span *ngIf="password?.errors?.['required']">
                Password is required!
              </span>
            </span>
          </p>
          <p>
            <label for="firstname">Confirm Password </label>
            <input type="text" id="password" formControlName="confirmPassword" />
            <span class="text-danger"
              *ngIf="!confirmPassword?.valid && (confirmPassword?.dirty
              ||confirmPassword?.touched)">
              <span *ngIf="confirmPassword?.errors?.['required']">
                Confirm password is required!
              </span>
            </span>
            <span *ngIf="passwordMatchError" class="text-danger">
              Password does not match
            </span>
          </p>
          <h5>Address</h5>
          <div formGroupName="address">
            <div class="form-group"><label for="city">City</label>
              <input type="text" class="form-control" name="city" formControlName="city" />
              <span class="text-danger"
                *ngIf="!city?.valid && (city?.dirty
                ||city?.touched)">
                <span *ngIf="city?.errors?.['required']">
                  City is required!
                </span>
              </span>
            </div>
            <div class="form-group"><label for="street">Street</label>
              <input type="text" class="form-control" name="street" formControlName="street" />
            </div>
            <div class="form-group"><label for="pincode">Pin Code</label>
              <input type="text" class="form-control" name="pincode" formControlName="pincode"/>
                <span class="text-danger"
                  *ngIf="!contactForm.controls.address.controls.pincode.valid && (contactForm.controls.address.controls.pincode?.dirty
                  ||contactForm.controls.address.controls.pincode?.touched)">
                  <span *ngIf="contactForm.controls.address.controls.pincode.errors?.['maxlength']">
                    Pincode can be max 6 characters long!
                  </span>
                  <span *ngIf="contactForm.controls.address.controls.pincode.errors?.['pattern']">
                    Only number allowed!
                  </span>
                </span>
            </div>
          </div>
          <p><button [disabled]="!contactForm.valid" type="submit" class="my-2">Submit</button></p>
        </form>
      </div>
    </div>
</div>

## Reactive Form with prefil and custom validation ts
  --import { Component, OnInit } from '@angular/core';
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

## Reactive Form with async validator and validate on button click also added file upload html
  --<div class="container">
    <div class="row align-items-start">
      <div class="col-md-6">
        <h1 class="my-2">Reactive form</h1>
        <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
          <p>
            <label for="firstname">First Name </label>
            <input type="text" id="firstname" formControlName="firstname" />
            <span class="text-danger"
              *ngIf="submitted && firstname?.errors">
              <span *ngIf="firstname?.errors?.['required']">
                First Name is required!
              </span>
              <span *ngIf="firstname?.errors?.['minlength']">
                First Name must be 10 characters!
              </span>
              <span *ngIf="contactForm.controls.firstname.errors?.['pattern']">
                Special characters is not allowed!
              </span>
            </span>
          </p>
          <p>
            <label for="email">Email </label>
            <input type="text" id="email" formControlName="email" />
            <span class="text-danger"
              *ngIf="submitted && email?.errors">
              <span *ngIf="email?.errors?.['required']">
                Email is required!
              </span>
              <span *ngIf="email?.errors?.['email']">
                Email must be valid email!
              </span>
              <span *ngIf="email?.errors?.['usernameAlreadyExists']">
                Email is already exists!
              </span>
            </span>
          </p>
          <p><label for="gender">Geneder </label>
            Male <input type="radio" value="male" id="gender" formControlName="gender" />
            Female <input type="radio" value="female" id="gender" formControlName="gender" />
            <span class="text-danger"
              *ngIf="submitted && contactForm.controls.gender.errors">
              <span *ngIf="contactForm.controls.gender.errors?.['required']">
                Gender is required!
              </span>
            </span>
          </p>
          <p><label for="isMarried">Married </label>
            <input type="checkbox" id="isMarried" formControlName="isMarried" />
            <span class="text-danger"
              *ngIf="submitted && f.isMarried.errors">
              <span *ngIf="f.isMarried.errors?.['required']">
                Marital status is required!
              </span>
            </span>
          </p>
          <p>
            <label for="country">country </label>
            <select id="country" formControlName="country">
              <option [value]="1">India</option>
              <option [value]="2">USA</option>
            </select>
            <span class="text-danger"
              *ngIf="submitted && f.country.errors">
              <span *ngIf="f.country.errors?.['required']">
                Country is required!
              </span>
            </span>
          </p>
          <p>
            <label for="firstname">Password </label>
            <input type="text" id="password" formControlName="password" />
            <span class="text-danger"
              *ngIf="submitted && password?.errors">
              <span *ngIf="password?.errors?.['required']">
                Password is required!
              </span>
            </span>
          </p>
          <p>
            <label for="confirmPassword">Confirm Password </label>
            <input type="text" id="confirmPassword" formControlName="confirmPassword" />
            <span class="text-danger"
              *ngIf="submitted && confirmPassword?.errors">
              <span *ngIf="confirmPassword?.errors?.['required']">
                Confirm password is required!
              </span>
            </span>
            <!-- <span *ngIf="passwordMatchError" class="text-danger">
              Password does not match
            </span> -->
            <span *ngIf="contactForm.getError('mismatch') && contactForm.get('confirmPassword')?.dirty" class="text-danger">
              Password does not match
            </span>
          </p>
          <p>
            <label for="file">File </label>
            <input type="file" id="file" formControlName="file" />
            <span class="text-danger"
              *ngIf="submitted && file?.errors">
              <span *ngIf="file?.errors?.['required']">
                File is required!
              </span>
            </span>
          </p>
          <h5>Address</h5>
          <div formGroupName="address">
            <div class="form-group"><label for="city">City</label>
              <input type="text" class="form-control" name="city" formControlName="city" />
              <span class="text-danger"
                *ngIf="submitted && city?.errors">
                <span *ngIf="city?.errors?.['required']">
                  City is required!
                </span>
              </span>
            </div>
            <div class="form-group"><label for="street">Street</label>
              <input type="text" class="form-control" name="street" formControlName="street" />
            </div>
            <div class="form-group"><label for="pincode">Pin Code</label>
              <input type="text" class="form-control" name="pincode" formControlName="pincode"/>
                <span class="text-danger"
                  *ngIf="submitted && contactForm.controls.address.controls.pincode.errors">
                  <span *ngIf="contactForm.controls.address.controls.pincode.errors?.['required']">
                    Pincode is required!
                  </span>
                  <span *ngIf="contactForm.controls.address.controls.pincode.errors?.['maxlength']">
                    Pincode can be max 6 characters long!
                  </span>
                  <span *ngIf="contactForm.controls.address.controls.pincode.errors?.['pattern']">
                    Only number allowed!
                  </span>
                </span>
            </div>
          </div>
          <p><button type="submit" class="my-2">Submit</button></p>
        </form>
      </div>
    </div>
  </div>

## Reactive Form with async validator and validate on button click also added file upload ts
  --`import { Component, OnInit } from '@angular/core';
    import { FormGroup, FormControl, Validators } from '@angular/forms';
    import { PasswordValidators } from '../_helper/password-cpassword-match';
    import { UserService } from '../_helper/sync-vslidator/user-service';
    import { UsernameValidator } from '../_helper/sync-vslidator/check-username-exist';

    @Component({
      selector: 'app-reactive-form',
      templateUrl: './reactive-form.component.html',
      styleUrls: ['./reactive-form.component.css'],
    })
    export class ReactiveFormComponent implements OnInit {

      submitted: boolean = false;

      constructor(private userService: UserService) {}

      contactForm = new FormGroup(
        {
          firstname: new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern('^[a-zA-Z]+$'),
            ]
          ),
          email: new FormControl('', [Validators.email, Validators.required],
            [UsernameValidator.createValidator(this.userService)]),
          gender: new FormControl('', [Validators.required]),
          isMarried: new FormControl('', [Validators.required]),
          country: new FormControl('', [Validators.required]),
          address: new FormGroup({
            city: new FormControl('', [Validators.required]),
            street: new FormControl(''),
            pincode: new FormControl('', [Validators.required,Validators.maxLength(6),Validators.pattern('^[0-9]*$'),
            ]),
          }),
          password: new FormControl('', [Validators.required]),
          confirmPassword: new FormControl('', [Validators.required]),
          file: new FormControl('', [Validators.required]),
        },
        [PasswordValidators.MatchValidator('password', 'confirmPassword')]
      );

      ngOnInit(): void {}

      onSubmit() {
        this.submitted = true;
        if(this.contactForm.invalid)
        return;
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
      get file() {
        return this.contactForm.get('file');
      }
    }`

## Reactive Form with FormBuilder html
  --<div class="container">
      <div class="row align-items-start">
        <div class="col-md-6">
          <h1 class="my-2">Reactive form with FormBuilder</h1>
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
            <p>
              <label for="firstname">First Name </label>
              <input type="text" id="firstname" formControlName="firstname" />
              <span class="text-danger"
                *ngIf="submitted && firstname?.errors">
                <span *ngIf="firstname?.errors?.['required']">
                  First Name is required!
                </span>
              </span>
            </p>
            <p>
              <label for="email">Email </label>
              <input type="text" id="email" formControlName="email" />
              <span class="text-danger"
                *ngIf="submitted && contactForm.controls?.['email']?.errors">
                <span *ngIf="contactForm.controls?.['email']?.errors?.['required']">
                  Email is required!
                </span>
                <span *ngIf="submitted && contactFormControls?.['email']?.errors?.['email']">
                  Email must be valid email!
                </span>
              </span>
            </p>
            <h5>Address</h5>
            <div formGroupName="address">
              <div class="form-group"><label for="city">City</label>
                <input type="text" class="form-control" name="city" formControlName="city" />
                <span class="text-danger"
                  *ngIf="submitted && city?.errors">
                  <span *ngIf="city?.errors?.['required']">
                    City is required!
                  </span>
                </span>
              </div>
            </div>
            <p><button type="submit" class="my-2">Submit</button></p>
          </form>
        </div>
      </div>
    </div>
  
## Reactive Form with FormBuilder ts
  --`import { Component, OnInit } from '@angular/core';
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
      }`
  
## Reactive Form with FormBuilder and FormArray(Dynamic form) html
  --<div class="container">
      <div class="row align-items-start">
        <div class="col-md-6">
          <h1 class="my-2">Reactive form with FormBuilder and FormArray</h1>
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
            <p>
              <label for="firstname">First Name </label>
              <input type="text" id="firstname" formControlName="firstname" />
              <span class="text-danger"
                *ngIf="submitted && firstname?.errors">
                <span *ngIf="firstname?.errors?.['required']">
                  First Name is required!
                </span>
              </span>
            </p>
            <p>
              <label for="email">Email </label>
              <input type="text" id="email" formControlName="email" />
              <span class="text-danger"
                *ngIf="submitted && contactForm.controls?.['email']?.errors">
                <span *ngIf="contactForm.controls?.['email']?.errors?.['required']">
                  Email is required!
                </span>
                <span *ngIf="submitted && contactFormControls?.['email']?.errors?.['email']">
                  Email must be valid email!
                </span>
              </span>
            </p>
            <h5>Address</h5>
            <div formGroupName="address">
              <div class="form-group"><label for="city">City</label>
                <input type="text" class="form-control" name="city" formControlName="city" />
                <span class="text-danger"
                  *ngIf="submitted && city?.errors">
                  <span *ngIf="city?.errors?.['required']">
                    City is required!
                  </span>
                </span>
              </div>
            </div>
            <h5>Skills</h5>
            <div formArrayName="skills">
              <div *ngFor="let skil of skills.controls; let i=index">
                  <div [formGroupName]="i">
                      <div> 
                          skill name-{{i}} : <input type="text" formControlName="skill">
                          <span class="text-danger" *ngIf="submitted && skil.get('skill')?.errors?.['required']">
                              Skill is required!
                          </span>
                      </div>
                      <div> 
                          exp: <input type="text" formControlName="exp">
                      </div>
              
                      <button (click)="removeSkill(i)">Remove</button>
                  </div>
              </div>
            </div>   
            <p>
              <br>
              <button type="button" (click)="addSkills()">Add</button>
            </p>                 
            <p><button type="submit" class="my-2">Submit</button></p>
          </form>
        </div>
      </div>
    </div>
  
  ## Reactive Form with FormBuilder and FormArray(Dynamic form) ts
    --`import { Component, OnInit } from '@angular/core';
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
        
      }`
