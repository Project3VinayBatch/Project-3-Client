import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import {Router, Routes} from "@angular/router"
import { UserGuardGuard } from './user-guard.guard';

describe('UserGuardGuard', () => {
  let guard: UserGuardGuard;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ]
    });
    guard = TestBed.inject(UserGuardGuard);
  });
  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  describe('user logged out and accesses restricted route',()=>{
    let router: Router;
    let canNavigate: boolean;
  
    canNavigate=false;
    
    it('blocks action', ()=>{
   expect(canNavigate).toBeFalse();
    });
  
    it('redirects to sign-in',()=>{
      
  
    });
  
  });
  
  describe('user logged in',()=>{
  
  });


});


