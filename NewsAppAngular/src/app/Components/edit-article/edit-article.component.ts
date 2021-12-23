import { Component, Injectable, OnInit } from '@angular/core';
import { EditArticleService } from 'src/app/Services/edit-article-service';
import { ShowArticleService } from 'src/app/Services/show-article-service';
import {Article} from '../../Models/Article'

declare function checkFields() : boolean

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class EditArticleComponent implements OnInit {
  
  public article: Article = new Article("","","","", new Date(2020, 1, 1), new Date(2020, 1, 1))
  message : any;
  articles: Article[] = [];
  constructor(private service:EditArticleService, private showService:ShowArticleService) { }

  public ngOnInit() {
   this.GetSingleArticle();
  } 

   sleep(ms : any) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  public async Edit(){
     if(checkFields()){
      let resp = this.service.EditArticle(this.article);
      resp.subscribe((data: any)=>this.message=data);
      await this.sleep(2000);
      window.location.href ="http://localhost:4200/";
     }
    else 
      console.log("Error");
  }

  public GetSingleArticle() {
      return this.service.GetArticleById(window.location.href.substring(window.location.href.indexOf('=') + 1)).subscribe(response => this.article = response);
  }
}
