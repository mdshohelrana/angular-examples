import { Directive, SimpleChanges, OnChanges, OnInit, Injector, ElementRef, Input, Renderer2, HostListener } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[sf-validate]'
})
export class SfValidateDirective implements OnChanges, OnInit {
  
  /** NgModel for getting changes */
  @Input('ngModel') _model: NgModel;
  @Input('sf-validate') _validationKey:string;

  private _option:any;
  private _valid:boolean = true;
  private _mouseenter:boolean = false;

  private div = this.renderer.createElement("div");
  tooltipDiv = this.renderer.createElement("div");
  private errorText = "";

  constructor(
    private _injector: Injector,
    private _el: ElementRef,
    private renderer: Renderer2,
    private _modelObj: NgModel
    ) {
    }
    
    public ngOnInit(): void {      
    }

    public ngOnChanges(changes: SimpleChanges): void {
      if(!changes._model.firstChange) {
        this.sfValidator();
      }
      else {
        this.prepareValidationMsgs();
      }
    }

    private prepareValidationMsgs() {
      try {
        // Get validatoion option's object string from ***Form*** & get the object for this element
        let validateOption = this._el.nativeElement.closest('form').getAttribute('sf-validation-option');
        this._option = this._injector['view'].component[validateOption][this._validationKey];
      } catch (error) {
        this._option = null;
      }
      this.decorateElement();
    }

    private _isUndefinedOrNull():boolean {
      return (this._option === undefined || this._option === null);
    }

    private sfValidator() {
      this.callValidation();
    }

    private callValidation() {
      if( !this._isUndefinedOrNull() ) {
        if( this._modelObj.value.length> 0 && this._option.hasOwnProperty('size') ) {
          this._valid = this.rangeValidator(this._option['size']);
          this.setValidity();
        }
        else if( this._option.hasOwnProperty('required') ) {
          this._valid = this.requiredValidator(this._option['required']);
          this.setValidity();
        }
      }
    }
    private setValidity() {
        if(!this._valid) {
          this.setError();

        }
        else {
          this.removeError();
        }
        
    }

    private rangeValidator(_sizeOptions_) {
      let _result_ = true;
      if( _sizeOptions_.hasOwnProperty('min') && (this._modelObj.value.length < _sizeOptions_['min']) ) {
        _result_ = false;
        this.errorText = _sizeOptions_.message;
      }
      if( _sizeOptions_.hasOwnProperty('max') && (this._modelObj.value.length > _sizeOptions_['max']) ) {
        _result_ = false;
        this.errorText = _sizeOptions_.message;
      }
      return _result_
    }
    private requiredValidator(_requiredOptions_):boolean {
      let _result_ = true;
      if(this._modelObj.value == "") {
        _result_ = false;
        this.errorText = _requiredOptions_.message;
      }
      return _result_
    }
    private setError() {
      this.showValidationMessage();
    }
    private removeError() {
      this.removeValidationTooltip();
    }
    private showValidationMessage() {
      this.addValidationTooltip();
    }
    private addValidationTooltip() {
      // this._el.nativeElement.previousElementSibling.getElementsByClassName('tooltip-inner')[0].innerText = this.errorText;
      this.renderer.setProperty(this.tooltipDiv, 'innerText', this.errorText);
      if(this._mouseenter) this.renderer.addClass(this.div, "show");
      this.renderer.setStyle(this._el.nativeElement, "border", "1px solid red");
    }
    private removeValidationTooltip() {
      this.renderer.removeClass(this.div, "show");
      this.renderer.removeStyle(this._el.nativeElement, "border");
    }
    private decorateElement() {

      this.renderer.addClass(this.div, "tooltip");
      this.renderer.addClass(this.div, "fade");
      this.renderer.addClass(this.div, "bs-tooltip-top");
      this.renderer.setStyle(this.div, "bottom", "34px");
      this.renderer.setStyle(this.div, "top", "initial");
      this.renderer.setStyle(this.div, "right", "0");
      this.renderer.setStyle(this.div, "pointer-events", "none");
      const arrowDiv = this.renderer.createElement("div");
      this.renderer.addClass(arrowDiv, "arrow");
      this.renderer.setStyle(arrowDiv, "left", "50%");
      this.renderer.setStyle(arrowDiv, "transform", "translateX(-50%)");
      const tooltipText = (this.errorText) ? this.errorText : "This field is required";
      this.renderer.addClass(this.tooltipDiv, "tooltip-inner");
      this.renderer.setProperty(this.tooltipDiv, 'innerText', tooltipText);
      this.renderer.appendChild(this.div, arrowDiv);
      this.renderer.appendChild(this.div, this.tooltipDiv);
      this.renderer.insertBefore(this._el.nativeElement.parentNode, this.div, this._el.nativeElement);
    }

    @HostListener('mouseenter')
    showTootip() {
      this._mouseenter = true;
      if(!this._valid) {
        this.renderer.addClass(this.div, "show");
      }
    }

    @HostListener('mouseleave')
    hideTooltip() {
      this._mouseenter = false;
      this.renderer.removeClass(this.div, "show");
    }

    private _getTime() {}
    private stringMinLength() {}
    private stringMaxLength() {}
    private customValidatior() {}
    private isInput() {}
    private setResult() {}
    private callGridValidationGrps() {}
    private resetValidation() {}


    /** This method was written for testing purpuse only 
     *   #Result: Test passes for calling from outside
     */

    validate():void {
      console.log("thanks for validate me");
    }
    

    createElementFromHTML(htmlString) {
      var div = document.createElement('div');
      div.innerHTML = htmlString.trim();
    
      // Change this to div.childNodes to support multiple top-level nodes
      return div.firstChild; 
    }

}
