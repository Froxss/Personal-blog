import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import {
  NgbPaginationModule,
  NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ScrollAnimateService } from '../../Services/scroll-animate/scroll-animate.service';
import { BlogService } from '../../Services/blog/blog.service';

@Component({
  selector: 'app-blogs-page',
  standalone: true,
  imports: [CommonModule, NgbPaginationModule, NgbAlertModule],
  templateUrl: './blogs-page.component.html',
  styleUrls: ['./blogs-page.component.scss'],
})
export class BlogsPageComponent implements OnInit, AfterViewInit {
  p: number = 1;
  blogs: any[] = [];

  constructor(
    private el: ElementRef,
    private scrollAnimateService: ScrollAnimateService,
    private router: Router,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe({
      next: (data) => {
        this.blogs = data;

        this.blogs.sort(
          (a, b) =>
            new Date(b.createDate).getTime() - new Date(a.createDate).getTime()
        );
      },
      error: (err) => {
        console.error('Hata:', err);
      },
    });
    this.p = 1;
  }

  ngAfterViewInit() {
    this.scrollAnimateService.initIntersectionObserver(this.el);
  }

  navigateToDetail(id: number) {
    this.router.navigate(['/blogs', id]);
  }
}
