import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  ApiUrl:string ="https://localhost:44382/api/carImages/";

  constructor(private httpClient:HttpClient) { }

  getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = this.ApiUrl+"getimagebycarid?carId="+carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }

  getAllCarImages():Observable<ListResponseModel<CarImage>>{
    let newPath = this.ApiUrl+"getall"
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }

  add(image:FormData):Observable<ResponseModel> {
    let newPath = this.ApiUrl + "add";
    return this.httpClient.post<ResponseModel>(newPath, image );
  }

}
