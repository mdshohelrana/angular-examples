import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormValidationRoutingModule } from './form-validation-routing.module';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { FormValidationComponent } from './form-validation.component';
import { TemplateFormComponent } from './template-form/template-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormValidationRoutingModule
  ],
  declarations: [FormValidationComponent, BasicFormComponent, TemplateFormComponent]
})
export class FormValidationModule { }
