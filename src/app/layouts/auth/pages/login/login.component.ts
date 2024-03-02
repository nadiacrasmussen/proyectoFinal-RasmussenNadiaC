import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;

  revealPassword = false;
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.reset();
      alert('usuario o contraseña incorecta');
      return;
    }
    this.authService.login(this.loginForm.value);
  }
}
