import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { newsResponse } from 'src/app/models/newsResponse';
import { Result } from 'src/app/models/result';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading: boolean = false;
  category: string = '';
  news: Result[] = [];
  filteredNews: Result[] = [];
  totalNews: number = 0;
  p: number = 1;
  offset: number = 0;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.category = routeParams.get('category')!.toString();
    this.getData();
  }

  async getData() {
    this.loading = true;
    try {
      const data: newsResponse = await this.apiService.getNews(this.category, this.offset);
      this.news = data.results;
      this.filteredNews = this.news;
      this.totalNews = data.num_results + this.offset;
    } catch (error) {
      // alert('An error has occurred, please try again.');
      console.log(this.news)
      console.log(error);
    }
    this.loading = false;
  }

  pageChanged(page: number) {
    this.p = page;
    // we have to substract 1 to page because the first page have an offset of 0
    this.offset = 30 * (page - 1);
    this.getData();
  }

  filter(e: any) {
    const value = e.target.value;
    
    if (this.news.length !== 0) {
      if (value === '') {
        this.filteredNews = this.news;
      } else {
        this.filteredNews = this.news.filter(newArticle => {
          return newArticle.title.toLowerCase().includes(value.toLowerCase()) 
        }).sort();
      }
    }
  }

}
