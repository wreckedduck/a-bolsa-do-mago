import { Component, HostListener } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { SvgIconComponent } from "../svg-icon/svg-icon.component"
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { LoginFormComponent } from "../login-form/login-form.component"
import { SignInFormComponent } from "../sigin-form/sign-in-form.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SvgIconComponent,
    LoginFormComponent,
    SignInFormComponent
],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuOpen = false
  isMobile = window.innerWidth <= 1200

  formMode: 'login' | 'sign-in' = 'login'

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = window.innerWidth <= 1200
    if (!this.isMobile) {
      this.menuOpen = false
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen
  }
}