import { Component } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BlogService } from '../../Services/blog/blog.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  templateUrl: './admin.component.html',
  imports: [QuillModule, FormsModule, ReactiveFormsModule, MatInputModule],
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  blogTitle: string = '';
  blogContent: string = '';

  constructor(private blogService: BlogService) {}

  saveBlog() {
    const currentDate = new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });

    this.blogService.addPost(this.blogTitle, currentDate);

    this.blogTitle = '';
    this.blogContent = '';
  }
}
