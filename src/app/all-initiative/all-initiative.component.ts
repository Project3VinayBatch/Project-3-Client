import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
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
  initiatives: Initiative[];

  dataSource: AllInitiativeDataSource;

  displayedColumns: string[] = ['title', 'description'];

    isAdmin:boolean;
  currentUser: User;
  subscription: Subscription;
  
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

    //WIP
    //seems to work
    // this.currentUser = 
    this.userService.getUserFromApi().subscribe(
      res =>
      {
        console.log(res);
        this.currentUser = res;
        console.log(this.currentUser);
        if (res.role == Role.ADMIN) {// do not delete this, will not catch admin without
          this.isAdmin = true;
          console.log("option1");
        }
        else if (res.role == Role.USER) {
          this.isAdmin =false;
          console.log("option2");
        }
        else if (res.role == "ADMIN") { // do not delete this, will not catch admin without
          this.isAdmin = true;
          console.log("option5");
        }
        else if (res.role == "USER") {
          this.isAdmin = false;
          console.log("option6");
        }
        
        if(this.isAdmin==true){
          return true;
       }
        //if admin, set isAmin = true;
      }
      

      //do not refresh in oninit...
    );
    
    //...
    //not working
    // this.subscription = this.userService.currentUser //this is an observable
    // .subscribe(user=> {this.currentUser = user;
    //   console.log(user);
    // })
  }

  openAddInitiativeDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.height = '55vh';
    dialogConfig.minHeight = '800px';
    dialogConfig.width = '55vw';

    const dialogRef = this.addInitiativeDialog.open(
      NewInitiativeFormComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe((val) => {
      console.log(val);
      dialogConfig.data = null;
      this.dataSource.loadInitiatives();
    });
  }

  getRecord(row: Initiative) { //sends data to the specific initiative component
    this.initiativeService.saveCurrentInitiative(row);
    this.router.navigate(['view-initiative']);
    console.log(row);
  }
}