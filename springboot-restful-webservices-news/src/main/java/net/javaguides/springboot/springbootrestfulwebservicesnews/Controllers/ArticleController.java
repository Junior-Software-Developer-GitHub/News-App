package net.javaguides.springboot.springbootrestfulwebservicesnews.Controllers;

import net.javaguides.springboot.springbootrestfulwebservicesnews.Models.Article;
import net.javaguides.springboot.springbootrestfulwebservicesnews.Services.ArticleService;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "*")
public class ArticleController {

    private final ArticleService _articleService;

    public ArticleController(){
        _articleService = new ArticleService();
    }

    @PostMapping("/add")
    public List<Article> Add(@RequestBody Article article){
        _articleService.Add(article);
        return _articleService.GetArticleList();
    }
    
    @GetMapping("/get")
    public List<Article> Get(){
       return _articleService.GetArticleList();
    }

    @DeleteMapping("/delete/{id}")
    public void Delete(@PathVariable String id){
        _articleService.Delete(id);
    }

    @PostMapping("/edit")
    public List<Article> Edit(@RequestBody Article article){
        _articleService.Edit(article);
        return _articleService.GetArticleList();
    }

    @GetMapping("/getSingle/{id}")
    public Optional<Article> GetSingleArticle(@PathVariable String id){
       return _articleService.GetArticleById(id);
    }
}
