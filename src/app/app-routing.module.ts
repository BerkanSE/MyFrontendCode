import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { FooterComponent } from './components/footer/footer.component';

import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:CarComponent},
  //{path:"footer", component:FooterComponent},
  //{path:"cars", component:CarComponent},
  {path:"cars", 
  component:CarComponent,
  children: [
    {
      path: 'cars',
      component: BrandComponent,
    },
    {
      path: 'cars',
      component: ColorComponent,
    }
    ] },
  //{path:"car/:carId", component:OnecardetailComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/color/:colorId", component:CarComponent},
  //{path:"cars/details/:carId", component:CarDetailComponent},
  
  //{path:"rental/:carId",component:RentalComponent},
  //{path:"car/rental/:carId",component:RentalComponent}
  {path:"car/:carId", component:CarDetailComponent}
  
  // {path:"colors", component:ColorComponent},
  //{path:"customers", component:CustomerComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
