import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { ScrollAnimateService } from '../../Services/scroll-animate/scroll-animate.service';
@Component({
  selector: 'app-about-me',
  standalone: true,
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements AfterViewInit {

  constructor(private el: ElementRef, private scrollAnimateService: ScrollAnimateService) {}

  ngAfterViewInit() {
    this.scrollAnimateService.initIntersectionObserver(this.el);
  }
}
