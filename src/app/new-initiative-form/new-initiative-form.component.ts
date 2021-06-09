import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
//formGroup

import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { InitiativeService } from '../initiative.service';
import { InitiativeDTO } from '../model/initiativeDTO';

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
    private initiativeService: InitiativeService
  ) {}

  initiativeForm = this.fb.group({
    title: [null, Validators.required],
    description: [null, Validators.required],
    //look up other validators
  });

  //variables

  //functions
  clickCancel() {}
  clickSubmit() {
    //test
    const newInitiative = new InitiativeDTO(1, this.title, this.description, 1);
    console.log(newInitiative);
    this.initiativeService.postInitiative(newInitiative).subscribe((res) => {
      console.log(res);
    });
  }
}
