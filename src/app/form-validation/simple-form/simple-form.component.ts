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
            "message" : "Name required",
            "required" : true,
          },
          "email" : {
            "message" : "Email required",
            "required" : true,
          },
          "password" : {
            "message" : "Password required",
            "required" : true,
          },
          "url" : {
            "required" : true,
          },
          "tel" : {
            "message" : "Tel required",
            "required" : true,
          },
          "date" : {
            "message" : "Date required",
            "required" : true,
          },
          "time" : {
            "message" : "Time required",
            "required" : true,
          },
          "dateTime" : {
            "message" : "Date Time required",
            "required" : true,
          },
          "gender" : {
            "message" : "Gender required",
            "required" : true,
          },
          "address" : {
            "message" : "Address required",
            "required" : true,
          }
  }

  constructor(
    private _inj:Injector
  ) { }

  ngOnInit() {
    this.employee = new Employee({name:"Feroz"});
    
    
  }

}
