import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollAnimateService {
  private observer!: IntersectionObserver;

  constructor() {}

  initIntersectionObserver(el: ElementRef) {
    const elements = el.nativeElement.querySelectorAll('.animate-on-scroll') as NodeListOf<HTMLElement>;

    elements.forEach((element, index) => {
      const delay = index * 300; // Her bir öğe için 300ms gecikme

      // Animasyon gecikmesini CSS ile ayarlayın
      element.style.transitionDelay = `${delay}ms`;

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            if (!target.classList.contains('animated')) {
              target.classList.add('animate');
              target.classList.add('animated'); // Animasyonun yapıldığını işaretleyin
            }
          }
        });
      }, { threshold: 0.5 });

      this.observer.observe(element);
    });
  }
}
