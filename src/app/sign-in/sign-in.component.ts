import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user: User;
  loginForm = this.fb.group({
  })

  constructor(private fb: FormBuilder) {
    this.user.username="";
    this.user.password=""; 
  }

  ngOnInit(): void {

  }

  onSubmit(): void{

  }
  verify(): void{
    console.log("hit");
    alert(this.user.username+" "+this.user.password);
  }
}
