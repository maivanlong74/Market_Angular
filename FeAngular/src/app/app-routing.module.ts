import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/body/home/home.component';
import { ProductsComponent } from './Components/body/products/products.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'product', component: ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
