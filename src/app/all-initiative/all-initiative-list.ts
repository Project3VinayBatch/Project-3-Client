import { DataSource } from "@angular/cdk/collections";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

export interface AllInitiativeList {
    title: string;
    description: string;
    state: InitiativeState;
}

enum InitiativeState {
    COMPLETE,
    ACTIVE,
    INACTIVE,
}

var initiativeList: AllInitiativeList[] = [];

export class AllInitiativeDataSource extends DataSource<AllInitiativeList> {
    connect(): Observable<AllInitiativeList[]> {
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
    data: AllInitiativeList[] = initiativeList;
    paginator: MatPaginator | undefined;
    sort: MatSort | undefined;

    constructor() {
        super();
    }
    private getPagedData(data: AllInitiativeList[]): AllInitiativeList[] {
        if (this.paginator) {
            const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
            return data.splice(startIndex, this.paginator.pageSize);
        } else {
            return data;
        }
    }
    private getSortedData(data: AllInitiativeList[]): AllInitiativeList[] {
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
