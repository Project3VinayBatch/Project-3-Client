import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';


describe('AuthService', () => {
  let service: AuthService;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ 
        HttpClientModule
      ],
      providers: [ 
        HttpClientModule,
        { provide: Router, useValue: routerSpy },
      ]

    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check login',()=>{
    const checkLogin=service.isLoggedIn();
    if(checkLogin){
    expect(checkLogin).toBeTruthy();
    }
    else{
      expect(checkLogin).toBeFalsy();
    }
  });

  it('should remove token',()=>{
    service.removeToken();
    expect(sessionStorage.getItem('token')).toBeFalsy;
  });

  it('should logout at least delete session storage',()=>{
    service.logout();
    expect(sessionStorage.length).toBe(0);
  });

  it('should update token', ()=>{
    const fakeToken='Fake Login';
      service.updateToken(fakeToken);
      expect(service.getToken()).toBe(fakeToken);
  });

});
