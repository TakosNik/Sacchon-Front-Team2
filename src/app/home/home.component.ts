import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  response: any;
  data: any;
  constructor(private service:UserService){}

  ngOnInit(): void{
    this.service.post(this.data).subscribe({
      next: data => this.response = data
    })
  }

}
