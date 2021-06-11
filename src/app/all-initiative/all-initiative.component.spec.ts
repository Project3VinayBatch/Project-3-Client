import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterTestingModule } from "@angular/router/testing";

import { AllInitiativeComponent } from './all-initiative.component';
import { HttpClientModule } from '@angular/common/http';

describe('AllInitiativeComponent', () => {
  let component: AllInitiativeComponent;
  let fixture: ComponentFixture<AllInitiativeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllInitiativeComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        RouterTestingModule,
        HttpClientModule
        
      ],
      providers: [ 
        HttpClientModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllInitiativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
