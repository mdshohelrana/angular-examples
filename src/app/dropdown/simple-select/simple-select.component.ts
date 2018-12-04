import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-simple-select',
  templateUrl: './simple-select.component.html',
  styleUrls: ['./simple-select.component.css']
})
export class SimpleSelectComponent implements OnInit {
  
  singleCarSelect;
  selectedCar = '';
  cars = [
    {
      id:1,
      brand:"BMW"
    },
    {
      id:2,
      brand:"Honda"
    },
    {
      id:3,
      brand:"Toyota"
    },
    {
      id:4,
      brand:"Lamborghini"
    },
  ]

  constructor() { }

  ngOnInit() {
  }
  // on change
  onChangeSingleCar(car){
    this.singleCarSelect = this.cars.find(x => x.id == car).brand;
    this.selectedCar = this.singleCarSelect ;
  }

  //on Focus
  onFocus(event){
  
  }

  //on Focus
  onBlur(event){

  }

  //on Mouse Enter
  onMouseenter(event){
 
  }

  //on Click
  onClick(event){

  }

  //on Double Click
  onDoubleClick(event){

  }
}
