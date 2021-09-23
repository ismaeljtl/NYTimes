import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = environment.apiUrl;
  apiKey = environment.apiKey;

  constructor(private http: HttpClient) {
  }

  getCategories(): any {
    return this.http.get(
      this.url + `/news/v3/content/section-list.json?api-key=` + this.apiKey
    ).toPromise();
  }

  getNews(category: string, offset: number): any {
    return this.http.get(
      this.url + `/news/v3/content/nyt/${category}.json?api-key=` + this.apiKey, {
        params: new HttpParams().set('limit', 30).set('offset', offset)
      }
    ).toPromise();
  }
}
