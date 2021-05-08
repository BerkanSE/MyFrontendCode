import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImageAddComponent } from './components/image-add/image-add.component';

import { RentalComponent } from './components/rental/rental.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  {path: 'rentals', component: RentalComponent },
  {path: 'customers', component: CustomerComponent},

  {path:"", pathMatch:"full", component:CarComponent},
  {path:"cars", component:CarComponent},
     
  {path: "cars/:carId", component:CarDetailComponent},
  //{path: "filter/:brandId/:colorId", component:CarComponent},
  {path:"cars/operation/add", component:CarAddComponent},
  
  {path :"image/:carId", component : ImageAddComponent},
  {path:"images/operation/add", component : ImageAddComponent},

  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"brands/add", component:BrandAddComponent},

  {path:"cars/color/:colorId", component:CarComponent},
  {path:"colors/add", component:ColorAddComponent},

  {path:"rental/add/:carId", component: RentalComponent},
  //{path: '**', redirectTo: 'cars', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
