import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
//formGroup

import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';


@Component({
  selector: 'app-new-initiative-form',
  templateUrl: './new-initiative-form.component.html',
  styleUrls: ['./new-initiative-form.component.css']
})
export class NewInitiativeFormComponent {
  initiativeForm = this.fb.group({
    title: [null, Validators.required],
    description: [null, Validators.required],
//look up other validators

  })
  //variables

  //functions
    clickCancel(){

    }
    clickSubmit(){
      
    }
    
    //not in use
    onSubmit(): void {
    alert('Thanks!');
    // this is running for each button...
  }
  //constructor

  constructor(private fb: FormBuilder) {}


}
