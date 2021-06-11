import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NewInitiativeFormComponent } from '../new-initiative-form/new-initiative-form.component';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class InitiativeGuard implements CanDeactivate<NewInitiativeFormComponent> {
  
  constructor(private authService:AuthService,){}
  canDeactivate(
    component: NewInitiativeFormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    {

      

      // if authService returns false... return true so we can leave page
      if (!(this.authService.isLoggedIn())){
        return true; //exits form if user not logged in
        //probably want to redirect this, but should that occur here?
      }

      //if...something, return true, else return confirm
      console.log(nextState.url); //maybe...
      if (nextState.url=='/success-initiative'){
        return true;
      }
      else{
        return confirm("Are you sure you want to leave this page. Your work will not be saved.");
    
      }
      
  }
  
}
