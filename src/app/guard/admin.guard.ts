import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from '../model/user';
import { AuthService } from '../services/auth.service';
import { InitiativeService } from '../services/initiative.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private auth:AuthService, private router:Router, private initiativeService: InitiativeService) {}
  isAdmin = false;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.initiativeService.getUser()
      .subscribe(res => {
        console.log("admin guard");
        if (res.role == Role.ADMIN) {// do not delete this, will not catch admin without
          this.isAdmin = true;
          console.log("option1");
        }
        else if (res.role == Role.USER) {
          this.isAdmin =false;
          console.log("option2");
        }

        else if (res.role == "ADMIN") { // do not delete this, will not catch admin without
          this.isAdmin = true;
          console.log("option5");
        }
        else if (res.role == "USER") {
          this.isAdmin = false;
          console.log("option6");
        }
        
        if(this.isAdmin==true){
          return true;
       }
        else{
         window.alert('You don\'t have permission to view this page'); //temp
         this.router.navigate(['all-initiative']);
          return false;
          //should probably reroute to login
        }
      },
      (err)=>{
        this.isAdmin = false;
        //no error handling...
      
         window.alert('You don\'t have permission to view this page'); //temp
         this.router.navigate(['all-initiative']);
          return false;
          //should probably reroute to login
        
      }
      
      );
      if(this.isAdmin==true){
        return true;
     }
      else{
       window.alert('You don\'t have permission to view this page'); //temp
       this.router.navigate(['all-initiative']);
        return false;
        //should probably reroute to login
      }
    //async problem
  }
  
}
