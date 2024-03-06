import { Component, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnDestroy {
  loginForm: FormGroup;
destroy$!:Subscription;
  revealPassword = false;
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  ngOnDestroy(): void {
    this.destroy$.unsubscribe();
  }
  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.reset();
      alert('usuario o contraseña incorecta');
      return;
    }
    this.destroy$ = this.authService.login(this.loginForm.value).subscribe();

  }
}
