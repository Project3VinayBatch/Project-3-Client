import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllInitiativeComponent } from './all-initiative/all-initiative.component';
import { NewInitiativeFormComponent } from './new-initiative-form/new-initiative-form.component';

const routes: Routes = [
  {path: 'all-initiative', component:AllInitiativeComponent},
  {path: 'new-initiative', component:NewInitiativeFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
