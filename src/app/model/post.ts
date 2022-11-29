export class Post {
    public id?: string;
    public title?: string;
    public createdBy?: string;
    public language?: string;
    public description?: string;
    public categories?: string[];
    public likes?: number;

    constructor(id: string, title: string, createdBy: string, language: string,
        description: string, categories: string[], likes: number){

       this.id = id;
       this.title = title;
       this.createdBy = createdBy;
       this.language = language;
       this.description = description;
       this.categories = categories;
       this.likes = likes;
   }
}