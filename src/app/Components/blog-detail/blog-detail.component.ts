import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../Services/blog/blog.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  templateUrl: './blog-detail.component.html',
  imports: [HttpClientModule],
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  post: any;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService, // BlogService'i enjekte et
    private router: Router
  ) {}

  ngOnInit() {
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    // this.post = this.blogService.getPostById(id);
    // // Eğer post bulunamazsa 404 sayfasına yönlendir
    // if (!this.post) {
    //   this.router.navigate(['/404']);
    // }
  }
}
