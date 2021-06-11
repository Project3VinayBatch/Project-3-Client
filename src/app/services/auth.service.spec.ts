import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';


describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login',()=>{
    const login=service.isLoggedIn();
    expect(login).toBeTrue();

  });

  it('should save user id',()=>{

    const saveUser= service.saveUserIdToStorage();
    expect(saveUser).toBeNull;
  });

  it('should get user id',()=>{

    const getUser= service.getUserIdFromStorage();
    expect(getUser).toBeNull;
  });

});
