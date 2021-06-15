import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Initiative } from '../model/initiative';
import { Role, User } from '../model/user';
import { NewInitiativeFormComponent } from '../new-initiative-form/new-initiative-form.component';
import { InitiativeService } from '../services/initiative.service';
import { UserService } from '../services/user.service';
import { AllInitiativeDataSource } from './all-initiative-datasource';

@Component({
  selector: 'app-all-initiative',
  templateUrl: './all-initiative.component.html',
  styleUrls: ['./all-initiative.component.css'],
})
export class AllInitiativeComponent implements OnInit {
  //variables
  initiatives: Initiative[];
  dataSource: AllInitiativeDataSource;
  displayedColumns: string[] = ['title', 'description', 'state'];
  isAdmin: boolean;
  currentUser: User;
  subscription: Subscription;
  //constructor
  constructor(
    public router: Router,
    private initiativeService: InitiativeService,
    public addInitiativeDialog: MatDialog,
    private userService: UserService,
  ) {
    this.dataSource = new AllInitiativeDataSource(initiativeService);
  }
  ngOnInit() {
    this.dataSource = new AllInitiativeDataSource(this.initiativeService);
    this.dataSource.loadInitiatives();
    this.userService.getUserFromApi().subscribe( //sets isAdmin true is user is an admin
      res => {
        this.currentUser = res;
        if (res.role == Role.ADMIN) {// do not delete this, will not catch admin without
          this.isAdmin = true;
        }
        else if (res.role == Role.USER) {// this needs to be here 
          this.isAdmin = false;
        }
        else if (res.role == "ADMIN") { // do not delete this, will not catch admin without
          this.isAdmin = true;
        }
        else if (res.role == "USER") {
          this.isAdmin = false;
        }
        if (this.isAdmin == true) {
          return true;  //sets isAdmin true is user is an admin
        }
      }
    );
  }

  openAddInitiativeDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.height = '90vh';
    dialogConfig.width = '60vw';

    const dialogRef = this.addInitiativeDialog.open(
      NewInitiativeFormComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe((val) => {
      dialogConfig.data = null;
      this.dataSource.loadInitiatives();
    });
  }
  getRecord(row: Initiative) { //sends data to the specific initiative component
    this.initiativeService.saveCurrentInitiative(row);
    this.router.navigate(['view-initiative']);
  }
}