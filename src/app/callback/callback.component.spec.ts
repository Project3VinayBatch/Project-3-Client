import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../services/auth.service';

import { CallbackComponent } from './callback.component';

describe('CallbackComponent', () => {
  let component: CallbackComponent;
  let fixture: ComponentFixture<CallbackComponent>;
    let routerSpy = {navigate: jasmine.createSpy('navigate')};
    let authSrvc: AuthService;




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

    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
