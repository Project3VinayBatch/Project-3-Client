import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Initiative } from '../model/initiative';
import { InitiativeDTO } from '../model/initiativeDTO';
import { User } from '../model/user';

import { SpecificService } from './specific.service';

describe('SpecificService', () => {
  let service: SpecificService;
  let userXray:User={
    "id":333,
    "username":"Xray",
    "role": null,
    "initiatives":null,
    "files":null
  };
  let iDTO:InitiativeDTO;
    /*{
      "createdBy":null,
      "description":"This is filler text",
      "members":null,
      "pointOfContact":22,
      "state":null,
      "title":"This is not real"
    };*/

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ]

    });
    service = TestBed.inject(SpecificService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get files',()=>{
    const check=service.getFiles();
    expect(check).toBeTruthy();

  });
  it('should post files',()=>{
    const check=service.postFiles();
    expect(check).toBeTruthy();    

  });
  it('should get members',()=>{
    const check=service.getMembers(0);
    expect(check).toBeTruthy();
  });
  it('should post members',()=>{
    const check=service.postMembers();
    expect(check).toBeTruthy();
  });
  it('should add members',()=>{
   
    const check=service.addMembers(userXray.username);
    expect(check).toBeTruthy();

  });
  it('should set poc',()=>{
    const check=service.setPoC(iDTO);
    expect(check).toBeTruthy();

  })
});
