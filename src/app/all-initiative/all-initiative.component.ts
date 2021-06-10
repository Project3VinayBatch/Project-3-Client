import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { InitiativeService } from '../initiative.service';
import { Initiative } from '../model/initiative';
import { AllInitiativeDataSource, AllInitiativeItem } from './all-initiative-datasource';

@Component({
  selector: 'app-all-initiative',
  templateUrl: './all-initiative.component.html',
  styleUrls: ['./all-initiative.component.css']
})
export class AllInitiativeComponent implements AfterViewInit {

  initiatives: Initiative[];
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<AllInitiativeItem>;
  dataSource: AllInitiativeDataSource;

  displayedColumns = ['title', 'description'];

  constructor(private activatedRoute: ActivatedRoute, public router: Router, private initiativeService:InitiativeService) {
    this.dataSource = new AllInitiativeDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  openModal(){
    console.log("open modal!");
    //all this function needs to do is route to the newinitiativeComponent
    this.router.navigate(['new-initiative']);
    //add in route guard... 
    //...canDeativate to prevent leaving without changing?
  }
//   ngOnInit():void{
// //need to set initiatives
//   this.initiativeService.getInitiatives()
//   .subscribe(res => {
//     console.log(res);

//   }); 
  // console.log(this.initiatives);

  // }
}
