import { Component, OnInit } from '@angular/core';
import { Flat } from '../shared/flat.model';
import { FlatService } from '../shared/flat.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-flat-create',
  templateUrl: './flat-create.component.html',
  styleUrls: ['./flat-create.component.scss']
})
export class FlatCreateComponent implements OnInit {

  newFlatForm: FormGroup;
  flatCategories = Flat.CATEGORIES;
  errors: string[] = [];

  constructor(private flatService: FlatService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.newFlatForm = this.fb.group({
      title: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
      category: ['', Validators.required],
      images: ['http://via.placeholder.com/700x500', Validators.required],
      description: ['', Validators.required],
      guests: ['', Validators.required],
      beds: ['', Validators.required],
      bedrooms: ['', Validators.required],
      bathrooms: ['', Validators.required],
      dailyRate: ['', Validators.required]
    });
  }

  isInvalidForm(fieldName: string): boolean {
    return this.newFlatForm.controls[fieldName].invalid;
  }

  createFlat() {
    this.flatService.createFlat(this.newFlatForm.value).subscribe(
      (flat: Flat) => {
        this.router.navigate([`flat/${flat._id}`]);
      },
      (errorResponse: HttpErrorResponse) => {
        this.errors = errorResponse.error.errors;
      }
    );
  }

}
