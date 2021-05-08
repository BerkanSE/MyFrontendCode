import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { CarDetails } from 'src/app/models/carDetails';
import { Color } from 'src/app/models/color';
import { Filters } from 'src/app/models/filters';
import { BrandService } from 'src/app/services/brand.service';
import { CarDetailsService } from 'src/app/services/car-details.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.css']
})
export class CarFilterComponent implements OnInit {

  //cars:CarDetails[]=[];
  brands:Brand[]=[];
  colors:Color[]=[]; 

  brandFilter:number=0;
  colorFilter:number=0;
  




  constructor(private brandService:BrandService,
    private colorService:ColorService,
    private router:Router,
    private carDetailsService:CarDetailsService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.brandFilter =Number(this.activatedRoute.snapshot.paramMap.get('brandId'));
    this.colorFilter = Number(this.activatedRoute.snapshot.paramMap.get('colorId'));
    this.getBrands();
    this.getColors();
  }

  /* setRoute() {
    if (Filters['brandId'] && Filters['colorId'])
      this.router.navigate([
        `cars/brand/${Filters.brandId}/color/${Filters.colorId}`,
      ]);
    else if (Filters['brandId'])
      this.router.navigate([`cars/brand/${Filters.brandId}`]);
    else if (Filters['colorId'])
      this.router.navigate([`cars/color/${Filters.colorId}`]);
    else this.router.navigate([`cars/`]);
  }
  clearRoute() {
    this.router.navigate([`cars/`]);
  } */


 /*  filterCars(){
    if(this.selectedBrand>0&& this.selectedColor==0)
    {
      let link="/cars/brand/"+this.selectedBrand;
      window.location.href=link;
    }
    if(this.selectedColor>0&& this.selectedBrand==0)
    {

      let link="/cars/color/"+this.selectedColor;
      window.location.href=link;
    }
    if(this.selectedBrand>0&& this.selectedColor>0)
    {
      let link="cars/getcardetailsbycolorIdorbrandId/brand/"+this.selectedBrand+"/color/"+this.selectedColor;
     window.location.href=link;
    }

    }
   */
  

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data;
      
    })
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      
    });
}

  clearFilter(){
    this.brandFilter=0;
    this.colorFilter=0;
  }

  /* onBrandSelected(value: number) {
    this.selectedBrand=value;
  }
  onColorSelected(value: number) {
    this.selectedColor=value;
  }
 */
  
} 

