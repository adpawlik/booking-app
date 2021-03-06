import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errors: string[] = [];

  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('([a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+[.](?:\[a-zA-Z0-9-]+))')]],
      password: ['', Validators.required],
    });
  }

  isInvalidForm(fieldName: string): boolean {
    return this.loginForm.controls[fieldName].invalid;
  }

  isRequired(fieldName: string): boolean {
    return this.loginForm.controls[fieldName].errors.required;
  }

  isInvalidPattern(fieldName: string): boolean {
    return this.loginForm.controls[fieldName].errors.pattern;
  }

  login() {
    this.auth.login(this.loginForm.value).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      (errorResponse) => {
        this.errors = errorResponse.error.errors;
      });
  }

}
