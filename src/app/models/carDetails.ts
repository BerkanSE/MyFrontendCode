import { CarImage } from "./carImage";

export interface CarDetails{
    carId:number,
    brandName:string,
    colorName:string,
    modelYear:number,
    dailyPrice:number,
    description:string,
    carName:string,
    colorId:number,
    brandId:number,
    //images: CarImage[];
    imagePath:string,
    
}