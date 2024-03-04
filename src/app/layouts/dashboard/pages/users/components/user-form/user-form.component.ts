import { UsersService } from '../../users.service'
import { Component, Inject, OnInit,  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { User } from '../../models';
import { DialogRef } from '@angular/cdk/dialog';
import { ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;

  isLoading!: boolean;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private userService: UsersService,
    private dialogRef: DialogRef<UserFormComponent>,
    private activatedRoute: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.userForm = new FormGroup({
      "firstName": new FormControl(""),
      "lastName": new FormControl(""),
      "email": new FormControl(""),
      "role": new FormControl(""),
      "password": new FormControl(""),
      "id": new FormControl(""),
    });

    if (this.data?.user) {
      this.userForm.get('firstName')?.setValue(this.data.user.firstName)
      this.userForm.get('lastName')?.setValue(this.data.user.lastName)
      this.userForm.get('email')?.setValue(this.data.user.email)
      this.userForm.get('role')?.setValue(this.data.user.role)
      this.userForm.get('password')?.setValue(this.data.user.password)
      this.userForm.get('id')?.setValue(this.data.user.id)
    }
  }

  get currentUser(): User {
    const user = this.userForm.value as User;
    return user;
    console.log(user);
  }

  onSubmit(): void {
    if (this.userForm.invalid) return;
    this.isLoading = true
    if (this.data?.user) {
      this.userService.updateUser(this.currentUser)
        .subscribe(user => {
          this.isLoading = false
          this.dialogRef.close();
        });
      return;
    } else {
      this.userService.addUser(this.currentUser)
        .subscribe(response => {
          this.isLoading = false
          this.dialogRef.close();
        })
    }
  }
}
