/* tslint:disable:member-ordering */
import { Directive, ElementRef, HostListener, Input, SimpleChanges, OnChanges, Output, EventEmitter, ViewContainerRef } from '@angular/core';
import { NgModel } from '@angular/forms';
import { SelectText } from './select-text.model';

@Directive({
  selector: '[ngModel][psSelectText]',
  providers: [NgModel],
  host: {
    '(ngModelChange)': 'onInputChange($event)'
  }
})
export class PsSelectText implements OnChanges {
  @Input('psSelectText') selectedText: string;
  @Input('ngModel') selectedModel: NgModel;

  constructor(private el: ElementRef, public model: NgModel, private viewContainerRef: ViewContainerRef) { }


  ngOnChanges(changes: SimpleChanges) {
    console.log(this.el)
    if (changes.selectedModel) {
      // this.selectedText.valueAccessor.writeValue(changes.selectedModel.currentValue);
      setTimeout(() => {
        this.viewContainerRef['_view'].component[this.selectedText] =
          this.el.nativeElement.selectedOptions[0].text
      }, 0);
    }
  }

  onInputChange(event) {
    // Only get selected change
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/