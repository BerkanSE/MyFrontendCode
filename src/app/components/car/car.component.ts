import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetails } from 'src/app/models/carDetails';
import { CarDetailsService } from 'src/app/services/car-details.service';
//import { CarDetails } from 'src/app/models/carDetails';


import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
  
})
export class CarComponent implements OnInit {
  
  //cars:Car[] = [];
  cars:CarDetails[] = [];
  //filterText="";
  //currentCar:CarDetails;
  //nullCar:CarDetails;

  dataLoaded = false;

  ApiUr= "https://localhost:44382/";


  
  constructor(//private carService:CarService,
     private carDetailsService:CarDetailsService,
     private activatedRoute:ActivatedRoute,
     private toastrService:ToastrService,
     private cartService:CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        
        this.getCarsDetailsByBrandId(params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarsDetailsByColorId(params["colorId"])
      }
      else{
        this.getCarsDetails();
      }
    })
  }

  getCarsDetails(){
    this.carDetailsService.getCarsDetails().subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    })
  }

  getCarsDetailsByColorId(colorId:number){
    this.carDetailsService.getCarsDetailsByColorId(colorId).subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    })
  }

  getCarsDetailsByBrandId(brandId:number){
    this.carDetailsService.getCarsDetailsByBrandId(brandId).subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    })

  }
  /* getCars(){
    this.carDetailsService.getCarsDetails().subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  } */

  /* getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }

    addToCart(car:Car){
    this.toastrService.success("Sepete eklendi",car.carName)
    this.cartService.addToCart(car);
  }   */

  /* setCurrentCar(car:Car){
    this.currentCar=this.nullCar;
  }

  getCurrentCarClass(carDetails:CarDetails){
    if(carDetails == this.currentCar){
      return "list-group-item  list-group-item-warning"
    }else{
      return "list-group-item"
    }
  }

  getAllCarsClass(){
    if(!this.currentCar){
      return "list-group-item list-group-item-warning"
    }else{
      return "list-group-item"
    }
  }

  resetCurrentCar(){
    this.currentCar=this.nullCar;
  } */


}
