import { Injectable } from '@angular/core';


//PURPOSE OF THIS IS TO PREVENT USERS FROM ACCESSING ROUTES UNTIL THEY ARE LOGGED IN
//will want an Admin guard as well... but may not need it for this sprint


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

//main purpose is to return true or false depending on whether JWT is valid

  isLoggedIn(): boolean {
    console.log("auth service returning true - needs implementation");
    //check to see if there is a jwt and return whether user is logged in
    return true;
    // return false;
  }

//getInfo from local storage??
  saveUserIdToStorage(){
    //this needs to save users id to localstorage...
    //...maybe change to saveUserInfo...tolocalstorage


  }
  getUserIdFromStorage(){

//?
  }
  //need a get from token?

}
