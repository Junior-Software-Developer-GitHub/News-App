package net.javaguides.springboot.springbootrestfulwebservicesnews.Services;

import net.javaguides.springboot.springbootrestfulwebservicesnews.Models.Article;
import net.javaguides.springboot.springbootrestfulwebservicesnews.Services.Interfaces.IArticleService;
import java.time.LocalDate;
import java.util.*;

public class ArticleService implements IArticleService {

    public List<Article> articleList = new ArrayList<>() {{
        add(new Article(UUID.randomUUID(), "a", "a", "a", LocalDate.of(2018, 1, 1), LocalDate.of(2011, 1, 1)));
        add(new Article(UUID.randomUUID(), "b", "b", "b", LocalDate.of(2019, 2, 12), LocalDate.of(2000, 1, 1)));
        add(new Article(UUID.randomUUID(), "c", "c", "c", LocalDate.of(2000, 6, 23), LocalDate.of(1998, 1, 1)));
        add(new Article(UUID.randomUUID(), "d", "d", "d", LocalDate.of(2021, 8, 5), LocalDate.of(2004, 1, 1)));
        add(new Article(UUID.randomUUID(), "e", "e", "e", LocalDate.of(2011, 2, 6), LocalDate.of(2021, 1, 1)));
        add(new Article(UUID.randomUUID(), "f", "f", "f", LocalDate.of(2004, 3, 15), LocalDate.of(2016, 1, 1)));
        add(new Article(UUID.randomUUID(), "g", "g", "g", LocalDate.of(2016, 12, 3), LocalDate.of(2019, 1, 1)));
        add(new Article(UUID.randomUUID(), "h", "h", "h", LocalDate.of(1985, 9, 27), LocalDate.of(2020, 1, 1)));
        add(new Article(UUID.randomUUID(), "j", "j", "j", LocalDate.of(2021, 11, 12), LocalDate.of(1967, 1, 1)));
        add(new Article(UUID.randomUUID(), "k", "k", "k", LocalDate.of(2020, 11, 5), LocalDate.of(1997, 1, 1)));
        add(new Article(UUID.randomUUID(), "l", "l", "l", LocalDate.of(2021, 1, 7), LocalDate.of(1989, 1, 1)));
        add(new Article(UUID.randomUUID(), "m", "m", "m", LocalDate.of(1997, 5, 8), LocalDate.of(2002, 1, 1)));
    }};


    @Override
    public List<Article> GetArticleList() {
        return articleList;
    }

    @Override
    public void Add(Article article) {
        articleList.add(article);
    }

    @Override
    public void Edit(Article article) {
      ChangeObject(Objects.requireNonNull(articleList.stream().filter(c -> c.Id.toString().equals(article.Id.toString())).findAny().orElse(null)), article);
    }

    @Override
    public void Delete(String id) {
        articleList.removeIf(e->e.Id.toString().equals(id));
    }

    @Override
    public void ChangeObject(Article  articleToBeChanged, Article articleFromHtml) {
        articleToBeChanged.Title = articleFromHtml.Title;
        articleToBeChanged.Subtitle = articleFromHtml.Subtitle;
        articleToBeChanged.Content = articleFromHtml.Content;
        articleToBeChanged.CreatedDate = articleFromHtml.CreatedDate;
        articleToBeChanged.PublishedDate = articleFromHtml.PublishedDate;

    }

    @Override
    public Optional<Article> GetArticleById(String id) {
       return  Objects.requireNonNull(articleList.stream().filter(c -> c.Id.toString().equals(id))).findFirst();
    }

}
