import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormValidationComponent } from './form-validation.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { MasterChildFormComponent } from './master-child-form/master-child-form.component';

const routes: Routes = [{
  path: '',
  component: FormValidationComponent,
  children: [
    { path: 'basic-form', component: BasicFormComponent },
    { path: 'template-form', component: TemplateFormComponent },
    { path: 'reactive-form', component: ReactiveFormComponent },
    { path: 'simple-form', component: SimpleFormComponent },
    { path: 'master-child-form', component: MasterChildFormComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormValidationRoutingModule { }
