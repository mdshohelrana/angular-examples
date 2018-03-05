import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {

  public genderList: string[];
  public user: User;
  public formValue: any;
  public submitted: boolean = false;
  public validationMessage: string;

  constructor() { }

  ngOnInit() {
    this.genderList = ['Male', 'Female', 'Others'];
    this.user = new User();
  }

  onSubmit(signUpForm: any): void {
    if (signUpForm.valid) {
      this.formValue = signUpForm.value;
      this.validationMessage = 'The form is valid';
    } else {
      this.validationMessage = 'The form is not valid';
    }
  }
}
