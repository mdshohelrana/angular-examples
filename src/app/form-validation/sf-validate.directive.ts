import { Directive, SimpleChanges, OnChanges, OnInit, Injector, ElementRef, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[sf-validate]'
})
export class SfValidateDirective implements OnChanges, OnInit {
  
  /** NgModel for getting changes */
  @Input('ngModel') _model: NgModel;
  @Input('sf-validate') _validationKey:string;

  private _option:any;

  constructor(
    private _injector: Injector,
    private _el: ElementRef,
    private _modelObj: NgModel
    ) {}
    
    public ngOnInit(): void {
      console.log(this._el, this._modelObj);
      console.log(this._model);
      
    }

    public ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
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
        console.log(this._option);
      } catch (error) {
        this._option = null;
      }
    }

    private _isUndefinedOrNull() {
      return this._option === undefined || this._option === null;
    }

    private sfValidator() {
      this.callValidation();
    }

    private callValidation() {}

    private _getTime() {}
    private requiredValidator() {}
    private stringMinLength() {}
    private stringMaxLength() {}
    private rangeValidator() {}
    private customValidatior() {}
    private setError() {}
    private removeError() {}
    private decorateElement() {}
    private isInput() {}
    private showValidationMessage() {}
    private addValidationTooltip() {}
    private removeValidationTooltip() {}
    private setResult() {}
    private callGridValidationGrps() {}
    private resetValidation() {}
    private setValidity() {}


    /** This method was written for testing purpuse only 
     *   #Result: Test passes for calling from outside
     */

    validate():void {
      console.log("thanks for validate me");
      
    }

}
