import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { AuthService, LoginData } from './auth.service';
import { AuthActions } from '../../../core/store-auth/actions';
import { enviroment } from '../../../../enviroments/enviroments';


describe('AuthService', () => {
  let authService: AuthService;
  let httpTestingController: HttpTestingController;
  let store: Store<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        RouterTestingModule,
        StoreModule.forRoot({})
      ],
      providers: [AuthService]
    });

    authService = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController);
    store = TestBed.inject(Store);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  it('should login successfully', fakeAsync(() => {
    const mockUserData = {
      id: 1,
      email: 'test@example.com',
      password: 'password',
      token: 'testtoken'
    };
    const loginData: LoginData = { email: 'test@example.com', password: 'password' };

    authService.login(loginData).subscribe(user => {
   //   expect(user).toEqual([mockUserData]);
    });

    const req = httpTestingController.expectOne(`${enviroment.apiUrl}/users?email=test@example.com&password=password`);
    expect(req.request.method).toEqual('GET');
    req.flush([mockUserData]);

    tick();

//expect(authService.setAuthUser).toHaveBeenCalled();
   // expect(authService.router.navigateByUrl).toHaveBeenCalledWith('cursos');
  }));

  it('should handle login failure', fakeAsync(() => {
    const loginData: LoginData = { email: 'test@example.com', password: 'password' };

    authService.login(loginData).subscribe(() => {
      expect(authService.openSnackBar).toHaveBeenCalledWith('Datos incorrectos', 'Aceptar');
    });

    const req = httpTestingController.expectOne(`${enviroment.apiUrl}/users?email=test@example.com&password=password`);
    expect(req.request.method).toEqual('GET');
    req.flush([]);

    tick();
  }));

  it('should logout successfully', () => {
    spyOn(store, 'dispatch');
   // spyOn(authService.router, 'navigate');
    spyOn(localStorage, 'removeItem');

    authService.logout();

    expect(store.dispatch).toHaveBeenCalledWith(AuthActions.logout());
  //  expect(authService.router.navigate).toHaveBeenCalledWith(['auth']);
    expect(localStorage.removeItem).toHaveBeenCalledWith('token');
  });

  // Add more tests for verifyToken() if needed
});
