import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition,} from '@angular/animations';
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  animations:[


    trigger('openClose', [
      state('open', style({
        height:'100px',
      })),
      state('closed', style({
        height:'0px',
        overflow:'hidden',
      })),

      transition('closed => open', [
        animate('.3s')
      ]),

      transition('open => closed', [
        animate('.3s')
      ]),
  
    ]),


    






  ]
})
export class AccordionComponent implements OnInit {

  showAccordionItem = 0;

  //isOpen = true;
  constructor() { }

  ngOnInit() {
  }
  toggleCollapse(number){
    console.log(number);
   // this.isOpen = !this.isOpen;
    this.showAccordionItem = number;
  }

}
