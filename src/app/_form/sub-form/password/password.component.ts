import { Component, forwardRef, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormGroup, FormBuilder, ControlValueAccessor, Validators, NG_VALIDATORS, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { matchingInputsValidator } from './validators';

export interface PasswordValues {
	password: string;
	confirmPassword: string;
}

@Component({
	selector: 'app-password',
	templateUrl: './password.component.html',
	styleUrls: ['./password.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PasswordComponent),
			multi: true
		},
		{
			provide: NG_VALIDATORS,
			useExisting: forwardRef(() => PasswordComponent),
			multi: true,
		}
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordComponent implements ControlValueAccessor, OnDestroy {
	passwordForm: FormGroup;
	subscriptions: Subscription[] = [];

	get value(): PasswordValues {
		return this.passwordForm.value;
	}

	set value(value: PasswordValues) {
		this.passwordForm.setValue(value);
		this.onChange(value);
		this.onTouched();
	}

	get passwordControl() {
		return this.passwordForm.controls.password;
	}

	get confirmPasswordControl() {
		return this.passwordForm.controls.confirmPassword;
	}

	constructor(private formBuilder: FormBuilder) {
		this.passwordForm = this.formBuilder.group({
			password: ['', Validators.required],
			confirmPassword: ['', Validators.required]
		}, { validator: matchingInputsValidator('password', 'confirmPassword') });

		this.subscriptions.push(
			this.passwordForm.valueChanges.subscribe(value => {
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
			this.passwordForm.reset();
		}
	}

	registerOnTouched(fn) {
		this.onTouched = fn;
	}

	validate(_: FormControl) {
		return this.passwordForm.valid ? null : { passwords: { valid: false, }, };
	}

	reset() {
		this.passwordForm.reset();
	}
}

