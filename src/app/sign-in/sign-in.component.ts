import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {


  loginForm = this.fb.group({
      email: [null, 
        Validators.required,
        Validators.email
      ],
      password: [null, 
        Validators.required, 
        Validators.minLength(8),
      ]
            
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log("submit");
    //will call service

    //temp
    //if no errors should go to list of initiatives


  }
  // verify(): void{
  //   alert(this.email+" "+this.password);
  // }
}
