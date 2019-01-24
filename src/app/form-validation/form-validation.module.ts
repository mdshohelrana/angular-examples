import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormValidationRoutingModule } from './form-validation-routing.module';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { FormValidationComponent } from './form-validation.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { MasterChildFormComponent } from './master-child-form/master-child-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormValidationRoutingModule
  ],
  declarations: [
    FormValidationComponent
    , BasicFormComponent
    , TemplateFormComponent
    , ReactiveFormComponent, SimpleFormComponent, MasterChildFormComponent
  ]
})
export class FormValidationModule { }
