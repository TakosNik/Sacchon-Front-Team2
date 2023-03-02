import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment'
import { Observable, timestamp } from 'rxjs';

@Component({
  selector: 'app-patient-control-panel',
  templateUrl: './patient-control-panel.component.html',
  styleUrls: ['./patient-control-panel.component.scss']
})
export class PatientControlPanelComponent implements OnInit {

  patient: any;
  dailyCarbonateIntakes: any[] = [];
  dailyBloodGlucoseLevels: any[] = [];


  // newCarbonate and newGlucose objects to store the input values of the form
  newCarbonate = { gram: null };
  newGlucose = { measurement: null };
  message: any;
  userService: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.userService.getPatientById(1).subscribe({
      next: (response: any) => {
        this.patient = response;
      },
      error: (err: any) => {
        this.message = err;
      },
    });
  }

  addCarbonate(): void {
    const newCarbonate = {
      date: new Date(),
      gram: this.newCarbonate.gram
    };
    // Add the new carbonate reading to the dailyCarbonateIntakes array
    this.dailyCarbonateIntakes.push(newCarbonate);

    // Send a POST request to the server to save the new carbonate reading
    const url = 'http://localhost:9000/patient/carbs/1';
    const body = {
      patientId: 1,
      date: newCarbonate.date,
      gram: newCarbonate.gram
    };

    this.http.post(url, body).subscribe();

    // Reset the newCarbonate object to clear the form
    this.newCarbonate = { gram: null };
  }

  addGlucose(): void {
    const currentDate = new Date();
    const newGlucose = {
      glDate: moment(currentDate).format('YYYY-MM-DD'),
      glTime: moment(currentDate).format('HH:mm:ss'),
      measurement: this.newGlucose.measurement
    };

    // Add the new glucose reading to the dailyBloodGlucoseLevels array
    this.dailyBloodGlucoseLevels.push(newGlucose);

    // Send a POST request to the server to save the new glucose reading
    const url = 'http://localhost:9000/patient/glucose/1';
    const body = {
      patientId: 1,
      glDate: newGlucose.glDate,
      glTime: newGlucose.glTime,
      measurement: newGlucose.measurement
    };

    this.http.post(url, body).subscribe();
    // Reset the newGlucose object to clear the form
    this.newGlucose = { measurement: null };
  }





  get firstname() {
    return this.userService.get('firstname');
  }

  get lastname() {
    return this.userService.get('lastname');
  }

}
