package net.javaguides.springboot.springbootrestfulwebservicesnews.Services.Interfaces;

import net.javaguides.springboot.springbootrestfulwebservicesnews.Models.Article;

import java.util.List;
import java.util.Optional;

public interface IArticleService {
    List<Article> GetArticleList();
    void Add(Article article);
    void Edit(Article article);
    void Delete(String id);
    void ChangeObject(Article articleToBeChanged, Article articleFromHtml);
    Optional<Article> GetArticleById(String id);
}