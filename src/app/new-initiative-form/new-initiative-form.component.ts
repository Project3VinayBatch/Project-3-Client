import { Component } from '@angular/core';
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
export class NewInitiativeFormComponent {
  public title: string;
  public description: string;
  user: User;
  initiativeForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private initiativeService: InitiativeService,
    public dialogRef: MatDialogRef<NewInitiativeFormComponent>
  ) {
    this.initiativeService.getUser().subscribe((res) => {
      this.user = res;
    });
  }

  onCancel() {
    this.dialogRef.close();
  }
  onSubmit() {
    this.initiativeService.postInitiative(
      this.initiativeForm.value,
      this.user.id
    );
    this.dialogRef.close('Saved!');
  }
}
