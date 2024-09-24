import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private posts = [
    { id: 1, title: 'New project: Logology', date: 'Oct 30' },
    { id: 2, title: 'Develop a Wordpress Theme locally With Docker', date: 'Oct 6' },
    { id: 3, title: 'Why you need a VPN and how to install one', date: 'Jun 15' },
    // Diğer bloglar...
  ];

  getPosts() {
    return this.posts;
  }

  getPostById(id: number) {
    return this.posts.find(p => p.id === id);
  }

  addPost(title: string, date: string) {
    const newId = this.posts.length + 1;
    const newPost = { id: newId, title, date };
    this.posts.push(newPost);
  }
}
