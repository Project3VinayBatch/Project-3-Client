import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllInitiativeComponent } from './all-initiative/all-initiative.component';
import { NewInitiativeFormComponent } from './new-initiative-form/new-initiative-form.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { Test3Component } from './test3/test3.component';
import {AuthService} from './auth.service';
import { UserGuardGuard } from './user-guard.guard';
import { InitiativeGuard } from './initiative.guard';


const routes: Routes = [
  {path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  {path: 'all-initiative', component:AllInitiativeComponent},
  {path: 'new-initiative', component:NewInitiativeFormComponent, canDeactivate: [InitiativeGuard]},
  {path: 'sign-in', component:SignInComponent},
  {path: 'view-initiative', component:Test3Component, canActivate: [UserGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AppRoutingModule { }
