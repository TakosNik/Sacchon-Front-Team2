import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {}

    get(){
      const url = 'https://reqres.in/api/users?page=2'
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
