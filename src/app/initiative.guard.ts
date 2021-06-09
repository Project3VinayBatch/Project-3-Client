import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NewInitiativeFormComponent } from './new-initiative-form/new-initiative-form.component';

@Injectable({
  providedIn: 'root'
})
export class InitiativeGuard implements CanDeactivate<NewInitiativeFormComponent> {
  canDeactivate(
    component: NewInitiativeFormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    {
      return confirm("Are you sure you want to leave this page. Your work will not be saved.");
    
  }
  
}
