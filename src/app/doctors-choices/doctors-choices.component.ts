import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctors-choices',
  templateUrl: './doctors-choices.component.html',
  styleUrls: ['./doctors-choices.component.scss']
})
export class DoctorsChoicesComponent {
  constructor(private router:Router){}

  goToPatient(pageName:string):void{
    this.router.navigate([`${pageName}`]);

  }

  goToDoctor(pageName:string):void{
    this.router.navigate([`${pageName}`]);

  }

  
}
