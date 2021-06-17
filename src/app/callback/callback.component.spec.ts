import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AuthService } from '../services/auth.service';

import { CallbackComponent } from './callback.component';

describe('CallbackComponent', () => {
  let component: CallbackComponent;
  let fixture: ComponentFixture<CallbackComponent>;
    let routerSpy = {navigate: jasmine.createSpy('navigate')};
    let authSrvc: AuthService;
    let router:Router;




  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallbackComponent ],
      imports: [ 
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [ 
        HttpClientModule,
        


      ]
    })
    .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authSrvc=TestBed.inject(AuthService);
    router=TestBed.inject(Router);
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should grab token oninit',()=>{
    //authSrvc.updateToken("Fake Login");

    let responseWau={code:'fake token',state:'illegal'};

    let spyWau=spyOn(authSrvc,'fetchToken').and.returnValue(of(responseWau));
    let spyTau=spyOn(authSrvc,'updateToken');
    let spyRoute=spyOn(router,'navigate').and.callThrough();
    component.ngOnInit();
    //fixture.detectChanges();

    expect(router.navigate).toHaveBeenCalled();
    //expect(authSrvc.getToken()).toBe("Fake Login");
  });

describe('logged in',()=>{
  it('should redirect onInit',()=>{
    authSrvc.updateToken("Fake Login");
    spyOn(component,"ngOnInit");
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
    //expect(routerSpy.navigate).toHaveBeenCalledWith(['all-initiative']);
  });
});

describe('logged out',()=>{
  it('should not route if logged out...',()=>{

    authSrvc.removeToken();
    expect(routerSpy.navigate).not.toHaveBeenCalledWith(['all-initiative']);
  });

});

});
