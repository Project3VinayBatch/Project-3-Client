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

  it('should check login',()=>{
    const checkLogin=service.isLoggedIn();
    expect(checkLogin).toBeTruthy();
  });

  it('should remove token',()=>{
    service.removeToken();
    expect(sessionStorage.getItem('token')).toBeFalsy;
  });

  it('should logout at least delete session storage',()=>{
    service.logout();
    expect(sessionStorage.length).toBe(0);
  });


});
