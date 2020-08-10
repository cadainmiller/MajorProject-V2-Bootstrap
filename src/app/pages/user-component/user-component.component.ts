import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.scss'],
})
export class UserComponentComponent implements OnInit {
  addUserForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl(),
    phonenumber: new FormControl(),
    role: new FormControl(),
  });
  submitted = false;

  get firstname() {
    return this.addUserForm.get('firstname');
  }

  get lastname() {
    return this.addUserForm.get('lastname');
  }

  get username() {
    return this.addUserForm.get('username');
  }

  get email() {
    return this.addUserForm.get('email');
  }

  constructor(private userService: UserService) {}

  clickAddUser() {
    console.log(this.addUserForm.value);
    this.userService.addNewUser(this.addUserForm.value).subscribe((data) => {
      console.log(data);
    });
  }
  ngOnInit(): void {}
}
