import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterTestingModule } from "@angular/router/testing";

import { AllInitiativeComponent } from './all-initiative.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Initiative } from '../model/initiative';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';


describe('AllInitiativeComponent', () => {
  let component: AllInitiativeComponent;
  let fixture: ComponentFixture<AllInitiativeComponent>;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};
  let authSrvc:AuthService;

  
  let fakeMembers: User[]=[{
    "id":333,
    "username":"Dog123",
    "role":"Admin",
    "password":null,
    "initiatives":null,
    "files":null
  }];

  let dummyData: Initiative[]=[{
    "createdBy": 333,
    "description": "This is not a real initiative. This does not exist",
    "members": fakeMembers,
    "pointOfContactId": 777,
    "state": 0,
    "title": "Test One"
  }];



  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllInitiativeComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        HttpClientModule
        
      ],
      providers: [ 
        HttpClientModule,         
        
        { provide: Router, useValue: routerSpy },
        {provide: ActivatedRoute, useValue: routerSpy}

      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllInitiativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authSrvc=TestBed.inject(AuthService);

    authSrvc.updateToken("Fake Login");


  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should openModal',()=>{
    component.openModal();
  
    expect(routerSpy.navigate).toHaveBeenCalledWith(['new-initiative']);

  });

  it('should get record',()=>{
    component.getRecord(0);
  
    expect(component.getRecord(0)).toBeFalsy();

  });

  it('should fill intiative list',()=>{
    
    component.fill(dummyData);   
    expect(component.dataSource.initiativeList).toBe(dummyData);

  });



});
