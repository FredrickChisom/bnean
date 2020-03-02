import { Component, forwardRef, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormBuilder, FormGroup, Validators, FormControl, NG_VALIDATORS } from '@angular/forms';
import { Subscription } from 'rxjs';

export interface LoginValues {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login-detail',
  templateUrl: './login-detail.component.html',
  styleUrls: ['./login-detail.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LoginDetailComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LoginDetailComponent),
      multi: true,
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginDetailComponent implements ControlValueAccessor, OnDestroy {
  login: FormGroup;
  subscriptions: Subscription[] = [];

  get value(): LoginValues {
    return this.login.value;
  }

  set value(value: LoginValues) {
    this.login.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  get usernameControl() {
    return this.login.controls.username;
  }

  get passwordControl() {
    return this.login.controls.password;
  }

  constructor(private formBuilder: FormBuilder) {
    this.login = this.formBuilder.group({
      username: ['', [Validators.minLength(1), Validators.required]],
      password: ['', Validators.compose([Validators.minLength(1), Validators.maxLength(10), Validators.required])]
    });

    this.subscriptions.push(
      this.login.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onChange: any = () => { };
  onTouched: any = () => { };

  registerOnChange(fn) {
    this.onChange = fn;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }

    if (value === null) {
      this.login.reset();
    }
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  validate(_: FormControl) {
    return this.login.valid ? null : {
      login: {
        valid: false,
        message: 'login fields are invalid'
      },
    };
  }
}