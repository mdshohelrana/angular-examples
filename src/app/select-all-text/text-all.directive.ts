import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: "[select-all]"
})

export class SelectAllDirectives {

  constructor(private el: ElementRef) { }

  @HostListener('click')
  private onClick() {
    this.el.nativeElement.select();
  }
}