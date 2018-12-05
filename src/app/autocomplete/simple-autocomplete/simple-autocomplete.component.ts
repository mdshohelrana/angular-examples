import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-simple-autocomplete',
  templateUrl: './simple-autocomplete.component.html',
  styleUrls: ['./simple-autocomplete.component.css']
})
export class SimpleAutocompleteComponent implements OnInit {

  stateForm: FormGroup;

  wordLenght:number= 0;
  
  selectedValue:string = '';
  isFocus = false;
  isBlur = false;
  isKeyup = false;
  isKeydown = false;
  isSelectValue = false;

  showSearchResult = false;
  cities = ['Dhaka', 'Chittagong',  'Khulna', 'Rajshahi', 'Mymensingh', 'Barisal',
  'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Rangpur', 'Comilla', 'Narayanganj', 'Gazipur', 
  'Bogra', 'Kushtia', 'Jessore', 'Coxs Bazar', 'Brahmanbaria', 'Dinajpur', 'Chapai Nawabganj', 'Tangail', 'Sirajganj', 
  'Feni', 'Noakhali', 'Faridpur', 'Bagherhat','Jhenaidah', 'Narail', 'Chuadanga', 'Magura', 'Nowapara', 'Shatkhira', 
  'Shambhuganj', 'Trishal', 'Fulbaria', 'Muktagachha', 'Nandail', 'Netrokona', 'Gaffargaon', 'Sherpur', 'Ghatail', 
  'Kalihati', 'Sakhipur','Bhuapur', 'Elenga', 'Karatia', 'Tennessee', 'Aricha', 'Basail', 'Bhairab', 'Munshiganj', 'Gopalganj', 'Madaripur',];

  constructor( private fb: FormBuilder) {
    this.initForm()
  }

  initForm(): FormGroup {
    return this.stateForm = this.fb.group({
      search: [null]
    })
  }


 ngOnInit() {

 }

 selectValue(value) {
   this.stateForm.patchValue({"search": value});
   this.showSearchResult = false;
   this.selectedValue = value;

   this.isSelectValue = true;
 }
  hideDropdown() {
    this.showSearchResult = !this.showSearchResult;
  }

  openDropDown() {
    this.showSearchResult = false;
  }

  getSearchValue() {
    return this.stateForm.value.search;
  }

  //on focus 
  onFocus(e){
    this.isFocus = true;
  }

  //on Blur 
  onBlur(){
    this.isBlur = true;
  }

  //on keyup
  onKeyUp(word){
    this.wordLenght = word.length;
    this.isKeyup = true;
  }

  //on keydown
  onKeyDown(e){
    this.isKeydown = true;
  }

}
