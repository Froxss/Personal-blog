import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements AfterViewInit {
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.initIntersectionObserver();
  }

  private initIntersectionObserver() {
    const elements = this.el.nativeElement.querySelectorAll('.animate-on-scroll') as NodeListOf<HTMLElement>;

    elements.forEach((element, index) => {
      const delay = index * 300; // Her bir öğe için sıralı gecikme

      setTimeout(() => {
        this.observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).classList.add('animate');
            } else {
              (entry.target as HTMLElement).classList.remove('animate');
            }
          });
        }, { threshold: 0.5 });

        this.observer.observe(element);
      }, delay);
    });
  }
}
