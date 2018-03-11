import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormValidationComponent } from './form-validation.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [{
  path: '',
  component: FormValidationComponent,
  children: [
    { path: 'basic-form', component: BasicFormComponent },
    { path: 'template-form', component: TemplateFormComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormValidationRoutingModule { }
