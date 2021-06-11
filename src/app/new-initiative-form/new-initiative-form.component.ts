import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
//formGroup

import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { InitiativeService } from '../services/initiative.service';
import { InitiativeDTO } from '../model/initiativeDTO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-initiative-form',
  templateUrl: './new-initiative-form.component.html',
  styleUrls: ['./new-initiative-form.component.css'],
})
export class NewInitiativeFormComponent {
  public title: string;
  public description: string;

  //constructor

  constructor(
    private fb: FormBuilder,
    private initiativeService: InitiativeService,
    private router:Router,
  ) {}

  initiativeForm = this.fb.group({
    title: [null, Validators.required],
    description: [null, Validators.required],
    //look up other validators
  });

  //variables

  //functions
  
  clickCancel() {
    //make this route to all inititatives!
    console.log(this.initiativeForm.controls.title.value);
    this.router.navigate(["all-initiative"]);
  }
  clickSubmit() {
    //make this route to the new initiative...
    //test
    const newInitiative = new InitiativeDTO(parseInt(sessionStorage.getItem("userId")), this.initiativeForm.controls.title.value, this.initiativeForm.controls.description.value, null); //myid, title, descr, PoC id
    console.log(newInitiative);
    this.initiativeService.postInitiative(newInitiative).subscribe((res) => {
      console.log(res);
      //need an if success
      this.router.navigate(["success-initiative"]);
      //this should probably go to a specific initiative
    });
  }
}
