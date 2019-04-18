import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { CreateCustomerComponent } from './customer/create-customer.component';

const routes: Routes = [
  {path:'test', component: TestComponent},
  {path:'customer', component: CreateCustomerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
