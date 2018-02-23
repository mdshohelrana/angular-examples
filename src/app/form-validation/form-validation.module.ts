import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormValidationRoutingModule } from './form-validation-routing.module';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { FormValidationComponent } from './form-validation.component';

@NgModule({
  imports: [
    CommonModule,
    FormValidationRoutingModule
  ],
  declarations: [FormValidationComponent, BasicFormComponent]
})
export class FormValidationModule { }
