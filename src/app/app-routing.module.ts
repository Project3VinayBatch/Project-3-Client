import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllInitiativeComponent } from './all-initiative/all-initiative.component';
import { NewInitiativeFormComponent } from './new-initiative-form/new-initiative-form.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { Test3Component } from './test3/test3.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'all-initiative', component:AllInitiativeComponent},
  {path: 'new-initiative', component:NewInitiativeFormComponent},
  {path: 'sign-in', component:SignInComponent},
  {path: 'view-initiative', component:Test3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
