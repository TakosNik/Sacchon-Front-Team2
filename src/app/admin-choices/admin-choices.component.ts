import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin-choices',
  templateUrl: './admin-choices.component.html',
  styleUrls: ['./admin-choices.component.scss']
})
export class AdminChoicesComponent {
  unames:any;
  message:any;

  constructor(private service:UserService, private router:Router) {
  }

  ngOnInit(): void {
      this.unames = this.service.getAllPatients().subscribe({
        next: (response) => {this.unames = response;
        },
        // error: err => this.message = err,
        // complete: () => alert('StreamComplete')

      });
  }

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);

  }
}
