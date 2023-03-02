import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { UserService } from '../services/user.service';
import { PipeTransform, Pipe } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit{

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


@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value: { [x: string]: any; }, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
}



