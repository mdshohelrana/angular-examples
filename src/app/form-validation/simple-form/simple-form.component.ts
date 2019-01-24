import { Component, OnInit } from '@angular/core';
import { Employee } from './Employee.model';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  private employee:Employee;
  private employeeOptions:any = {
          "name" : {
            "message" : "Name requred"
          },
          "email" : {
            "message" : "Email requred"
          },
          "password" : {
            "message" : "Password requred"
          },
          "url" : {
            "message" : "Url requred"
          },
          "tel" : {
            "message" : "Tel requred"
          },
          "date" : {
            "message" : "Date requred"
          },
          "time" : {
            "message" : "Time requred"
          },
          "dateTime" : {
            "message" : "Date Time requred"
          },
          "gender" : {
            "message" : "Gender requred"
          },
          "address" : {
            "message" : "Address requred"
          }
  }

  constructor() { }

  ngOnInit() {
    this.employee = new Employee({name:"Feroz"});
    
  }

}
