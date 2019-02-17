import { Directive, SimpleChanges, OnChanges, OnInit, Injector, ElementRef, Input, Renderer2, HostListener } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[sf-validate]'
})
export class SfValidateDirective implements OnChanges, OnInit {

  /** NgModel for getting changes */
  @Input("ngModel") _model: NgModel;
  @Input("sf-validate") _validationKey: string;

  private _option: any;
  private _valid: boolean = true;
  private _mouseenter: boolean = false;

  private _div: any;
  private _tooltipDiv: any;
  private _errorText: string = "";
  private _defaultErrorText: string = "This field is required";

  private _result = { fieldName: "", isValid: true, validationSummary: "" };

  constructor(
    private _injector: Injector,
    private _el: ElementRef,
    private _renderer: Renderer2,
    private _modelObj: NgModel
  ) {
    this._div = this._renderer.createElement("div");
    this._tooltipDiv = this._renderer.createElement("div");
  }

  public ngOnInit(): void {
  }

  public ngOnChanges(_changes_: SimpleChanges): void {

    if (!_changes_._model.firstChange) {
      this.sfValidator();
      console.log(this._modelObj);
    }
    else {
      
      this.prepareValidationMsgs();
    }
  }

  private prepareValidationMsgs() {
    try {
      // Get validatoion option's object string from ***Form*** & get the object for this element
      let _validateOption_ = this._el.nativeElement["form"].getAttribute("sf-validation-option");
      this._option = this._injector["view"].component[_validateOption_][this._validationKey];
    } catch (error) {
      this._option = null;
    }
    this.decorateElement();
  }

  private _isUndefinedOrNull(): boolean {
    return (this._option === undefined || this._option === null);
  }

  private sfValidator() {
    this.callValidation();

  }

  private callValidation(): any {
    this._errorText = "";
    this._valid = true;
    const _element_ = this._el.nativeElement;
    if (!this._isUndefinedOrNull()) {
      if( this._modelObj.value !== undefined && this._modelObj.value.length > 0 ) {
        if(this.isEmail(_element_)) {
          this._valid = this.validateEmail(this._modelObj.value);
          this.setValidity();
        }
        else if (this._option.hasOwnProperty("size")) {
          this._valid = this.sizeValidator(this._option["size"]);
          this.setValidity();
        }
        else if (this._option.hasOwnProperty("range")) {
          this._valid = this.rangeValidator(this._option["size"]);
          this.setValidity();
        }
        else if (this._option.hasOwnProperty("range")) {
          this._valid = this.patternValidator(this._option["size"]);
          this.setValidity();
        }
      }
      else if (this._option.hasOwnProperty("required")) {
        this._valid = this.requiredValidator(this._option["required"]);
        this.setValidity();
      }
    }
    this._result.fieldName = this._validationKey;
    this._result.isValid = this._valid;
    this._result.validationSummary = this._errorText;
    return this._result;
  }

  private resetValidation() {
    this._valid = true;
    this.removeError();
  }

  private setValidity() {
    if (!this._valid) {
      this.setError();
    }
    else {
      this.removeError();
    }

  }

  private setError() {
    this._modelObj.control.setErrors({ 'incorrect': true });
    this.showValidationMessage();
  }

  private removeError() {
    this._modelObj.control.setErrors(null);
    this.removeValidationTooltip();
    this.removeBorder();
  }

  private showValidationMessage() {
    this.addValidationTooltip();
    this.addBorder();
  }

  private addValidationTooltip() {
    // this._el.nativeElement.previousElementSibling.getElementsByClassName("tooltip-inner")[0].innerText = this._errorText;
    this._renderer.setProperty(this._tooltipDiv, "innerText", this._errorText);
    if (this._mouseenter) this._renderer.addClass(this._div, "show");
  }

  private removeValidationTooltip() {
    this._renderer.removeClass(this._div, "show");
  }

  private addBorder() {
    this._renderer.setStyle(this._el.nativeElement, "border", "1px solid red");
  }

  private removeBorder() {
    this._renderer.removeStyle(this._el.nativeElement, "border");
  }

