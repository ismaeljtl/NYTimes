import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../components/components.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { CategoriesComponent } from './categories/categories.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    NgxPaginationModule
  ]
})
export class PagesModule { }
