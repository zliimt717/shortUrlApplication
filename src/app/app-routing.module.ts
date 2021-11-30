import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ShortUlrListComponent } from './short-ulr-list/short-ulr-list.component';
import { StatisticIdComponent } from './statistic-id/statistic-id.component';
import { StatisticListComponent } from './statistic-list/statistic-list.component';
import { UrlFormComponent } from './url-form/url-form.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'urls',component:ShortUlrListComponent},
  {path:'addurl',component:UrlFormComponent},
  {path:'statistics',component:StatisticListComponent},
  {path:'statistics/:id',component:StatisticIdComponent}
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes),
  ReactiveFormsModule,
  FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
