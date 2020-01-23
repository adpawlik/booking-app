import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  errors: any[] = [];

  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('([a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+[.](?:\[a-zA-Z0-9-]+))')]],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required]
    });
  }

  isInvalidForm(fieldName): boolean {
    return this.registerForm.controls[fieldName].invalid;
  }

  isRequired(fieldName): boolean {
    return this.registerForm.controls[fieldName].errors.required;
  }

  register() {
    this.auth.register(this.registerForm.value).subscribe(
      () => {
        this.router.navigate(['/login', {registered: 'success'}]);
      },
      (errorResponse) => {
        this.errors = errorResponse.error.errors;
      });
  }

}
