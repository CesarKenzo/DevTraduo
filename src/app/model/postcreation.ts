import { Post } from "./post";

export class PostCreation {
    public id: string;
    public posts: Post[];

    constructor(id: string, posts: Post[]){
        this.id = id;
        this.posts = posts;
   }

   appendPost(post: Post){
    this.posts.push(post);
   }

   getLastPost(): number{
    let tmpPosts = Array.from(this.posts);
    let number = tmpPosts.pop()!.id;
    return number;
   }
}