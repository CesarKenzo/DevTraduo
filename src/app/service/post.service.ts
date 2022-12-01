import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post';
import { PostCreation } from '../model/postcreation';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  //private readonly urlToPost = "http://localhost:3000/posts";
  private readonly urlToPost = 'https://dev-traduo-db.herokuapp.com/posts';
  constructor(private _httpClient: HttpClient) { }
  
  getPosts() : Observable<PostCreation[]>{
    return this._httpClient.get<PostCreation[]>(this.urlToPost);
  }

  getPostByUserId(id: String): Observable<PostCreation> {
    const url = `${this.urlToPost}/${id}`;
    return this._httpClient.get<PostCreation>(url);
  }

  criarPost(id: String, post: PostCreation): Observable<PostCreation> {
    const url = `${this.urlToPost}/${id}`;
    return this._httpClient.put<PostCreation>(url, post);
  }

  criarFirstPost(post: PostCreation){
    return this._httpClient.post<PostCreation>(this.urlToPost, post);
  }

  editarPost(id: String, post: PostCreation): Observable<PostCreation> {
    const url = `${this.urlToPost}/${id}`;
    return this._httpClient.put<PostCreation>(url, post);
  }

  editarPosts(id: Number, post: Post): Observable<Post> {
    const url = `${this.urlToPost}/${id}`;
    return this._httpClient.put<Post>(url, post);
  }

  criarPosts(post: Post) : Observable<Post>{
    const url = this.urlToPost;
    return this._httpClient.post<Post>(url, post);
  }

  listar() : Observable<Post[]> {
    return this._httpClient.get<Post[]>(this.urlToPost);
  }

  getPostById(id: number): Observable<Post> {
    const url = `${this.urlToPost}/${id}`;
    return this._httpClient.get<Post>(url);
  }
}
