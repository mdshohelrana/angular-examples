import { Component, OnInit, QueryList, ViewChildren, ViewChild, ElementRef, Injector, AfterViewInit } from '@angular/core';
import { Employee } from './Employee.model';
import { SfValidateDirective } from '../sf-validate.directive';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css'],
  viewProviders: [SfValidateDirective, NgModel]
})
export class SimpleFormComponent implements OnInit {
  @ViewChildren(SfValidateDirective) items;
  private employee:Employee;
  private employeeOptions:any = {
          "name" : {
            "message" : "Name requred",
            "requred" : true,
          },
          "email" : {
            "message" : "Email requred",
            "requred" : true,
          },
          "password" : {
            "message" : "Password requred",
            "requred" : true,
          },
          "url" : {
            "message" : "Url requred",
            "requred" : true,
          },
          "tel" : {
            "message" : "Tel requred",
            "requred" : true,
          },
          "date" : {
            "message" : "Date requred",
            "requred" : true,
          },
          "time" : {
            "message" : "Time requred",
            "requred" : true,
          },
          "dateTime" : {
            "message" : "Date Time requred",
            "requred" : true,
          },
          "gender" : {
            "message" : "Gender requred",
            "requred" : true,
          },
          "address" : {
            "message" : "Address requred",
            "requred" : true,
          }
  }

  constructor(
    private _inj:Injector
  ) { }

  ngOnInit() {
    this.employee = new Employee({name:"Feroz"});
    
    
  }

}
