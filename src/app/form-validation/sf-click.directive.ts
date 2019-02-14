import { Directive, HostListener, ElementRef, Injector, EventEmitter, Output } from '@angular/core';
import { SfValidateDirective } from './sf-validate.directive';
import { NgForm } from '@angular/forms';



const _DEFAULT_RESULT = { isValid: true, validationSummaryMsgs: [] };

@Directive({
  selector: '[sf-click]'
})
export class SfClickDirective {

  @Output('sf-click') _validateEvent: EventEmitter<any> = new EventEmitter();


  private validationResult = _DEFAULT_RESULT;

  constructor(private _el: ElementRef, private _injector: Injector, private ngForm:NgForm) { }


  @HostListener('click', ['$event'])
  private onClick(event) {
    // this.ngForm.form.markAsPristine({});
    event['validate'] = () => { return this.validate() };
    event['reset'] = () => { return this.reset() };
    this._validateEvent.emit(event);
  }

  public validate() {
    this.validationResult["validationSummaryMsgs"].length = 0;
    let maps = this._injector['view'].nodes.filter((x: any) => { return x['instance'] instanceof SfValidateDirective });
    for (let index = 0; index < maps.length; index++) {
      const _result_ = maps[index]['instance'].callValidation();
      if (!_result_.isValid) {
        this.validationResult["validationSummaryMsgs"].push(_result_);
        this.validationResult.isValid = false;
      }
    }
    return this.validationResult;
  }

  public reset() {
    this.validationResult = _DEFAULT_RESULT;
    let maps = this._injector['view'].nodes.filter((x: any) => { return x['instance'] instanceof SfValidateDirective });
    for (let index = 0; index < maps.length; index++) {
      maps[index]['instance'].resetValidation();
    }
    return;
  }

}
