import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  ApiUr:string ="https://localhost:44382/api/carImages/";

  constructor(private httpClient:HttpClient) { }

  getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = this.ApiUr+"getimagebycarid?carId="+carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }

  getAllCarImages():Observable<ListResponseModel<CarImage>>{
    let newPath = this.ApiUr+"getall"
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }

}
