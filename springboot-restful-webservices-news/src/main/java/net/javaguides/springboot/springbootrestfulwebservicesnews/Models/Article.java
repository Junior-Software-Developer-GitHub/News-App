package net.javaguides.springboot.springbootrestfulwebservicesnews.Models;

import java.time.LocalDate;
import java.util.UUID;

public class Article {
    public UUID Id;
    public String Title;
    public String Subtitle;
    public String Content;
    public LocalDate PublishedDate;
    public LocalDate CreatedDate;

   public Article(){
        Id = UUID.randomUUID();
        Title = Subtitle = Content = "";
        PublishedDate = CreatedDate = LocalDate.MIN;
    }
    public Article(UUID id, String title, String subtitle, String content, LocalDate publishedDate, LocalDate createdDate){
       Id = id;
       Title = title;
       Subtitle = subtitle;
       Content = content;
       PublishedDate = publishedDate;
       CreatedDate = createdDate;
    }
}
