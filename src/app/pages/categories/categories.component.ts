import { Component, OnInit } from '@angular/core';
import { categoryResponse } from 'src/app/models/categoryResponse';
import { Categories } from 'src/app/models/categories';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  loading: boolean = false;
  categories: Categories[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  async getCategories() {
    this.loading = true;
    try {
      const data: categoryResponse = await this.apiService.getCategories();
      this.categories = data.results;
    } catch (error) {
      alert('An error has occurred, please try again.');
      console.log(error);
    }
    this.loading = false;
  }

}
