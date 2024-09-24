import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private baseApiUrl = 'https://localhost:44326';
  constructor(private httpClient: HttpClient) {}
  getBlogs(): Observable<any> {
    return this.httpClient.get<any>(this.baseApiUrl + '/Blogs');
  }
}
