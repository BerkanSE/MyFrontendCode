import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


import { CarDetails } from 'src/app/models/carDetails';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailsService } from 'src/app/services/car-details.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CartService } from 'src/app/services/cart.service';
import { RentalService } from 'src/app/services/rental.service';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  //carDetails:CarDetails[] = [];
  car:CarDetails[] = [];
  carDetails:CarDetails;
  //currentCar:CarDetails;
  //nullCar:CarDetails;
  carImg: CarImage[]= [];
  CurrentImgId:number;
  dataLoaded = false;
  
  //filterText="";
  ApiUr ="https://localhost:44382/";

  constructor(private carDetailsService:CarDetailsService,
    private carImageService:CarImageService,
    private activatedRoute:ActivatedRoute,
    private rentalService:RentalService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarsDetailsByCarId(params["carId"]);
        this.getCarImagesByCarId(params["carId"]);
      }
    });
    //this.getCarsDetails();

  }

  getCarsDetailsByCarId(carId:number){
    this.carDetailsService.getCarDetailsByCarId(carId).subscribe(response=>{
      this.carDetails=response.data[0];
      //this.carImg=this.car[0].images.splice(1);
      //this.CurrentImgId=this.carImg[0].carImageId;
      //this.dataLoaded=true;
    })
  }

  getCarImagesByCarId(carId:number){
    this.carImageService.getCarImagesByCarId(carId).subscribe(response=>{
      this.carImg=response.data;
    })
  }


   /* prevBtn(){
    let countCarImg=this.carImg.length-1;
    let currentImgIndexNum:number=0;
    let currentImgId:number=this.CurrentImgId;

    this.carImg.forEach(function (img, i) {
      if (img.carImageId==currentImgId) {
        if (i-1>=0) {
          currentImgIndexNum=i-1;
        }else{
          currentImgIndexNum=countCarImg;
        }
      }
    });

    this.CurrentImgId=this.carImg[currentImgIndexNum].carImageId;

  }

  nextBtn(){
    let countCarImg=this.carImg.length-1;
    let currentImgIndexNum:number=0;
    let currentImgId:number=this.CurrentImgId;

    this.carImg.forEach(function (img, i) {
      if(img.carImageId==currentImgId){
        if(i+1<=countCarImg){
          currentImgIndexNum=i+1;
        }else{
          currentImgIndexNum=0;
        }
      }
    });
    
    this.CurrentImgId=this.carImg[currentImgIndexNum].carImageId;
  }

  setCurrentImg(imgId:number){
    this.CurrentImgId=imgId;
  }
  getCurrentCarouselmenuClass(imgId:number){
    if(this.CurrentImgId==imgId){
      return "carousel-menu active";
    }else{ 
      return "carousel-menu";
    }
  }

  getCurrentCarouselClass(imgId:number){
    if(this.CurrentImgId==imgId){
      return "carousel-item active";
    }else{ 
      return "carousel-item";
    }
  } */
 
  
  


  /* getCarsDetails(){
    this.carDetailsService.getCarsDetails().subscribe(response=>{
      this.car = response.data;
      //this.dataLoaded = true;
    })
  }
/*
  getCarsDetailsByBrand(brandId:number){
    this.carDetailsService.getCarsDetailsByBrandId(brandId).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }

  getCarsDetailsByColor(colorId:number){
    this.carDetailsService.getCarsDetailsByColorId(colorId).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }
 */
  /* getCarsDetailsByColorandByBrand(brandId:number,colorId:number){
    this.carDetailsService.getCarsDetailsByColorIdandBrandId(brandId,colorId).subscribe(response=>{
      this.carDetails = response.data
      this.dataLoaded = true;
    })
  } */

  /* addToCart(carDetails:CarDetails){
    this.toastrService.success("Sepete eklendi",carDetails.carName)
    this.cartService.addToCart(carDetails);
  }  */
 /*  getCarByCarId(carId:number){
    this.carDetailsService.getCarByCarId(carId).subscribe(response=>{
      this.car=response.data
      this.dataLoaded=true;
  })
} */
  /* setCurrentCarDetails(nullCar:CarDetails){
    this.currentCar==nullCar;
  }
 */

  

}
