import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-image-add',
  templateUrl: './image-add.component.html',
  styleUrls: ['./image-add.component.css']
})
export class ImageAddComponent implements OnInit {

  carId:number

  images: CarImage[] = [];

  imageFile : any

  path = "https://localhost:44382/api/carImages/";

  constructor(private toastrService:ToastrService,
    private carImageService:CarImageService,
    private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder,
    private htppClient:HttpClient,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.carId = params["carId"]
        this.getCarImagesByCarId(params["carId"])
      }
      else{
        this.getAllCarImages();
      }
      
    });
  }

  getAllCarImages(){
    this.carImageService.getAllCarImages().subscribe((response)=>{
      this.images=response.data;
    })
  }

  getCarImagesByCarId(carId:number){
    this.carImageService.getCarImagesByCarId(carId).subscribe((response)=>{
      this.images=response.data;
    })
  }

  add(){
    const images: FormData = new FormData();
    images.append('carId', this.carId.toString());
    images.append('imageFile', this.imageFile, this.imageFile.name);

    
    this.carImageService.add(images).subscribe(response=>{
      this.toastrService.success(response.message)
      this.getCarImagesByCarId(this.carId)
    },responseError=>{
      this.toastrService.error(responseError.error.message);
      
    })
  

  }

  fileSelected(event:any) {
    this.imageFile = event.target.files[0]
    event.target.nextElementSibling.innerText=this.imageFile.name
  }


}
