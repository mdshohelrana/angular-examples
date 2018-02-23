import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormValidationComponent } from './form-validation.component';
import { BasicFormComponent } from './basic-form/basic-form.component';

const routes: Routes = [{
  path: '',
  component: FormValidationComponent,
  children: [
    { path: 'basic-form', component: BasicFormComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormValidationRoutingModule { }
