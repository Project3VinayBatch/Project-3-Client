import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, Routes} from "@angular/router"
import { UserGuardGuard } from './user-guard.guard';
import { AuthService } from '../services/auth.service';

describe('UserGuardGuard', () => {
  let guard: UserGuardGuard;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};
  let routeFake: ActivatedRouteSnapshot;
  let stateFake: RouterStateSnapshot;
  let authSrvc:AuthService;

  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [ 
        HttpClientModule,
        { provide: Router, useValue: routerSpy }
      ]
    });
    guard = TestBed.inject(UserGuardGuard);
    authSrvc=TestBed.inject(AuthService);
    
  });
  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  describe('user logged out and accesses restricted route',()=>{
    let canNavigate: boolean;
  
    canNavigate=false;
    it('should be logged out',()=>{
      authSrvc.removeToken();
      expect(authSrvc.getToken()).toBe(null);

    });
    it('blocks action', ()=>{
   expect(canNavigate).toBeFalse();
    });
  
    it('redirects to sign-in',()=>{
      authSrvc.removeToken();

      guard.canActivate(routeFake,stateFake);
      
      if(!authSrvc.isLoggedIn()){
      expect(routerSpy.navigate).toHaveBeenCalledWith(['sign-in']);
      }
      else{
        expect(routerSpy.navigate).not.toHaveBeenCalledWith(['sign-in']);
      }
  
    });
  
  });
  
  describe('user log in',()=>{

    it('should login',()=>{
    //authSrvc.login();
    authSrvc.updateToken("Fake Login");
    authSrvc.isLoggedIn();

    if(authSrvc.isLoggedIn()){
    //expect(routerSpy.navigate).not.toHaveBeenCalledWith(['sign-in']);
    expect(authSrvc.isLoggedIn()).toBeTruthy();

    }
    else{
      expect(routerSpy.navigate).toHaveBeenCalledWith(['sign-in']);
    }
  
    });

    it('should be logged in',()=>{
      authSrvc.updateToken("Fake Login");
      expect(authSrvc.isLoggedIn()).toBeTruthy();
    });

    it('should be able to activate',()=>{
      authSrvc.updateToken("Fake Login");
    authSrvc.isLoggedIn();
      expect(guard.canActivate(routeFake,stateFake)).toBeTruthy();
    })

  });


});


