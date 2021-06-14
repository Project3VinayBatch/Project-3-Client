import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { SpecificService } from './specific.service';

describe('SpecificService', () => {
  let service: SpecificService;

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

  it('get files',()=>{
    const check=service.getFiles();
    expect(check).toBeTruthy();

  });
  it('post files',()=>{
    const check=service.postFiles();
    expect(check).toBeTruthy();    

  });
  it('get members',()=>{
    const check=service.getMembers;
    expect(check).toBeTruthy();
  });
  it('post members',()=>{
    const check=service.postMembers();
    expect(check).toBeTruthy();
  });
  it('add members',()=>{
    const check=service.addMembers;
    expect(check).toBeTruthy();

  });
  
});
