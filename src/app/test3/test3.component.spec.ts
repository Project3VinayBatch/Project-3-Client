import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Initiative } from '../model/initiative';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';
import { InitiativeService } from '../services/initiative.service';
import { SpecificService } from '../services/specific.service';
import { UserService } from '../services/user.service';

import { Test3Component } from './test3.component';

describe('Test3Component', () => {
  let component: Test3Component;
  let fixture: ComponentFixture<Test3Component>;
  let userXray:User={

    "id":101,
    "username":"Xray",
    "role": null,
    "initiatives":null,
    "files":null
  };

  let fileYankee:File={
    "name":"test.txt",
    "lastModified":3,
    "size":3,
    "type":"jpg",
    "arrayBuffer":null,
    "slice":null,
    "stream":null,
    "text":null
  }

  let fakeMembers: User[]=[{
    "id":333,
    "username":"Dog123",
    "role": null,
    //"password":null,
    "initiatives":null,
    "files":null
  },userXray];

  let nullMembers: User[]=[];

  let dummyData: Initiative[]=[{
    "createdBy": 333,
    "description": "This is not a real initiative. This does not exist",
    "members": fakeMembers,
    "pointOfContact": 777,
    "state": 0,
    "title": "Test One",
    "initiativeId": 12,
    "files": null,
  },
  {
    "createdBy": 333,
    "description": "This is not a real initiative. This does not exist",
    "members":nullMembers,
    "pointOfContact": 777,
    "state": 0,
    "title": "Test One",
    "initiativeId": 12,
    "files": null,
  }
];
userXray.initiatives=dummyData;
let fakeMembers2: User[]=[{
  "id":333,
  "username":"Dog123",
  "role": null,
  //"password":null,
  "initiatives":dummyData,
  "files":null
},userXray];

  let fileSpy={fileList:jasmine.createSpy('fileList')};

  let initSrvc: InitiativeService;
  let sService: SpecificService;
  let AuthSrvc: AuthService;
  let userSrvc: UserService;

  let fakeUpload={
    length:2,
    item:(index: 0)=>fileYankee,
  };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test3Component ],
      imports: [ 
        HttpClientModule
      ],
      providers: [ 
        HttpClientModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Test3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();

    initSrvc=TestBed.inject(InitiativeService);
    sService=TestBed.inject(SpecificService);
    AuthSrvc=TestBed.inject(AuthService);
    userSrvc=TestBed.inject(UserService);

    AuthSrvc.updateToken('Fake Login');
    component.currentInitiative=dummyData[0];
    component.currentInitiative.members=fakeMembers;
    component.currentInitiative.pointOfContact=userXray.id;
    component.currentUser=userXray;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make Point of Contact',()=>{

    let responseTau=dummyData[0];
    let spyTau=spyOn(sService,'setPoC').and.returnValue(of(responseTau));
    component.makePoC(userXray);
    //spyOn(component,"makePoC")
    
    //let check=component.makePoC(userXray);

    //expect(check).toBe();
  });

  it('should upload',()=>{
    component.currentUser=userXray;
    let spyTau=spyOn(initSrvc,'postFile').and.returnValue(of());
    component.upload();
  });
  
  it('should get file',()=>{
    let d={target:{files:fakeUpload}};

    component.getFile(d);
  });

  it('should display filenames',()=>{
      component.displayFileNames();
  });

  it('should get members',()=>{
    let responseTau=dummyData[0];
    component.currentInitiative.initiativeId=dummyData[0].initiativeId;
    let spyTau=spyOn(sService,'getMembers').and.returnValue(of(responseTau));
      component.getMembers();
  });

  it('should add members: current user',()=>{
    let spyTau=spyOn(sService,'addMembers').and.returnValue(of(null));
      component.addMembers();
  });

  it('should add members: other user',()=>{
    let spyTau=spyOn(sService,'addMembers').and.returnValue(of(fakeMembers[0]));
      component.addMembers();
  });

  it('should get file extension',()=>{
    let c=component.getFileExtension(fileYankee.name);
    expect(c).toBe('fa fa-file-text')
    //doesn't get file extension.... but it is logic to get an icon based on the file extension..............
});

it('should not get file extension',()=>{
  let c=component.getFileExtension('filet.dog');
  expect(c).toBe('');//returns '' if not accepted file extension
});

it('should onInit: member USER',()=>{

  
  let responseTau=dummyData[0];

  //let spyWau=spyOn(component,'makePoC');
  component.makePoC(userXray);
  //expect().toHaveBeenCalledWith(userXray);

  let spyTau=spyOn(sService,'getMembers').and.returnValue(of(responseTau));
  userXray.role=0;
  let spyWau=spyOn(userSrvc,'getUserFromApi').and.returnValue(of(userXray));
  component.ngOnInit();

});

it('should onInit: member ADMIN',()=>{

  
  let responseTau=dummyData[0];

  //let spyWau=spyOn(component,'makePoC');
  component.makePoC(userXray);
  //expect().toHaveBeenCalledWith(userXray);

  let spyTau=spyOn(sService,'getMembers').and.returnValue(of(responseTau));
  userXray.role=1;
  let spyWau=spyOn(userSrvc,'getUserFromApi').and.returnValue(of(userXray));

  let spyFau=spyOn(initSrvc,'getUser').and.returnValue(of(userXray));
  
  component.ngOnInit();

});

it('should onInit 2: no members',()=>{

  let responseTau=dummyData[1];

  let spyTau=spyOn(sService,'getMembers').and.returnValue(of(responseTau));
  component.ngOnInit();

});

});
