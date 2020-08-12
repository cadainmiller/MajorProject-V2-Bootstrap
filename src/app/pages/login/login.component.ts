import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

import { LoginService } from 'src/app/services/login.service';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  submitted = false;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit() {}

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
  loginBtn() {
    if (this.loginForm.invalid) {
    }
    this.submitted = false;

    this.loginService.loginUser(this.loginForm.value).subscribe(
      (data) => {
        //console.log(data);
        localStorage.setItem('access_token', data.accessToken);
        this.router.navigateByUrl('/');
      },
      (error: any) => {
        this.submitted = true;
        this.errorMessage = 'Email or Password incorrect.';
      }
    );
  }
}
