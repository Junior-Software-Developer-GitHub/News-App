import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowArticlesComponent } from './Components/show-articles/show-articles.component';
import { EditArticleComponent } from './Components/edit-article/edit-article.component';
import { ShowArticleService } from './Services/show-article-service';
import { EditArticleService } from './Services/edit-article-service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShowArticlesComponent,
    EditArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ShowArticleService,EditArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
