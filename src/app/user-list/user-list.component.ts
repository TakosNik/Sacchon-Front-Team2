import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{

 
  unames:any;
  message:any;

  constructor(private service:UserService) {
  }

  ngOnInit(): void {
      this.unames = this.service.get().subscribe({
        next: (response) => {this.unames = response},
        // error: err => this.message = err,
        // complete: () => alert('StreamComplete')
      
      });
  }
}
