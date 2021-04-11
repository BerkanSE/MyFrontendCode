import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers:Customer[]=[];
  dataLoaded=false;
 /*  currentCustomer:Customer
  nullBrand: Customer; */
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer(){
    this.customerService.getCustomers().subscribe(response=>{
      this.customers = response.data;
      this.dataLoaded = true;
    })
  }

  /* setCurrentCustomer(customer:Customer){
    this.currentCustomer= customer;
  }

  getCurrentCustomerClass(customer:Customer){
    if(customer == this.currentCustomer){
      return "list-group-item active"
      
    }else{
      return "list-group-item"
    }
  }

  getAllCustomerClass(){
    if (!this.currentCustomer) {
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
    
  }

  resetCurrentCustomer(){
    this.currentCustomer = this.nullBrand
  } */




}
