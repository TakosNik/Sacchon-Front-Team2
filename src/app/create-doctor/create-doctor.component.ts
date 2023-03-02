import { UserService } from '../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.scss']
})

export class CreateDoctorComponent implements OnInit {
  response: any;
  createForm!: FormGroup;



  ngOnInit(): void {
    this.createForm = this.fb.group({
      doctorType: [''],
      dateOfBirth: [''],
      firstName: [''],
      lastName: [''],
      username: [''],
    });
  }

  constructor(
    private service: UserService,
    private fb: FormBuilder,
    private http: HttpClient
  ) { }


  createUser() {
    const data = {
      doctorType: this.doctorType?.value,
      dateOfBirth: this.dateOfBirth?.value,
      firstName: this.firstName?.value,
      lastName: this.lastName?.value,
      username: this.username?.value
    };
    this.http.post('http://localhost:9000/doctor', data).subscribe({
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

  get doctorType() {
    return this.createForm.get('doctorType');
  }

  get dateOfBirth() {
    return this.createForm.get('dateOfBirth');
  }


  get firstName() {
    return this.createForm.get('first_name');
  }

  get lastName() {
    return this.createForm.get('last_name');
  }

  get username() {
    return this.createForm.get('username');
  }
}
