import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-choose',
  templateUrl: './patients_choices.component.html',
  styleUrls: ['./patients_choices.component.scss']
})
export class PatientChoicesComponent {
  patient: any;
  message: any;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getPatientById(1).subscribe({
      next: (response) => {
        this.patient = response;
      },
      error: (err) => {
        this.message = err;
      },
    });
  }

  goToPatient(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }
}
