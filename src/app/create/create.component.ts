import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent implements OnInit {
  response: any;
  createForm!: FormGroup;



  ngOnInit(): void {
    this.createForm = this.fb.group({
      username: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      address: [''],
      city: [''],
      birthdate: [''],
      typediabetes: ['Type 1']
    });
  }

  constructor(
    private service: UserService,
    private fb: FormBuilder,
    private http: HttpClient
  ) { }


  createUser() {
    const data = this.createForm.value;
    this.http.post('http://localhost:9000/Patient', data).subscribe({
      next: res => {
        this.response = res;
        this.createForm.reset();
      },
      error: err => console.error(err)
    });
  }


  resetForm() {
    this.createForm.reset();
    this.createForm.markAsPristine();
    this.createForm.markAsUntouched();
  }

  get username() {
    return this.createForm.get('username');
  }

  get firstname() {
    return this.createForm.get('firstname');
  }

  get lastname() {
    return this.createForm.get('lastname');
  }

  get address() {
    return this.createForm.get('address');
  }

  get city() {
    return this.createForm.get('city');
  }

  get birthdate() {
    return this.createForm.get('birthdate');
  }
}
