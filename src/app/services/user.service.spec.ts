import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { User } from '../model/user';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let userXray: User={
    "id":333,
    "username":"Xray123",
    "role": null,
    //"password":null,
    "initiatives":null,
    "files":null
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get user from api', () => {
    expect(service.getUserFromApi()).toBeTruthy();
  });

  it('should set user from api', () => {
    service.setUserFromApi();
   // expect().toBeTruthy();
  });

  it('should change user', () => {
    service.changeUser(userXray);
   // expect().toBeTruthy();
  });

  it('should set user', () => {
    expect(service.setUser()).toBeTruthy();
  });
});
