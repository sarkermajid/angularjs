import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators} from '@angular/forms';

export interface User {
  username: string,
  password: string
}

@Component({
  selector: 'app-secondcomponent',
  templateUrl: './secondcomponent.component.html',
  styleUrls: ['./secondcomponent.component.css']
})
export class SecondcomponentComponent implements OnInit {

  // for form validation
  user : User = {
    username: '',
    password: ''
  }
  constructor() {
    this.user = {} as User;
  }

  ngOnInit(): void {
  }

  color = new FormControl('')

  name = ''

  myForm = new FormGroup({
    username: new FormControl(this.user.username,[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(40)
    ]),
    password: new FormControl(this.user.password,[
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(100)
    ])
  })

  get username(){
    return this.myForm.get('username')
  }
  get password(){
    return this.myForm.get('password')
  }
  onSubmit(){
    console.warn(this.myForm.value)
  }

}
