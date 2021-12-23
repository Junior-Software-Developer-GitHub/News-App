import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../Models/Article';

@Injectable({
  providedIn: 'root'
})

export class EditArticleService {

  constructor(private http: HttpClient) {
   }
 
  public EditArticle(Article: any){
    Article.Id = window.location.href.substring(window.location.href.indexOf('=') + 1);
    return this.http.post("http://localhost:8080/edit", Article, {responseType:'text' as 'json'});
  }
  public GetArticles() : Observable<Article[]> { 
    return this.http.get<Article[]>("http://localhost:8080/get");
  };

  public GetArticleById(id:string) : Observable<Article>{
    return this.http.get<Article>("http://localhost:8080/getSingle/" + id);

  }
}
