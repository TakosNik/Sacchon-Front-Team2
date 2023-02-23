import { HttpClient } from '@angular/common/http';
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

    post(){
      const url = 'https://reqres.in/api/users'

      const data = {
        "name": "morpheus",
        "job": "leader"
      }

      return this.http.post(url , data)
      

    }
}
