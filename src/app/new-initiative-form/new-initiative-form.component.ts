import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { InitiativeService } from '../services/initiative.service';
import { InitiativeDTO } from '../model/initiativeDTO';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../model/user';

@Component({
  selector: 'app-new-initiative-form',
  templateUrl: './new-initiative-form.component.html',
  styleUrls: ['./new-initiative-form.component.css'],
})
export class NewInitiativeFormComponent implements OnInit {
  public title: string;
  public description: string;
  currentUser: User;
  initiativeForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private initiativeService: InitiativeService,
    public dialogRef: MatDialogRef<NewInitiativeFormComponent>
  ) {}
  ngOnInit(): void {
    this.initiativeService.getUser().subscribe((res) => {
      this.currentUser = res;
      //no error handling...
    });
  }

  onCancel() {
    this.dialogRef.close();
  }
  onSubmit() {
    console.log(this.initiativeForm.value);
    this.initiativeService.postInitiative(
      this.initiativeForm.value,
      this.currentUser.id
    );
    this.dialogRef.close('Saved!');
  }
}
