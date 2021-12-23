import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditArticleComponent } from './Components/edit-article/edit-article.component';
import { ShowArticlesComponent } from './Components/show-articles/show-articles.component';

const routes: Routes = [
  {path:"",redirectTo:"show-articles", pathMatch:"full"},
  {path : "show-articles", component:ShowArticlesComponent},
  {path : "edit-article", component:EditArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
