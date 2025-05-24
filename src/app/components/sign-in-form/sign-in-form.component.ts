import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './sign-in-form.component.html',
  styleUrl: './sign-in-form.component.scss'
})
export class SignInFormComponent {
  @Input() menuOpen: boolean = false;
  @Output() formMode: EventEmitter<'login' | 'sign-in'> = new EventEmitter<'login' | 'sign-in'>()

  signInForm: ReturnType<FormBuilder['group']>;

  constructor(private fb: FormBuilder) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(form: ReturnType<FormBuilder['group']>) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    
    if (password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({ mismatch: true });
    } else {
      form.get('confirmPassword')?.setErrors(null);
    }
  }

  onSubmit() {
    if (this.signInForm.valid) {
      console.log('Formulário de cadastro enviado:', this.signInForm.value);
      this.menuOpen = false;
    }
  }
}