import { TestBed, ComponentFixture } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService, LoginData } from '../auth.service';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['login']);

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule],
      providers: [{ provide: AuthService, useValue: authServiceSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
  });

  it('debe instanciarse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debe validar que el email y la contraseña sean requeridos', () => {
    const emailControl = component.loginForm.get('email');
    const passwordControl = component.loginForm.get('password');

    expect(emailControl?.hasValidator(Validators.required)).toBeTrue();
    expect(passwordControl?.hasValidator(Validators.required)).toBeTrue();
  });

  it('debe marcar los campos del formulario como touched al llamar onSubmit con formulario inválido', () => {
    const emailControl = component.loginForm.get('email');
    const passwordControl = component.loginForm.get('password');

    emailControl?.setValue('');
    passwordControl?.setValue('');

    expect(component.loginForm.invalid).toBeTrue();

    const markAllAsTouchedSpy = spyOn(component.loginForm, 'markAllAsTouched');

    component.onSubmit();

    expect(markAllAsTouchedSpy).toHaveBeenCalled();
  });

  it('debe llamar al método login del AuthService al llamar onSubmit con formulario válido', () => {
    const email = 'test@example.com';
    const password = 'password';
    const loginResponse = {};
    // Configura los valores del formulario
    component.loginForm.patchValue({
      email: email,
      password: password
    });



    // Llama al método onSubmit
    component.onSubmit();

    // Verifica si el método login del servicio ha sido llamado con los valores correctos
    expect(authService.login).toHaveBeenCalledWith({ email: email, password: password });
  });
});
