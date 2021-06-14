import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Initiative } from '../model/initiative';
import { NewInitiativeFormComponent } from '../new-initiative-form/new-initiative-form.component';
import { InitiativeService } from '../services/initiative.service';
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

  constructor(
    public router: Router,
    private initiativeService: InitiativeService,
    public addInitiativeDialog: MatDialog
  ) {
    this.dataSource = new AllInitiativeDataSource(initiativeService);
  }
  ngOnInit() {
    this.dataSource = new AllInitiativeDataSource(this.initiativeService);
    this.dataSource.loadInitiatives();
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

  getRecord(row: Initiative) {
    this.initiativeService.saveCurrentInitiative(row);
    this.router.navigate(['view-initiative']);
    console.log(row);
  }
}