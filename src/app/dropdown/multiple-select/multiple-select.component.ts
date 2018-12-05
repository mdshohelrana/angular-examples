import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-select',
  templateUrl: './multiple-select.component.html',
  styleUrls: ['./multiple-select.component.css']
})
export class MultipleSelectComponent implements OnInit {
  showDropdown:false;
  cars = [
    {
      id:0,
      brand:"BMW",
      selected:false
    },
    {
      id:1,
      brand:"Honda",
      selected:false
    },
    {
      id:2,
      brand:"Toyota",
      selected:false
    },
    {
      id:3,
      brand:"Lamborghini",
      selected:false
    },
  ]

  constructor() { }

  ngOnInit() {
  }
  selectObject; 
  // on change
  onChangeCar(car){
    this.selectObject = this.cars.find(x => x.id == car);
    this.selectObject.selected = !this.selectObject.selected;
  }
  

}
