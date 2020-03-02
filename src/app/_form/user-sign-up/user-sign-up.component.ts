import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.scss'],
  	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserSignUpComponent {

 signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
     this.signupForm = this.formBuilder.group({
      password: [],
      profile: []
    });
   }

  submit() {
    console.log(this.signupForm.value);
  }

   resetForm() {
    this.signupForm.reset();
  }
}
