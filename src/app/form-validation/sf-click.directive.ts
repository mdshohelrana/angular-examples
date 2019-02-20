import { Directive, HostListener, ElementRef, Injector, EventEmitter, Output, Input } from '@angular/core';
import { SfValidateDirective } from './sf-validate.directive';
import { NgForm, FormGroup, FormControl } from '@angular/forms';



const _DEFAULT_RESULT = { isValid: true, validationSummaryMsgs: [] };

@Directive({
  selector: '[sf-click]'
})
export class SfClickDirective {

  @Input('not') excludeText: string;
  @Input('group') groupText: string;

  @Output('sf-click') _validateEvent: EventEmitter<any> = new EventEmitter();


  private validationResult = _DEFAULT_RESULT;

  constructor(private _el: ElementRef, private _injector: Injector, private _ngForm: NgForm) { }


  @HostListener('click', ['$event'])
  private onClick(event) {
    // this._ngForm.form.markAsPristine({});
    console.log(this._ngForm);
    console.log(this.excludeText);
    console.log(this.groupText);

    event['validate'] = () => { return this.validate() };
    event['reset'] = () => { return this.reset() };
    this._validateEvent.emit(event);
  }

  public validate() {
    this.validationResult["validationSummaryMsgs"].length = 0;
    this.validationResult.isValid = true;
    let maps;
    if(this.groupText !== undefined) {
      maps = this.getContols(this.findFormGroup(this._ngForm));
    } else {
      maps = this.getContols(this._ngForm);
    }
    console.log(maps);
    for (let index = 0; index < maps.length; index++) {
      const _result_ = maps[index]['sfValidator'].callValidation();
      if (!_result_.isValid) {
        this.validationResult["validationSummaryMsgs"].push(_result_);
        this.validationResult.isValid = false;
      }
    }
    return this.validationResult;
  }

  public getContols(_ngForm_: any) {
    let resultControls = new Array();
    let excludeKeys = (this.excludeText) ? this.excludeText.split(',') : [];
    Object.keys(_ngForm_.controls).map(_key_ => {
      if (_ngForm_.controls[_key_] instanceof FormControl) {
        resultControls.push(_ngForm_.controls[_key_])
      }
      if (_ngForm_.controls[_key_] instanceof FormGroup) {
        if (!excludeKeys.includes(_key_)) {
          resultControls = resultControls.concat(this.getContols(_ngForm_.controls[_key_]))
        }
      }
    });
    return resultControls;
  }

  public findFormGroup(_ngForm_: any) {
    let _fromGroup_ = null;
    let _formGroupKeys_ = Object.keys(_ngForm_.controls).filter( _key_ => {
      return _ngForm_.controls[_key_] instanceof FormGroup
    });

    if( _formGroupKeys_.includes(this.groupText) ) {
      _fromGroup_ =  _ngForm_.controls[this.groupText];
    }
    else {
      for ( let index = 0; index < _formGroupKeys_.length; index++ ) {
        _fromGroup_ = this.findFormGroup(_ngForm_.controls[_formGroupKeys_[index]]);
        if( _fromGroup_ !== null ) {
          break;
        }
      }
    }
    return _fromGroup_;
  }

  public reset() {
    this.validationResult["validationSummaryMsgs"].length = 0;
    this.validationResult.isValid = true;
    let maps;
    if(this.groupText !== undefined) {
      maps = this.getContols(this.findFormGroup(this._ngForm));
    } else {
      maps = this.getContols(this._ngForm);
    }
    for (let index = 0; index < maps.length; index++) {
      maps[index]['sfValidator'].resetValidation();
    }
    return this.validationResult;
  }

}
