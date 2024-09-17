import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { ScrollAnimateService } from '../../services/scroll-animate.service'; // Hizmeti içe aktarın

@Component({
  selector: 'app-about-me',
  standalone: true,
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements AfterViewInit {

  constructor(private el: ElementRef, private scrollAnimateService: ScrollAnimateService) {}

  ngAfterViewInit() {
    this.scrollAnimateService.initIntersectionObserver(this.el);
  }
}
