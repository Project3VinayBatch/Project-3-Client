import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllInitiativeComponent } from './all-initiative/all-initiative.component';
import { NewInitiativeFormComponent } from './new-initiative-form/new-initiative-form.component';

import { SignInComponent } from './sign-in/sign-in.component';
import { Test3Component } from './test3/test3.component';
import { AuthService } from './services/auth.service';
import { UserGuardGuard } from './guard/user-guard.guard';
import { InitiativeGuard } from './guard/initiative.guard';
import { CallbackComponent } from './callback/callback.component';
import { AdminGuard } from './guard/admin.guard';


const routes: Routes = [
 
  { 
    path: 'all-initiative', 
    component: AllInitiativeComponent ,
    canActivate: [UserGuardGuard],
  },
  {
    path: 'new-initiative',
    component: NewInitiativeFormComponent,
    canDeactivate: [InitiativeGuard],
    canActivate: [AdminGuard],
  },
  { 
    path: 'sign-in', component: SignInComponent },
  {
    path: 'view-initiative',
    component: Test3Component,
    canActivate: [UserGuardGuard],
  },
  { 
    path: 'success-initiative', component: AllInitiativeComponent,
    canActivate: [UserGuardGuard], 
  },
  {
    path: 'callback',
    component: CallbackComponent,
  },
  { 
    path: '', component: SignInComponent ,
    // redirectTo: '/sign-in', pathMatch: 'full',
    canActivate: [UserGuardGuard],
  },
  {
  path: '**', component:  AllInitiativeComponent ,
  canActivate: [UserGuardGuard],
  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService],
})
export class AppRoutingModule { }
