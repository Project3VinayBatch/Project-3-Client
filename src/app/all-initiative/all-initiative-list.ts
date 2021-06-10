import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge, BehaviorSubject } from 'rxjs';
import { InitiativeService } from "../services/initiative.service";
import { Initiative } from "../model/Initiative";

export class AllInitiativeDataSource extends DataSource<Initiative> {
    //gorm testing something fro mhere down to .................
    //I think we want to simply subscrip to the initiativeList and have th all-initiative component call api...


    // private testingInitiatives = new BehaviorSubject<Initiative[]>([]);

    // private loadingSubject = new BehaviorSubject<boolean>(false);
    // public loading$ = this.loadingSubject.asObservable();
    // connect(collectionViewer: CollectionViewer): Observable<Initiative[]> {
    //     return this.testingInitiatives.asObservable();
    // }

    // disconnect(collectionViewer: CollectionViewer): void {
    //     this.testingInitiatives.complete();
    //     this.testingInitiatives.complete();
    // }


    //old, end testing (uncomment comments below).....................
    initiativeList: Initiative[] = [{
        "createdBy": 1,
"description": "He who shail go",
"members": null,
"pointOfContactId": 1,
"state": 0,
"title": "God"
    }
    ];
    connect(): Observable<Initiative[]> {
        if (this.paginator && this.sort) {
            // Combine everything that affects the rendered data into one update
            // stream for the data-table to consume.
            return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
                .pipe(map(() => {
                    return this.getPagedData(this.getSortedData([...this.data]));
                }));
        } else {
            throw Error('Please set the paginator and sort on the data source before connecting.');
        }
    }
    disconnect(): void { }
    data: Initiative[] = this.initiativeList; //thi needs to be a subscription...
    paginator: MatPaginator | undefined;
    sort: MatSort | undefined;

    constructor(private initiativeService: InitiativeService) {
        super();
        initiativeService.getInitiatives().subscribe(res => {
            
            console.log(res);
        });
        console.log(this.initiativeList);
    }
    private getPagedData(data: Initiative[]): Initiative[] {
        if (this.paginator) {
            const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
            return data.splice(startIndex, this.paginator.pageSize);
        } else {
            return data;
        }
    }
    private getSortedData(data: Initiative[]): Initiative[] {
        if (!this.sort || !this.sort.active || this.sort.direction === '') {
            return data;
        }

        return data.sort((a, b) => {
            const isAsc = this.sort?.direction === 'asc';
            switch (this.sort?.active) {
                case 'title': return compare(a.title, b.title, isAsc);
                case 'description': return compare(+a.description, +b.description, isAsc);
                default: return 0;
            }
        });
    }
}
function compare(a: string | number, b: string | number, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
