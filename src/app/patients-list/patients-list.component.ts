import { Component,OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class PatientsListComponent {
  unames:any;
  message:any;

  constructor(private service:UserService) {
  }

  ngOnInit(): void {
    this.unames = this.service.getAllPatients().subscribe({
      next: (response) => {this.unames = response;
      },
      // error: err => this.message = err,
      // complete: () => alert('StreamComplete')

    });
  }
}
