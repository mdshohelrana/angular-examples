import { Component, OnInit } from '@angular/core';

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
  isFocus = false;
  isBlur = false;
  isMouseenter = false;
  isClick = false;
  isDoubleClick = false;
  //on Focus
  onFocus(event){
    this.isFocus=true;
  }

  //on Focus
  onBlur(event){
    this.isBlur=true;
  }

  //on Mouse Enter
  onMouseenter(event){
    this.isMouseenter=true;
  }

  //on Click
  onClick(event){
    this.isClick=true;
  }

  //on Double Click
  onDoubleClick(event){
    this.isDoubleClick=true;
  }
}
