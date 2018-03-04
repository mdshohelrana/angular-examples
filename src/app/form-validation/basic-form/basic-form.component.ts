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

  constructor() { }

  ngOnInit() {
    this.genderList = ['Male', 'Female', 'Others'];
    this.user = new User();
  }

  onSubmit(formValues: any) {
    this.formValue = formValues
  }
}
