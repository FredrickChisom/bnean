import { Component, forwardRef, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormBuilder, FormGroup, Validators, FormControl, NG_VALIDATORS } from '@angular/forms';
import { Subscription } from 'rxjs';

export interface ProfileValues {
	firstName: string;
	lastName: string;
	email: number;
}

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => ProfileComponent),
			multi: true
		},
		{
			provide: NG_VALIDATORS,
			useExisting: forwardRef(() => ProfileComponent),
			multi: true,
		}
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements ControlValueAccessor, OnDestroy {
	profileForm: FormGroup;
	subscriptions: Subscription[] = [];

	get value(): ProfileValues {
		return this.profileForm.value;
	}

	set value(value: ProfileValues) {
		this.profileForm.setValue(value);
		this.onChange(value);
		this.onTouched();
	}

	get firstNameControl() {
		return this.profileForm.controls.firstName;
	}

	get lastNameControl() {
		return this.profileForm.controls.lastName;
	}

	get emailControl() {
		return this.profileForm.controls.email;
	}

	constructor(private formBuilder: FormBuilder) {
		this.profileForm = this.formBuilder.group({
			firstName: ['', [Validators.minLength(1), Validators.required]],
			lastName: ['', [Validators.minLength(1), Validators.required]],
			email: ['', [Validators.required, Validators.email]],
		});

		this.subscriptions.push(
			this.profileForm.valueChanges.subscribe(value => {
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
			this.profileForm.reset();
		}
	}

	registerOnTouched(fn) {
		this.onTouched = fn;
	}

	validate(_: FormControl) {
		return this.profileForm.valid ? null : {
			profile: {
				valid: false,
				message: 'Profile fields are invalid'
			},
		};
	}
}



