import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllInitiativeComponent } from './all-initiative/all-initiative.component';

import { SignInComponent } from './sign-in/sign-in.component';
import { Test3Component } from './test3/test3.component';
import { AuthService } from './services/auth.service';
import { UserGuardGuard } from './guard/user-guard.guard';
import { InitiativeGuard } from './guard/initiative.guard';
import { CallbackComponent } from './callback/callback.component';


const routes: Routes = [
 
  { 
    path: 'all-initiative', 
    component: AllInitiativeComponent ,
    canActivate: [UserGuardGuard],
  },
  { 
    path: 'sign-in', 
    component: SignInComponent 
  },
  {
    path: 'view-initiative',
    component: Test3Component,
    canActivate: [UserGuardGuard],
  },
  {
    path: 'callback',
    redirectTo:'/all-initiatives',
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
