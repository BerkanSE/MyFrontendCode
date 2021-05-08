import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalDetails } from '../models/rentalDetails';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44382/api/rentals/getrentaldetails";

  constructor(private httpClient:HttpClient) { }

  getRentalsDetails():Observable<ListResponseModel<RentalDetails>>{
    let newPath = this.apiUrl + "rentals/getrentaldetails";
    return this.httpClient.get<ListResponseModel<RentalDetails>>(newPath)
  }

  add(rental:RentalDetails):Observable<ResponseModel>{
    let newPath = this.apiUrl + "rentals/add";
    return this.httpClient.post<ResponseModel>(this.apiUrl,rental)
  }


}
