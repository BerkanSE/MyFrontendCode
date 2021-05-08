import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CarDetails } from '../models/carDetails';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarDetailsService {

  apiUrl:string = 'https://localhost:44382/api/';

  constructor(private httpClient:HttpClient) { }

  getCarsDetails():Observable<ListResponseModel<CarDetails>>{
    let newPath = this.apiUrl + "cars/getcardetails";
    return this.httpClient
    .get<ListResponseModel<CarDetails>>(newPath);
  }

  getCarsDetailsByBrandId(brandId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath = this.apiUrl + "cars/getdetailbybrandid?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  getCarsDetailsByColorId(colorId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath = this.apiUrl + "cars/getdetailbycolorid?colorId="+colorId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

   getCarsDetailsByColorIdandBrandId(brandId:number,colorId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath = this.apiUrl + "cars/getdetailbybrandandcolorid?brandId="+brandId +"&colorId="+colorId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath); 
    
  } 

  /* getCarByCarId(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcarbycarid?carId="+carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  } */

  getCarDetailsByCarId(carId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath=this.apiUrl+"cars/getcardetailsbycarid?carId="+carId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  /* add(car:CarDetails):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl +"cars/add",car) 
  }

  update(car:CarDetails):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl +"cars/update",car) 
  } */




}


