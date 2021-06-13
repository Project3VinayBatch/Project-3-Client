import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { NewInitiativeFormComponent } from '../new-initiative-form/new-initiative-form.component';
import { AuthService } from '../services/auth.service';

import { InitiativeGuard } from './initiative.guard';
import { UserGuardGuard } from './user-guard.guard';

describe('InitiativeGuard', () => {
  let guard: InitiativeGuard;
  let authSrvc: AuthService;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};

  let fakeComponent:NewInitiativeFormComponent;
  let fakeCurrentRoute:ActivatedRouteSnapshot;
  let fakeCurrentState:RouterStateSnapshot;
  let fakeNextState:RouterStateSnapshot;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ 
        HttpClientModule,
        
      ],
      providers: [ 
        HttpClientModule,
        { provide: Router, useValue: routerSpy },
      ]
    });
    guard = TestBed.inject(InitiativeGuard);
    authSrvc=TestBed.inject(AuthService);
    
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  describe('logged out',()=>{
  it('should guard if logged out',()=>{
    authSrvc.removeToken();

    fakeNextState={url:'',root:fakeCurrentRoute};
    routerSpy.navigate('all-initiatives')
    expect(guard.canDeactivate(fakeComponent,fakeCurrentRoute,fakeCurrentState,fakeNextState)).toBeTrue();
  });
});
/*
  Testing code logic "if ...something" :( please not code like this.....
*/
describe('logged in',()=>{
  it('should not guard if logged in',()=>{
    authSrvc.updateToken("Fake Login");
    fakeNextState={url:'/success-initiative',root:fakeCurrentRoute};
    let c=guard.canDeactivate(fakeComponent,fakeCurrentRoute,fakeCurrentState,fakeNextState);

    //routerSpy.navigate('all-initiatives')

    expect(c).toBeTrue();
  });
});

});
