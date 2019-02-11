import { Directive, ViewChildren, AfterViewInit, HostListener, ElementRef, Host, Injector, Type, ApplicationRef, Input, EventEmitter, Output } from '@angular/core';
import { SfValidateDirective } from './sf-validate.directive';

@Directive({
  selector: '[sf-click]'
})
export class SfClickDirective implements AfterViewInit {
  @ViewChildren(SfValidateDirective)  @Host()  items;

  @Input('sf-click') _validateEvent:EventEmitter<any>;

  @Output() validate:EventEmitter<any> = new EventEmitter();
  

  private validationResult = [];

  constructor(private el: ElementRef, private _injector:Injector, private c:ApplicationRef ) { 
    // console.log(l);
    
  }

  ngAfterViewInit() {
    this._validateEvent.subscribe(
        arg => {this.onClick();}
      );
  console.log(this._validateEvent);
      // this._validateEvent();
      // this.items.first.validate();
  }
  
  // @HostListener('click')
  private onClick() {
    this.validationResult.length = 0;
    let maps = this._injector['view'].nodes.filter((x: any) => {return x['instance'] instanceof SfValidateDirective});
    for (let index = 0; index < maps.length; index++) {
      this.validationResult.push( maps[index]['instance'].callValidation() );
    }
    this.validate.emit(this.validationResult);
    
  }

}
