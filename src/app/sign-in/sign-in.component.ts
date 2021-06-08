import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user: User;
  loginForm = this.fb.group({
      email: [null, 
        Validators.required,
        // Validators.email
      ],
      password: [null, 
        Validators.required, 
        // Validators.minLength(8),
      ]
            
  })

  constructor(private fb: FormBuilder) {
    // this.user.username="";
    // this.user.password=""; 
  }

  ngOnInit(): void {

  }

  onSubmit(): void{
    console.log("submit");
    console.log(this.loginForm.get('email').value);
    // console.log(this.fb);
    //if validation pass...

    //will call service

    //else...

  }
  // verify(): void{
  //   alert(this.email+" "+this.password);
  // }
}
