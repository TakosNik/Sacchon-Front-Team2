import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent implements OnInit {


  response: any;

  createForm: any;

  // data = {
  //   name: "maria",
  //   job: "manager"
  // }

  constructor(private service: UserService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.service.post(this.data).subscribe({
    //   next: data => this.response =  data
    // })

    this.createForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  createUser() {
    // console.log(this.createForm.get('name'));
    const data = {
      firstname: this.createForm.get('firstname').value,
      lastname: this.createForm.get('lastname').value
    };

    this.service.post(data).subscribe({
      next: res => this.response = res
    })
  }



  get name(){
    return this.createForm.get('firstname');
  }

  get job(){
    return this.createForm.get('lastname');
  }

}
