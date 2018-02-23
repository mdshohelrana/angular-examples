import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormValidationRoutingModule } from './form-validation-routing.module';
import { BasicFormComponent } from './basic-form/basic-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormValidationRoutingModule
  ],
  declarations: [BasicFormComponent]
})
export class FormValidationModule { }
