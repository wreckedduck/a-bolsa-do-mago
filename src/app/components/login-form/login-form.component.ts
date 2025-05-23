import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'

@Component({
  selector: 'app-login-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  @Input() menuOpen: boolean = false
  @Output() formMode: EventEmitter<'login' | 'sign-in'> = new EventEmitter<'login' | 'sign-in'>()

  loginForm: ReturnType<FormBuilder['group']>

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

    onSubmit() {
    if (this.loginForm.valid) {
      console.log('Formulário enviado:', this.loginForm.value)
      this.menuOpen = false
    }
  }
}
