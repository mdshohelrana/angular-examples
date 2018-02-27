import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {

  public genderList: string[];

  constructor() { }

  ngOnInit() {
    this.genderList = ['Male', 'Female', 'Others'];
  }

  onSubmit(){
    
  }
}
