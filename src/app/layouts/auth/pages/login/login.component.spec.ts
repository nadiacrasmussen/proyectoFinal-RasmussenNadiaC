import { TestBed, ComponentFixture } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { of } from 'rxjs';
import { User } from '../../../dashboard/pages/users/models';
import {  MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PipesModule } from '../../../dashboard/pages/pipes/pipes.module';
import { SharedModule } from '../../../../shared/shared.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['login']);

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule,MatCardModule,MatFormFieldModule,
        MatInputModule,SharedModule,
        MatIconModule,PipesModule],
      providers: [{ provide: AuthService, useValue: authServiceSpy }],
    }).compileComponents();

    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

  });

 it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('Debe llamar authService.login con datos correctos y debolver un arreglo con un usuario', () => {
    const testUserData = { email: 'ramirezmica@gmail.com', password: 'lulurami' };
    const userResponse :User =  {"id": 3,
    "firstName": "Micaela",
    "lastName": "Ramirez",
    "email": "ramirezmica@gmail.com",
    "password": "lulurami",
    "role": "alumno",
    "token":""}
    authService.login.and.returnValue(of([userResponse]));
    component.loginForm.setValue(testUserData);
    component.onSubmit();


    expect(authService.login).toHaveBeenCalledWith(testUserData);
  });

  it('Debe de resetear el formulario y mostrar un alert Usuario o contraseña incorrecta', () => {
    const alertSpy = spyOn(window, 'alert');
    const invalidUserData = { email: 'test@example.com', password: '' };
    component.loginForm.setValue(invalidUserData);
    component.onSubmit();
   component.loginForm.reset();
    expect(component.loginForm.value).toEqual({ email: null, password: null });
    expect(alertSpy).toHaveBeenCalledWith('Usuario o contraseña incorrecta');
  });


});
