import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetails } from 'src/app/models/rentalDetails';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals:RentalDetails[]=[];
  dataLoaded=false;
  subTitle:string= "";

  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentalsDetails();
  }

  getRentalsDetails(){
    this.rentalService.getRentalsDetails().subscribe(response=>{
      this.rentals = response.data;
      this.dataLoaded = true;
    })
  }

  getFullName(rental:RentalDetails){
    return rental.userName;
  }

  
  

}
