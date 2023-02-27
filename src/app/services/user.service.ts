import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getAllPatients() {
    throw new Error('Method not implemented.');
  }
  createUser(value: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) {}

  private apiUrl = 'http://localhost:9000/';

  getPatientById(id:number){
    const url = `http://localhost:9000/patient/1`;
    return this.http.get(url);
  }

    post(data:any){
      const url = 'https://reqres.in/api/users'

      const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('crossDomain', 'true');

    return this.http.post(url, JSON.stringify(data), {headers: headers});



    }
}
