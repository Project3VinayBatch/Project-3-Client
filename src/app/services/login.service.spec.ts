import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { User } from '../model/user';
import { AuthService } from './auth.service';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;
  let authSrvc: AuthService;

  let userXray:User={

    "id":101,
    "username":"Xray",
    "role": null,
    "initiatives":null,
    "files":null
  };

  beforeEach(() => {
    TestBed.configureTestingModule({

      imports: [
        HttpClientModule,
      ],
      providers: [ 
        HttpClientModule
      ]

    });
    service = TestBed.inject(LoginService);
    authSrvc=TestBed.inject(AuthService);

    authSrvc.updateToken("Fake Login");
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should verify',()=>{
    service.verify(userXray);
    if(authSrvc.isLoggedIn()){
      expect()
    }else{
      expect()
      //............................
    }
  });


  it('should not verify if logged out',()=>{
    authSrvc.removeToken();
    authSrvc.logout();
    if(!authSrvc.isLoggedIn()){
      expect()
    }else{
      expect()
      //............................
    }
  });
});
