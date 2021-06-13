import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Initiative } from '../model/initiative';
import { User, Role } from '../model/user';
import { InitiativeService } from '../services/initiative.service';
import { AllInitiativeDataSource } from './all-initiative-datasource';

@Component({
  selector: 'app-all-initiative',
  templateUrl: './all-initiative.component.html',
  styleUrls: ['./all-initiative.component.css'],
})
export class AllInitiativeComponent implements OnInit {
  initiatives: Initiative[];
  stateController: FormControl;
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;
  // @ViewChild(MatTable) table!: MatTable<Initiative>;
  dataSource: AllInitiativeDataSource;

  displayedColumns: string[] = ['title', 'description', 'state'];

  isAdmin: boolean = false;
  currentUser: User; //contains user info, specifically role, which we need

  constructor(
    private activatedRoute: ActivatedRoute,
    public router: Router,
    private initiativeService: InitiativeService
  ) {
    this.dataSource = new AllInitiativeDataSource(initiativeService);
  }
  ngOnInit() {
    this.initiativeService.getUser()
      .subscribe(res => {
        if (res.role == Role.ADMIN) {// do not delete this, will not catch admin without
          this.isAdmin = true;
          console.log("admin!")
        }
        else if (res.role == Role.USER) {
          this.isAdmin =false;
          console.log("user!")
        }
        else if (res.role == 0) {
          this.isAdmin = true;
          console.log("0!")
        }
        else if (res.role == 1) {
          this.isAdmin = false;
          console.log("1!")
        }
        else if (res.role == "ADMIN") { // do not delete this, will not catch admin without
          this.isAdmin = true;
          console.log("ADMIN!")
        }
        else if (res.role == "USER") {
          this.isAdmin = false;
          console.log("User!")
        }
            this.currentUser = res;

        //no error handling...
      });
    this.dataSource = new AllInitiativeDataSource(this.initiativeService);
    this.dataSource.loadInitiatives();
    // console.log(this.dataSource.data);
    // this.initiativeService.getInitiatives().subscribe(
    //   data => {
    //     console.log(data);
    //     this.dataSource.data = data;
    //   }
    // );
    // this.initiativeService.getUser().subscribe(
    //   res => {
    //     console.log(res);
    //     sessionStorage.setItem("userid",res.id.toString());
    //     sessionStorage.setItem("username",res.username.toString());
    //     sessionStorage.setItem("role",res.role.toString());
    // });
    // console.log(this.dataSource.data);
    // this.dataSource.getSortedData(this.dataSource.data);
  }
  // ngAfterViewInit(): void {
  //   this.dataSource.sort = this.sort;
  //   this.dataSource.paginator = this.paginator;
  //   this.table.dataSource = this.dataSource;
  //   console.log("location5");
  // }
  // fill(list: Initiative[]) {
  //   console.log(this.dataSource);
  //   this.dataSource.initiativeList = list;
  //   console.log(this.dataSource);
  // }
  openModal() {
    console.log('open modal!');
    this.router.navigate(['new-initiative']);
    //add in route guard...
    //...canDeativate to prevent leaving without changing?
  }

  button() {
    console.log("hit");
  }
  getRecord(row: Initiative) {
    //save current initiative into initiativeService
    this.initiativeService.saveCurrentInitiative(row);
    this.router.navigate(['view-initiative']);
    // , { state: {id: row.initiativeId, }});
    console.log(row);
  }
}
