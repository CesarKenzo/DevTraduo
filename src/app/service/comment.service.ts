import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../model/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private urlToComment = "http://localhost:3000/postComment";
  constructor(private _httpClient: HttpClient) { }
  
  getComment() : Observable<Comment[]>{
    return this._httpClient.get<Comment[]>(this.urlToComment);
  }

  buscarPorId(id: String): Observable<Comment> {
    const url = `${this.urlToComment}/${id}`
    return this._httpClient.get<Comment>(url);
  }

  criarComment(comment: Comment): Observable<Comment> {
    return this._httpClient.post<Comment>(this.urlToComment, comment);
  }

  editarComment(comment: Comment): Observable<Comment> {
    const url = `${this.urlToComment}/${comment.id}`;
    return this._httpClient.put<Comment>(url, comment);
  }
}