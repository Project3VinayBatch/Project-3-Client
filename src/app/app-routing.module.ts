import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllInitiativeComponent } from './all-initiative/all-initiative.component';
import { NewInitiativeFormComponent } from './new-initiative-form/new-initiative-form.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'all-initiative', component: AllInitiativeComponent },
  { path: 'new-initiative', component: NewInitiativeFormComponent },
  { path: 'test-initiative', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
