import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Initiative } from '../model/initiative';
import { InitiativeDTO } from '../model/initiativeDTO';
import { InitiativeService } from '../services/initiative.service';
import { AllInitiativeDataSource } from './all-initiative-list';

@Component({
  selector: 'app-all-initiative',
  templateUrl: './all-initiative.component.html',
  styleUrls: ['./all-initiative.component.css'],
})
export class AllInitiativeComponent implements AfterViewInit {
  initiatives: Initiative[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Initiative>;
  dataSource: AllInitiativeDataSource;

  displayedColumns = ['title', 'description'];

  constructor(
    private activatedRoute: ActivatedRoute,
    public router: Router,
    private initiativeService: InitiativeService
  ) {
    this.dataSource = new AllInitiativeDataSource(initiativeService);
    initiativeService.getInitiatives().subscribe((res) => {
      console.log(res);
      this.fill(res);
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  fill(list: Initiative[]) {
    console.log(this.dataSource);
    this.dataSource.initiativeList = list;
    console.log(this.dataSource.initiativeList);
  }
  openModal() {
    console.log('open modal!');
    //all this function needs to do is route to the newinitiativeComponent
    this.router.navigate(['new-initiative']);
    //add in route guard...
    //...canDeativate to prevent leaving without changing?
  }
  ngOnInit(): void {
    //need to set initiatives
    this.initiativeService.getInitiatives().subscribe((res) => {
      this.initiatives = res;
      console.log(res);
      console.log(this.initiatives);
    });
  }

  getRecord(row: number) {
    console.log(row);
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
