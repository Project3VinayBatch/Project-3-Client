import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge, BehaviorSubject } from 'rxjs';
import { Initiative } from '../model/initiative';
import { InitiativeService } from '../services/initiative.service';

// TODO: Replace this with your own data model type
export interface AllInitiativeItem {
  title: string;
  description: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: AllInitiativeItem[] = [];

/**
 * Data source for the AllInitiative view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class AllInitiativeDataSource extends DataSource<Initiative> {
  // data: AllInitiativeItem[] = EXAMPLE_DATA;
  // paginator: MatPaginator | undefined;
  // sort: MatSort | undefined;
  private initiativesSubject = new BehaviorSubject<Initiative[]>([]);

  constructor(private initiativeService: InitiativeService) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Initiative[]> {
    return this.initiativesSubject.asObservable();
    // if (this.paginator && this.sort) {
    //   // Combine everything that affects the rendered data into one update
    //   // stream for the data-table to consume.
    //   return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
    //     .pipe(map(() => {
    //       return this.getPagedData(this.getSortedData([...this.data ]));
    //     }));
    // } else {
    //   throw Error('Please set the paginator and sort on the data source before connecting.');
    // }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {
    this.initiativesSubject.complete();
  }

  loadInitiatives() {
    this.initiativeService
      .getInitiatives()
      .subscribe((initiatives) => this.initiativesSubject.next(initiatives));
  }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  // private getPagedData(data: AllInitiativeItem[]): AllInitiativeItem[] {
  //   if (this.paginator) {
  //     const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
  //     return data.splice(startIndex, this.paginator.pageSize);
  //   } else {
  //     return data;
  //   }
  // }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  // private getSortedData(data: AllInitiativeItem[]): AllInitiativeItem[] {
  //   if (!this.sort || !this.sort.active || this.sort.direction === '') {
  //     return data;
  //   }

  //   return data.sort((a, b) => {
  //     const isAsc = this.sort?.direction === 'asc';
  //     switch (this.sort?.active) {
  //       case 'title': return compare(a.title, b.title, isAsc);
  //       case 'description': return compare(+a.description, +b.description, isAsc);
  //       default: return 0;
  //     }
  //   });
  // }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
// function compare(a: string | number, b: string | number, isAsc: boolean): number {
//   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
// }
