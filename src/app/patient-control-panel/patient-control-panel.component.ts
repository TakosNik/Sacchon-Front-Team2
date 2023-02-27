import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-patient-control-panel',
  templateUrl: './patient-control-panel.component.html',
  styleUrls: ['./patient-control-panel.component.scss']
})
export class PatientControlPanelComponent implements OnInit {

  patient: any;
  dailyCarbonateIntakes: any[] = [];
  dailyBloodGlucoseLevels: any[] = [];
  latestDoctorConsultation: any;

  // newCarbonate and newGlucose objects to store the input values of the form
  newCarbonate = { amount: null };
  newGlucose = { level: null };

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPatient();
    this.getDailyCarbonateIntakes();
    this.getDailyBloodGlucoseLevels();
    this.getLatestDoctorConsultation();
  }

  getPatient(): void {
    const url = 'http://localhost:9000/patient/1';
    this.http.get(url).subscribe((data: any) => {
      this.patient = data;
    });
  }


  getDailyCarbonateIntakes(): void {
    const url = 'http://localhost:9000/patient/carbs/1';
    this.http.get(url).subscribe(data => {
      this.dailyCarbonateIntakes = data as any[];
    });
  }

  getDailyBloodGlucoseLevels(): void {
    const url = 'http://localhost:9000/patient/glucose/1';
    this.http.get(url).subscribe(data => {
      this.dailyBloodGlucoseLevels = data as any[];
    });
  }


  getLatestDoctorConsultation(): void {
    const url = 'http://localhost:9000/doctor/consultation/1';
    this.http.get(url).subscribe(data => {
      this.latestDoctorConsultation = data;
    });
  }

  addCarbonate(): void {
    // Add the new carbonate reading to the dailyCarbonateIntakes array
    this.dailyCarbonateIntakes.push({ date: new Date(), amount: this.newCarbonate.amount });

    // Send a POST request to the server to save the new carbonate reading
    const url = 'http://localhost:9000/patient/carbs/1';
    const body = { patientId: 1, amount: this.newCarbonate.amount };
    this.http.post(url, body).subscribe();

    // Reset the newCarbonate object to clear the form
    this.newCarbonate = { amount: null };
  }

  addGlucose(): void {
    // Add the new glucose reading to the dailyBloodGlucoseLevels array
    this.dailyBloodGlucoseLevels.push({ date: new Date(), level: this.newGlucose.level });

    // Send a POST request to the server to save the new glucose reading
    const url = 'http://localhost:9000/patient/glucose/1';
    const body = { patientId: 1, level: this.newGlucose.level };
    this.http.post(url, body).subscribe();

    // Reset the newGlucose object to clear the form
    this.newGlucose = { level: null };
  }

}
