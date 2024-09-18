import { AfterViewInit, Component, ElementRef } from '@angular/core';
import {
  NgbPaginationModule,
  NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ScrollAnimateService } from '../../services/scroll-animate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs-page',
  standalone: true,
  imports: [CommonModule, NgbPaginationModule, NgbAlertModule],
  templateUrl: './blogs-page.component.html',
  styleUrls: ['./blogs-page.component.css'],
})
export class BlogsPageComponent implements AfterViewInit {
  p: number = 1;
  posts = [
    { id: 1, title: 'New project: Logology', date: 'Oct 30' },
    {
      id: 2,
      title: 'Develop a Wordpress Theme locally With Docker',
      date: 'Oct 6',
    },
    {
      id: 3,
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
    },
    {
      id: 4,
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
    },
    {
      id: 5,
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
    },
    {
      id: 6,
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
    },
    {
      id: 7,
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
    },
    {
      id: 8,
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
    },
    {
      id: 9,
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
    },
    {
      id: 10,
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
    },
    {
      id: 11,
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
    },
    {
      id: 12,
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
    },
    {
      id: 13,
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
    },
    {
      id: 14,
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
    },
    {
      id: 15,
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
    },
    {
      id: 16,
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
    },
    {
      id: 17,
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
    },
    {
      id: 18,
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
    },
    {
      id: 19,
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
    },
    {
      id: 20,
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
    },
  ];

  constructor(
    private el: ElementRef,
    private scrollAnimateService: ScrollAnimateService,
    private router: Router
  ) {}

  ngAfterViewInit() {
    this.scrollAnimateService.initIntersectionObserver(this.el);
  }

  navigateToDetail(id: number) {
    this.router.navigate(['/blog', id]);
  }
}
