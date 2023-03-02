import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getAllDoctors() {
    const url = "http://localhost:9000/doctors";
    return this.http.get(url);
  }


  getAllPatients() {
    const url = "http://localhost:9000/patient"
    return this.http.get(url);
  }

  createUser(value: any) {
    throw new Error('Method not implemented.');
  }

  getPatientById(id: number){
    const url = `http://localhost:9000/patient/${id}`;
    return this.http.get(url);
  }


  post(data: any){
    const url = 'http://localhost:9000/patient';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(url, JSON.stringify(data), {headers: headers});
  }

  updatePatient(id: number, data: any) {
    const url = `http://localhost:9000/patient/1`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.put(url, JSON.stringify(data), {headers: headers});
  }

  postdoctor(data:any){
    const url = 'http://localhost:9000/doctor';

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('crossDomain', 'true');

    return this.http.post(url, JSON.stringify(data), {headers: headers});
  }
}
