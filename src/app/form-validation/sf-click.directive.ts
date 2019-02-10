import { Directive, ViewChildren, AfterViewInit, HostListener, ElementRef, Host, Injector, Type, ApplicationRef } from '@angular/core';
import { SfValidateDirective } from './sf-validate.directive';

@Directive({
  selector: '[sf-click]'
})
export class SfClickDirective implements AfterViewInit {
  @ViewChildren(SfValidateDirective)  @Host()  items;

  constructor(private el: ElementRef, private l:Injector, private c:ApplicationRef ) { 
    // console.log(l);
    
  }

  ngAfterViewInit() {
      // console.log(this.c);
      // this.items.first.validate();
  }
  
  @HostListener('click')
  private onClick() {        
    // console.log(this.items);
    let maps = this.l['view'].nodes.filter((x: any) => {return x['instance'] instanceof SfValidateDirective});
    maps[0]['instance'].validate();
    
  }

}
