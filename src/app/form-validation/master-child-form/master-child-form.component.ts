import { Component, OnInit } from '@angular/core';
import { Product } from './Product.model';

@Component({
  selector: 'app-master-child-form',
  templateUrl: './master-child-form.component.html',
  styleUrls: ['./master-child-form.component.css']
})
export class MasterChildFormComponent implements OnInit {

  private productList: Product[] = new Array();

  private customerOptions: any = {
    "name": {
      'size': {
        'min': 3,
        'max': 20,
        'message': 'Customer Name is required to be between 3 and 20 characters.'
      },
      "required": {
        "message": "Customer Name required",
      },
    },
    "mobileNumber": {
      'size': {
        'min': 11,
        'max': 11,
        'message': 'Customer Name is should to be 11 characters.'
      },
      "required": {
        "message": "Mobile Number required",
      },
    },
    "address": {
      "required": {
        "message": "Address required",
      },
    },
    "productName": {
      "required": {
        "message": "Product Name required",
      },
    },
    "productPrice": {
      "required": {
        "message": "Product Price required",
      },
    },
    "productQuantity": {
      "required": {
        "message": "Product Quantity required",
      },
    },
    "total": {
      "required": {
        "message": "total required",
      },
    },
    message: "tooltip"
  }

  constructor() { }

  ngOnInit() {
  }

  addNewProduct(form) {
    console.log(form);
    
    let _validationResult = form.validate();
    if(_validationResult.isValid) {
      this.productList.push(new Product());
    }
    console.log(_validationResult);
  }
  addProduct(form) {
    let _validationResult = form.validate();
    if(_validationResult.isValid) {
      this.productList.push(new Product());
    }
    console.log(_validationResult);
  }
  saveCustomer(form) {
    let _validationResult = form.validate();
    console.log(_validationResult);
  }
  resetCustomer(form) {
    let _validationResult = form.reset();
    console.log(_validationResult);
  }

}
