import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  public signUpForm: FormGroup;
  public genderList: string[];
  public formValue: any;
  public submitted: boolean = false;
  public validationMessage: string;

  // constructor
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  // ngOnInit
  ngOnInit() {
    this.genderList = ['Male', 'Female', 'Others'];
  }

  // createForm
  createForm() {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      pwd: ['', [Validators.required, Validators.minLength(8)]],
      confirmPwd: ['', [Validators.required, Validators.minLength(8)]],
      gender: ['', Validators.required],
      terms: ['', Validators.requiredTrue]
    });
  }

  // onSubmit
  onSubmit(): void {
    if (this.signUpForm.valid) {
      this.formValue = this.signUpForm.value;
      this.validationMessage = 'The form is valid';
    } else {
      this.validationMessage = 'The form is not valid';
    }
  }

  // property declarations to form
  get email() { return this.signUpForm.get('email'); }
  get pwd() { return this.signUpForm.get('pwd'); }
  get confirmPwd() { return this.signUpForm.get('confirmPwd'); }
  get gender() { return this.signUpForm.get('gender'); }
  get terms() { return this.signUpForm.get('terms'); }

}
