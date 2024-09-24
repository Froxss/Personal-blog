import { AfterViewInit, Component, ElementRef } from '@angular/core';
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
export class BlogsPageComponent implements AfterViewInit {
  p: number = 1;
  posts: any[] = [];

  constructor(
    private el: ElementRef,
    private scrollAnimateService: ScrollAnimateService,
    private router: Router,
    private blogService: BlogService
  ) {
    this.posts = this.blogService.getPosts();
  }

  ngAfterViewInit() {
    this.scrollAnimateService.initIntersectionObserver(this.el);
  }

  navigateToDetail(id: number) {
    this.router.navigate(['/blogs', id]);
  }
}
