import { Component, OnInit } from '@angular/core';
import { ShowArticleService } from 'src/app/Services/show-article-service';
import { Article } from 'src/app/Models/Article';

declare function filteredArticlesHeader(length: number) : any
declare function AreYouSureJS() : boolean
  

@Component({
  selector: 'app-show-articles',
  templateUrl: './show-articles.component.html',
  styleUrls: ['./show-articles.component.css']
})

export class ShowArticlesComponent implements OnInit {

  articles: Article[] = [];
  filteredArticles : Article[] = [];
  
  constructor(private showArticleService: ShowArticleService) { }

  ngOnInit(): void {
    this.Get();
  }

  public Get(){
     this.showArticleService.GetArticles().subscribe(response => this.articles = response);
  }

  public Edit(id:string) : void{
    window.location.href = "http://localhost:4200/edit-article?id=" + id;
  }

  public async Delete(id:string){
    if(AreYouSureJS()){
      await this.showArticleService.DeleteArticle(id);
      window.location.href = "http://localhost:4200/";
    }
    else 
      return;
  }

  public OnSubmit(startDate : string, endDate : string){   
    this.showArticleService.GetArticles().subscribe(response => this.articles = response);
    this.filteredArticles = this.articles.filter((item: Article) => new Date(item.CreatedDate) >= 
      new Date(startDate) && 
      new Date(item.CreatedDate) <= 
      new Date(endDate)
      ); 
      filteredArticlesHeader(this.filteredArticles.length);
  }
  
}
