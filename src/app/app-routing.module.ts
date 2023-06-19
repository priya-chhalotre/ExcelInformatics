import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { ServicesComponent } from './services/services.component';
import { CustomersComponent } from './customers/customers.component';
import { CareersComponent } from './careers/careers.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'company',component:CompanyComponent},
  {path:'services',component:ServicesComponent},
  {path:'customers',component:CustomersComponent},
  {path:'careers',component:CareersComponent},
  {path:'contactus',component:ContactusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
