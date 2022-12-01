import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostResponse } from '../model/post_response';

@Injectable({
  providedIn: 'root'
})
export class PostResponseService {

  //private readonly urlToPost = "http://localhost:3000/posts_responses";
  private readonly urlToPost = 'https://dev-traduo-db.herokuapp.com/posts_responses';
  constructor(private _httpClient: HttpClient) { }
  
  getPosts() : Observable<PostResponse[]>{
    return this._httpClient.get<PostResponse[]>(this.urlToPost);
  }

  buscarPorId(id: String): Observable<PostResponse> {
    const url = `${this.urlToPost}/${id}`
    return this._httpClient.get<PostResponse>(url);
  }

  criarPost(post: PostResponse): Observable<PostResponse> {
    return this._httpClient.post<PostResponse>(this.urlToPost, post);
  }

  editarPost(post: PostResponse): Observable<PostResponse> {
    const url = `${this.urlToPost}/${post.id}`;
    return this._httpClient.put<PostResponse>(url, post);
  }
}
