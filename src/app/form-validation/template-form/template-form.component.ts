import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  public genderList: string[];
  public signUpFrm: any;
  public formValue: any;
  public submitted: boolean = false;
  public validationMessage: string;
  public user: User;

  constructor() { }

  ngOnInit() {
    this.genderList = ['Male', 'Female', 'Others'];
    this.user = new User();
  }

  onSubmit(valid: boolean): void {
    if (valid) {
      this.formValue = this.user;
      this.validationMessage = 'The form is valid';
    } else {
      this.formValue = this.user;
      this.validationMessage = 'The form is not valid';
    }
  }
}
