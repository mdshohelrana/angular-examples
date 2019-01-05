import { Directive, ElementRef, Input, SimpleChanges  } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[BoolText]'
})
export class BoolTextDirective {
  @Input('BoolText') selectedText: string;
  @Input('ngModel') selectedModel: NgModel;
  constructor(private el: ElementRef, public model:NgModel) {}

  changeLabel():void {
    this.el.nativeElement.previousElementSibling.innerHTML = this.getLabelData();
  }

  getLabelData():string {
    let lablel:string = "";
    switch (this.selectedText) {
      case "ok":
        lablel = (this.selectedModel)?"Ok":"Not ok";
        break;
      case "all":
        lablel = (this.selectedModel)?"All":"Not all";
        break;
      default: 
        lablel = (this.selectedModel)?"Yes":"No";
    }
    return lablel;
  }

  ngOnChanges(changes: SimpleChanges){
      if(changes.selectedModel){
        this.changeLabel();
      }
    }

}
