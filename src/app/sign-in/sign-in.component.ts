import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent{

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

  constructor(private fb: FormBuilder, private authService:AuthService) {}

  login(): void{
    this.authService.login();  
  }

}
