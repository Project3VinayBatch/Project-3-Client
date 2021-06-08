import { Injectable } from '@angular/core';


//PURPOSE OF THIS IS TO PREVENT USERS FROM ACCESSING ROUTES UNTIL THEY ARE LOGGED IN
//will want an Admin guard as well... but may not need it for this sprint


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(): boolean {
    console.log("auth service returning true - needs implementation");
    return true;
    // return false;
  }

}
