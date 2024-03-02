import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersComponent } from './users.component';
import { UsersService } from './users.service';
import { loadingService } from '../../../../core/service/loading.service';
import { of } from 'rxjs';
import { User } from './models';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let usersServiceSpy: jasmine.SpyObj<UsersService>;

  beforeEach(async () => {
    const usersServiceSpyObj = jasmine.createSpyObj('UsersService', ['getUsers', 'deleteUser']);

    await TestBed.configureTestingModule({
      declarations: [UsersComponent],
      providers: [
        { provide: UsersService, useValue: usersServiceSpyObj },
        loadingService
      ]
    }).compileComponents();

    usersServiceSpy = TestBed.inject(UsersService) as jasmine.SpyObj<UsersService>;
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getUsers on initialization', () => {
    const users: User[] = [
      {
          "id": 3,
          "firstName": "Micaela",
          "lastName": "Ramirez",
          "email": "ramirezmica@gmail.com",
          "password": "lulurami",
          "role": "alumno"
        }
    ];
    usersServiceSpy.getUsers.and.returnValue(of(users));

    fixture.detectChanges();

    expect(component.dataSource).toEqual(users);
  });

  it('should add user onUserSubmitted', () => {
    const user: User = {
      "id": 3,
      "firstName": "Micaela",
      "lastName": "Ramirez",
      "email": "ramirezmica@gmail.com",
      "password": "lulurami",
      "role": "alumno"
    }

    component.onUserSubmitted(user);

    expect(component.dataSource).toContain(user);
  });

  it('should call deleteUser onDeleteUser', () => {
    const user: User = {
      "id": 3,
      "firstName": "Micaela",
      "lastName": "Ramirez",
      "email": "ramirezmica@gmail.com",
      "password": "lulurami",
      "role": "alumno"
    }
    usersServiceSpy.deleteUser.and.returnValue(of([user]));

    component.onDeleteUser(user);

    expect(usersServiceSpy.deleteUser).toHaveBeenCalledWith(user.id);
  });

  it('should unsubscribe on ngOnDestroy', () => {
    const unsubscribeSpy = jasmine.createSpy('unsubscribe');
    const subscription = { unsubscribe: unsubscribeSpy } as any;
    component.destroy$ = [subscription];

    component.ngOnDestroy();

    expect(unsubscribeSpy).toHaveBeenCalled();
  });
});
