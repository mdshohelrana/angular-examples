import { Directive , OnInit, ElementRef, HostListener, Input} from '@angular/core';
import * as $ from 'jquery';

@Directive({
  selector: '[appPhoneNumberFormat]'
})
export class PhoneNumberFormatDirective  implements OnInit{

  constructor( private el: ElementRef) { }
  targetElement;
  
  @Input('appPhoneNumberFormat')
  private PhoneNumberFormat:string;

  ngOnInit() {
    console.log(this.el.nativeElement);
    
    let targetElement = this.el.nativeElement;

    // targetElement.onChange(function(){
    //   console.log("this.el.nativeElement", this.el.nativeElement.value);
    // });
   // console.log("appInputFormat", this.appInputFormat);

   console.log("PhoneNumberFormat", this.PhoneNumberFormat);
  }

  // @HostListener('change') onChange(){
  //   console.log(this.el.nativeElement);
  // }
  @HostListener('input', ["$event.target.value"])
  onInput(value){
    console.log("value", value);
  }
  


}
