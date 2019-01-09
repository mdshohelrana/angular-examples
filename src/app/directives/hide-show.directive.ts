import { Directive, ElementRef, ViewContainerRef, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
@Directive({
  selector: '[app-hide-show]'
})
export class HideShowDirective implements OnInit{

  @Input('app-hide-show')
  private slideHideShow: string;

  

  private targetElement: string;
  private targetHide: string;

  constructor(private el: ElementRef, private viewContainer: ViewContainerRef) {

  }
  ngOnInit() {
    console.log("slideHideShow", this.slideHideShow);
    let splitedList = this.slideHideShow.split(',');
    if(splitedList.length>0) {
      this.targetElement = splitedList[0];
      this.targetHide = (splitedList.hasOwnProperty(1))?splitedList[1]:null;
      this.targetHide =  this.targetHide.trim();
      let _this = this;
      let selectedTarget = $("div[data-target="+this.targetElement+"]");
     
      if (selectedTarget.length == 0 ) {
          selectedTarget = $("div[target="+this.targetElement+"]");
      }
      let component = this.viewContainer['_view'].component;
      $(this.el.nativeElement).click(function(){
        if(_this.targetHide) {
          component[_this.targetHide] = !component[_this.targetHide];
        }
        console.log("targetHide", component[_this.targetHide]);
        selectedTarget.slideToggle(150); 
      });

    }
  }
}