  private decorateElement() {

    this._renderer.addClass(this._div, "tooltip");
    this._renderer.addClass(this._div, "fade");
    this._renderer.addClass(this._div, "bs-tooltip-top");
    this._renderer.setStyle(this._div, "bottom", "34px");
    this._renderer.setStyle(this._div, "top", "initial");
    this._renderer.setStyle(this._div, "right", "0");
    this._renderer.setStyle(this._div, "pointer-events", "none");
    const _arrowDiv_ = this._renderer.createElement("div");
    this._renderer.addClass(_arrowDiv_, "arrow");
    this._renderer.setStyle(_arrowDiv_, "left", "50%");
    this._renderer.setStyle(_arrowDiv_, "transform", "translateX(-50%)");
    const _tooltipText_ = (this._errorText) ? this._errorText : this._defaultErrorText;
    this._renderer.addClass(this._tooltipDiv, "tooltip-inner");
    this._renderer.setProperty(this._tooltipDiv, "innerText", _tooltipText_);
    this._renderer.appendChild(this._div, _arrowDiv_);
    this._renderer.appendChild(this._div, this._tooltipDiv);
    this._renderer.insertBefore(this._el.nativeElement.parentNode, this._div, this._el.nativeElement);
  }

  @HostListener("mouseenter")
  showTootip() {
    this._mouseenter = true;
    if (!this._valid) {
      this._renderer.addClass(this._div, "show");
    }
  }

  @HostListener("mouseleave")
  hideTooltip() {
    this._mouseenter = false;
    this._renderer.removeClass(this._div, "show");
  }


  private _getTime() { }
  private customValidatior() { }
  private setResult() { }
  private callGridValidationGrps() { }

  private isEmail(_element) {
    return _element['type'] === 'email';
  }

  private isInput(_element) {
    return _element['nodeName'] === 'INPUT' || _element['nodeName'] === 'SELECT' || _element['nodeName'] === 'TEXTAREA';
  }

  private stringMinLength(_sizeOptions_, _result_) {
    if (_sizeOptions_.hasOwnProperty("min") && (this._modelObj.value.length < _sizeOptions_["min"])) {
      _result_ = false;
      this._errorText = _sizeOptions_.message;
    }
    return _result_
  }
  private stringMaxLength(_sizeOptions_, _result_) {
    if (_sizeOptions_.hasOwnProperty("max") && (this._modelObj.value.length > _sizeOptions_["max"])) {
      _result_ = false;
      this._errorText = _sizeOptions_.message;
    }
    return _result_
  }

  private validateEmail( _email_ ) {
    let _result_:boolean;
    var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var patt = new RegExp(re);
    _result_ =  patt.test( _email_ );
    if( !_result_ ) {
      this._errorText = "Not a valid email";
    }
    return _result_;
  }

  private patternValidator(_pattern_) {
    var patt = new RegExp(_pattern_);
    return patt.test(this._modelObj.value);
  }

  
  private sizeValidator( _sizeOptions_ ) {
    let _result_ = true;

    _result_ = this.stringMinLength(_sizeOptions_, _result_);
    _result_ = this.stringMaxLength(_sizeOptions_, _result_);
    
    return _result_;
  }

  private rangeValidator( _sizeOptions_) {
    let _result_ = true;
    let _value_ = this._modelObj.value;
    try {
        if (typeof _value_ === "string") {
            _value_ = parseFloat(_value_);
        }

        const _dataRange_ = _sizeOptions_.hasOwnProperty("range")

        if ((typeof _value_ === "number") && (!isNaN(_value_))) {
            let range_array = _dataRange_.split(',');

            if (range_array.length === 2) {
                var minRange = parseFloat(range_array[0]);
                var maxRange = parseFloat(range_array[1]);

                if (minRange != null && _value_ < minRange) {
                    return _result_ = false;
                }
                if (maxRange != null && _value_ > maxRange) {
                    return _result_ = false;
                }
            }
            else {
                var range = parseFloat(_dataRange_);
                if ((typeof range === "number") && (!isNaN(range))) {
                    if (_value_ < range) {
                        _result_ = false;
                    }
                }
            }
        } else {
            _result_ = false;
        }
    } catch (e) {
        this._errorText = e.message;
        _result_ = false;
    }
    return _result_;
}

  private requiredValidator(_requiredOptions_): boolean {
    let _result_ = true;
    if (this._modelObj.value === undefined || this._modelObj.value.length == 0) {
      _result_ = false;
      this._errorText = _requiredOptions_.hasOwnProperty("message") ? _requiredOptions_.message : this._defaultErrorText;
    }
    return _result_
  }

  /** This method was written for testing purpuse only 
   *   #Result: Test passes for calling from outside
   */



}
