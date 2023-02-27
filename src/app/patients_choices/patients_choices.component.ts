import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose',
  templateUrl: './patients_choices.component.html',
  styleUrls: ['./patients_choices.component.scss']
})
export class PatientChoicesComponent {

  constructor(private router:Router){}

  goToPatient(pageName:string):void{
    this.router.navigate([`${pageName}`]);

  }
}
