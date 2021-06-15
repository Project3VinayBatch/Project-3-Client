import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';


//PURPOSE OF THIS IS TO PREVENT USERS FROM ACCESSING ROUTES UNTIL THEY ARE LOGGED IN
//will want an Admin guard as well... but may not need it for this sprint


@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate {
  constructor(private auth:AuthService, private router:Router) {}
   
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.auth.isLoggedIn()){
       return true;
    }
     else{
      window.alert('You don\'t have permission to view this page'); //temp
      this.router.navigate(['sign-in']);
       return false;
     }
  }
  
}
