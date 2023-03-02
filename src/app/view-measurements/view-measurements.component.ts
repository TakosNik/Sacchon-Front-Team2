import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Carbonate {
  id: number;
  date: Date;
  gram: number;
}

interface Glucose {
  id: number;
  glDate: Date;
  glTime: string;
  measurement: number;
}

@Component({
  selector: 'app-measurements',
  templateUrl: './view-measurements.component.html',
  styleUrls: ['./view-measurements.component.scss']
})
export class MeasurementsComponent implements OnInit {
  carbonates: Carbonate[] = [];
  glucose: Glucose[] = [];
  avgCarbonates!: number;
  avgGlucose!: number;
  startDate!: Date;
  endDate!: Date;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCarbonates();
    this.getGlucose();
  }

  getCarbonates(): void {
    const url = 'http://localhost:9000/patient/carbs/1';
    this.http.get<Carbonate[]>(url).subscribe(
      (data) => {
        this.carbonates = data;
      },
      (error) => console.log(error)
    );
  }

  getGlucose(): void {
    const url = 'http://localhost:9000/patient/glucose/1';
    this.http.get<Glucose[]>(url).subscribe(
      (data) => {
        this.glucose = data;
      },
      (error) => console.log(error)
    );
  }

  calculateAverageCarbonates(): void {
    let totalAmount = 0;
    this.carbonates.forEach((carbonate) => {
      totalAmount += carbonate.gram;
    });
    this.avgCarbonates = totalAmount / this.carbonates.length;
  }

  calculateAverageGlucose(): void {
    let totalMeasurement = 0;
    this.glucose.forEach((glucose) => {
      totalMeasurement += glucose.measurement;
    });
    this.avgGlucose = totalMeasurement / this.glucose.length;
  }

  deleteCarbonate(id: number): void {
    const url = `http://localhost:9000/patient/carbs/1`;
    this.http.delete(url).subscribe(
      (data) => {
        console.log(data);
        this.getCarbonates();
      },
      (error) => console.log(error)
    );
  }

  deleteGlucose(id: number): void {
    const url = `http://localhost:9000/patient/glucose/1`;
    this.http.delete(url).subscribe(
      (data) => {
        console.log(data);
        this.getGlucose();
      },
      (error) => console.log(error)
    );
  }

  updateCarbonate(carbonate: Carbonate): void {
    const url = `http://localhost:9000/patient/carbs/1`;
    const body = {
      gram: carbonate.gram
    };
    this.http.put(url, body).subscribe(
      (data) => {
        console.log(data);
        this.getCarbonates();
      },
      (error) => console.log(error)
    );
  }

  updateGlucose(glucose: Glucose): void {
    const url = `http://localhost:9000/patient/glucose/1`;
    const body = {
      measurement: glucose.measurement
    };
    this.http.put(url, body).subscribe(
      (data) => {
        console.log(data);
        this.getGlucose();
      },
      (error) => console.log(error)
    );
  }

}
