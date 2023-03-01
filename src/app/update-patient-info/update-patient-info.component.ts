import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient-info.component.html',
  styleUrls: ['./update-patient-info.component.scss']
})
export class UpdatePatientComponent implements OnInit {
  response: any;
  updateForm!: FormGroup;
  patientId: any;
  patient: any;

  constructor(
    private service: UserService,
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      username: [''],
      firstname: [''],
      lastname: [''],
      address: [''],
      city: [''],
      birthdate: [''],
      diabetestype: ['']
    });

    // Get the patient ID from the URL parameters
    this.route.paramMap.subscribe(params => {
      this.patientId = params.get('id');
      // Fetch the patient information using the ID
      this.service.getPatientById(this.patientId).subscribe((data: any) => {
        // Set the form values to the fetched patient information
        this.updateForm.patchValue({
          username: data.username,
          firstname: data.firstname,
          lastname: data.lastname,
          address: data.address,
          city: data.city,
          birthdate: data.birthdate,
          diabetestype: data.diabetestype
        });
        this.patient = data;
      });
    });
  }

  updatePatient() {
    const data = {
      username: this.updateForm.value.username,
      firstname: this.updateForm.value.firstname,
      lastname: this.updateForm.value.lastname,
      address: this.updateForm.value.address,
      city: this.updateForm.value.city,
      birthdate: this.updateForm.value.birthdate,
      diabetestype: this.updateForm.value.diabetestype
    };
    this.http.put(`http://localhost:9000/patient/1`, data).subscribe({
      next: res => {
        this.response = res;
        // Reset the form and mark it as pristine and untouched
        this.updateForm.reset();
        this.updateForm.markAsPristine();
        this.updateForm.markAsUntouched();
        // Update the patient object
        this.patient.username = data.username;
        this.patient.firstname = data.firstname;
        this.patient.lastname = data.lastname;
        this.patient.address = data.address;
        this.patient.city = data.city;
        this.patient.birthdate = data.birthdate;
        this.patient.typediabetes = data.diabetestype;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  get username() {
    return this.updateForm.get('username');
  }

  get firstname() {
    return this.updateForm.get('firstname');
  }

  get lastname() {
    return this.updateForm.get('lastname');
  }

  get address() {
    return this.updateForm.get('address');
  }

  get city() {
    return this.updateForm.get('city');
  }

  get birthdate() {
    return this.updateForm.get('birthdate');
  }

  get diabetestype() {
    return this.updateForm.get('diabetestype');
  }
}
