import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../Models/Article';

@Injectable({
  providedIn: 'root'
})
export class ShowArticleService {

  constructor(private http: HttpClient) { }

  public GetArticles() : Observable<Article[]> { 
    return this.http.get<Article[]>("http://localhost:8080/get");
  };

  public async DeleteArticle(id:string){
    return await this.http.delete("http://localhost:8080/delete/" + id).toPromise();

  }

}
