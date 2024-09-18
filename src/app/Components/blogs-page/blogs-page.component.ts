import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import {
  NgbPaginationModule,
  NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ScrollAnimateService } from '../../services/scroll-animate.service';

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
    // Listeye daha fazla veri ekleyin
    {
      title: 'New project: Logology',
      date: 'Oct 30',
      url: 'https://angezanetti.com/posts/logology-meaningful-logos-for-startups/',
    },
    {
      title: 'Develop a Wordpress Theme locally With Docker',
      date: 'Oct 6',
      url: 'https://angezanetti.com/posts/develop-wordpress-theme-with-docker/',
    },
    {
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
      url: 'https://angezanetti.com/posts/how-to-install-openvpn/',
    },
    {
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
      url: 'https://angezanetti.com/posts/how-to-install-openvpn/',
    },
    {
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
      url: 'https://angezanetti.com/posts/how-to-install-openvpn/',
    },
    {
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
      url: 'https://angezanetti.com/posts/how-to-install-openvpn/',
    },
    {
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
      url: 'https://angezanetti.com/posts/how-to-install-openvpn/',
    },
    {
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
      url: 'https://angezanetti.com/posts/how-to-install-openvpn/',
    },
    {
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
      url: 'https://angezanetti.com/posts/how-to-install-openvpn/',
    },
    {
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
      url: 'https://angezanetti.com/posts/how-to-install-openvpn/',
    },
    {
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
      url: 'https://angezanetti.com/posts/how-to-install-openvpn/',
    },
    {
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
      url: 'https://angezanetti.com/posts/how-to-install-openvpn/',
    },
    {
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
      url: 'https://angezanetti.com/posts/how-to-install-openvpn/',
    },
    {
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
      url: 'https://angezanetti.com/posts/how-to-install-openvpn/',
    },
    {
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
      url: 'https://angezanetti.com/posts/how-to-install-openvpn/',
    },
    {
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
      url: 'https://angezanetti.com/posts/how-to-install-openvpn/',
    },
    {
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
      url: 'https://angezanetti.com/posts/how-to-install-openvpn/',
    },
    {
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
      url: 'https://angezanetti.com/posts/how-to-install-openvpn/',
    },
    {
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
      url: 'https://angezanetti.com/posts/how-to-install-openvpn/',
    },
    {
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
      url: 'https://angezanetti.com/posts/how-to-install-openvpn/',
    },
    {
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
      url: 'https://angezanetti.com/posts/how-to-install-openvpn/',
    },
    {
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
      url: 'https://angezanetti.com/posts/how-to-install-openvpn/',
    },
    {
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
      url: 'https://angezanetti.com/posts/how-to-install-openvpn/',
    },
    {
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
      url: 'https://angezanetti.com/posts/how-to-install-openvpn/',
    },
    {
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
      url: 'https://angezanetti.com/posts/how-to-install-openvpn/',
    },
    {
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
      url: 'https://angezanetti.com/posts/how-to-install-openvpn/',
    },
    {
      title: 'Why you need a VPN and how to install one',
      date: 'Jun 15',
      url: 'https://angezanetti.com/posts/how-to-install-openvpn/',
    },
    // Daha fazla post ekleyin
  ];

  constructor(
    private el: ElementRef,
    private scrollAnimateService: ScrollAnimateService
  ) {}

  ngAfterViewInit() {
    this.scrollAnimateService.initIntersectionObserver(this.el);
  }
}
