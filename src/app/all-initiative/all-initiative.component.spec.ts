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
import { Role, User } from '../model/user';
import { AuthService } from '../services/auth.service';
import { AllInitiativeDataSource } from './all-initiative-datasource';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { NewInitiativeFormComponent } from '../new-initiative-form/new-initiative-form.component';
import { NEVER, never, of } from 'rxjs';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';


describe('AllInitiativeComponent', () => {
  let component: AllInitiativeComponent;
  let fixture: ComponentFixture<AllInitiativeComponent>;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};
  let authSrvc:AuthService;
  let userSrvc:UserService;

  let dialogMock={open: jasmine.createSpy('open')};
  //let userSpy={getUserFromApi: jasmine.createSpy('getUserFromApi')};
 
  //let AllMock={getState: jasmine.createSpy('getState')};
  let fakeMembers: User[]=[{
    "id":333,
    "username":"Dog123",
    "role": null,
    //"password":null,
    "initiatives":null,
    "files":null
  }];

  let dummyData: Initiative[]=[{
    "createdBy": 333,
    "description": "This is not a real initiative. This does not exist",
    "members": fakeMembers,
    "pointOfContact": 777,
    "state": 0,
    "title": "Test One",
    "initiativeId": 12,
    "files": null,
  }];

  let userXray:User={
    "id":6,
    "username":"Xray",
    "role": null,
    "initiatives":null,
    "files":null
  };
  let userYankee:User={
    "id":7,
    "username":"Yankee",
    "role": 0,
    "initiatives":null,
    "files":null
  };

  let userZulu:User={
    "id":7,
    "username":"Zulu",
    "role": 1,
    "initiatives":null,
    "files":null
  };

  let dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.height = '90vh';
  dialogConfig.width = '60vw';

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllInitiativeComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        HttpClientModule,
        
      ],
      providers: [ 
        HttpClientModule,     

        { provide: Router, useValue: routerSpy },
        {provide: ActivatedRoute, useValue: routerSpy},
        {provide: MatDialog, useValue: dialogMock},
        //{provide: MatDialogRef, useValue: dialogMock},
        //{provide: MatDialogRef,useValue:dialogRefSpy}
        //{provide: UserService,useValue: userSpy },



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

  it('should open add initiative dialogue',()=>{
    dialogMock.open.and
    .returnValue(
      {
        afterClosed: () => of(true)
      }  as MatDialogRef<typeof component> );;
 
    component.openAddInitiativeDialog();
    expect(dialogMock.open).toHaveBeenCalled();
    

  });

  it('should get record',()=>{
    
    component.getRecord(dummyData[0]);
  
    expect(component.getRecord(dummyData[0])).toBeFalsy();

  });

  it('should detect user role onInit: admin',()=>{    

    userXray.role=0;
    userSrvc=TestBed.inject(UserService);
    let response=userXray;

    let spyTau=spyOn(userSrvc,'getUserFromApi').and.returnValue(of(response));
    component.ngOnInit();
    fixture.detectChanges();
    expect(response.role).toBe(0);
    
  });

  it('should detect user role onInit: user',()=>{    

    userSrvc=TestBed.inject(UserService);
    let response=userZulu;

    let spyTau=spyOn(userSrvc,'getUserFromApi').and.returnValue(of(response));
    component.ngOnInit();
    fixture.detectChanges();
    expect(response.role).toBe(1);

    
  });

  it('should detect user role onInit: never',()=>{    


    /* Those if statements will never execute..... */
    /*lines 46-51 */
    userSrvc=TestBed.inject(UserService);
    let response=userZulu;
    response.role=Role.USER;
    let spyTau=spyOn(userSrvc,'getUserFromApi').and.returnValue(of(response));
    component.ngOnInit();
    fixture.detectChanges();
    expect(response.role).toBe(1);

    
  });



});

