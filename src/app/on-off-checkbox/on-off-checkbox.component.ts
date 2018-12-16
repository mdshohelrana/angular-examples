import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-off-checkbox',
  templateUrl: './on-off-checkbox.component.html',
  styleUrls: ['./on-off-checkbox.component.css']
})
export class OnOffCheckboxComponent implements OnInit {
  isChecked = false;
  constructor() { }

  ngOnInit() {
  }
  onChange(e){
    console.log(e);
    this.isChecked = !this.isChecked;
  }
}
