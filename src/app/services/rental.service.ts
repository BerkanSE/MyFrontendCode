import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalDetails } from '../models/rentalDetails';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44382/api/rentals/getrentaldetails";

  constructor(private httpClient:HttpClient) { }

  getRentalsDetails():Observable<ListResponseModel<RentalDetails>>{
    return this.httpClient.get<ListResponseModel<RentalDetails>>(this.apiUrl)
  }


}