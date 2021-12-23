import { stringify } from "@angular/compiler/src/util";

export class Article{
   
    Id!: string;
    Title!: string; 
    Subtitle!: string;
    Content!: string;
    PublishedDate!: Date;
    CreatedDate!: Date;

    constructor(
        Id:string,
        Title:string,
        Subtitle:string,
        Content:string,
        PublishedDate:Date,
        CreatedDate:Date){}  
}