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

  private div = this.renderer.createElement("div");

  constructor(
    private _injector: Injector,
    private _el: ElementRef,
    private renderer: Renderer2,
    private _modelObj: NgModel
    ) {
    }
    
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
      this.decorateElement();
    }

    private _isUndefinedOrNull():boolean {
      return (this._option === undefined || this._option === null);
    }

    private sfValidator() {
      this.callValidation();
    }

    private callValidation() {
      if( !this._isUndefinedOrNull() && this.requiredValidator() ) {
        this.setValidity();
      }
    }
    private setValidity() {
        console.log(this._model.value);
        if(this._modelObj.value == "") {
          this._valid = false;
          this.setError();

        }
        else {
          this._valid = true;
          this.removeError();
        }
        
    }

    private requiredValidator():boolean {
      return (this._option.hasOwnProperty('required') && this._option.hasOwnProperty('required') === true);
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
      this.renderer.addClass(this.div, "show");
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
      this.renderer.setStyle(this.div, "bottom", "initial");
      this.renderer.setStyle(this.div, "top", "0");
      this.renderer.setStyle(this.div, "right", "0");
      const arrowDiv = this.renderer.createElement("div");
      this.renderer.addClass(arrowDiv, "arrow");
      this.renderer.setStyle(arrowDiv, "left", "50%");
      this.renderer.setStyle(arrowDiv, "transform", "translateX(-50%)");
      const tooltipDiv = this.renderer.createElement("div");
      this.renderer.addClass(tooltipDiv, "tooltip-inner");
      const text = (this._option.hasOwnProperty('message')) ? this._option.message : "This field is required";
      const tooltipText = this.renderer.createText(text);
      this.renderer.appendChild(tooltipDiv, tooltipText);
      this.renderer.appendChild(this.div, arrowDiv);
      this.renderer.appendChild(this.div, tooltipDiv);
      this.renderer.insertBefore(this._el.nativeElement.parentNode, this.div, this._el.nativeElement);
    }
    @HostListener('mouseenter')
    showTootip() {
      if(!this._valid) {
        this.renderer.addClass(this.div, "show");
      }
    }  
    @HostListener('mouseleave')
    hideTooltip() {
      this.renderer.removeClass(this.div, "show");
    }
    private _getTime() {}
    private stringMinLength() {}
    private stringMaxLength() {}
    private rangeValidator() {}
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
