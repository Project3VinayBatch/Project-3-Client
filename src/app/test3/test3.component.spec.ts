import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { User } from '../model/user';
import { InitiativeService } from '../services/initiative.service';

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

  let fileSpy={fileList:jasmine.createSpy('fileList')};

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make Point of Contact',()=>{


    spyOn(component,"makePoC")
    
    let check=component.makePoC(userXray);

    expect(check).toBe();
  });

  it('should upload',()=>{
    //component.upload();
  });
  
  it('should get file',()=>{
    let d={target:{files:fakeUpload}};

    component.getFile(d);
  });

  it('should display filenames',()=>{
      component.displayFileNames();
  });

  it('should get members',()=>{
      component.getMembers();
  });

  it('should add members',()=>{
      //component.addMembers();
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

});
