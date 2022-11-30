import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private urlToPost = "http://localhost:3000/posts";
  constructor(private _httpClient: HttpClient) { }
  
  getPosts() : Observable<Post[]>{
    return this._httpClient.get<Post[]>(this.urlToPost);
  }

  buscarPorId(id: String): Observable<Post> {
    const url = `${this.urlToPost}/${id}`
    return this._httpClient.get<Post>(url);
  }

  criarPost(post: Post): Observable<Post> {
    return this._httpClient.post<Post>(this.urlToPost, post);
  }

  editarPost(post: Post): Observable<Post> {
    const url = `${this.urlToPost}/${post.id}`;
    return this._httpClient.put<Post>(url, post);
  }
}
