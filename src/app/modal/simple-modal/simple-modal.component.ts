import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition,} from '@angular/animations';
@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css'],
  animations:[
    trigger('openClose', [
      state('open', style({
        transform:'translate(0,0)',
        transition: 'transform .3s ease-out,-webkit-transform .3s ease-out',
      })),
      state('closed', style({
        transform:'translate(0,-35%)',
        transition: 'transform .3s ease-out,-webkit-transform .3s ease-out',
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
export class SimpleModalComponent implements OnInit {

  modalShow = false;

  constructor() { }

  ngOnInit() {
  }
  modalOpen(){
    this.modalShow = true;
  }
  modalClose(){
    this.modalShow = false;
  }

}
