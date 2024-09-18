import { Component, ElementRef } from '@angular/core';
import { ScrollAnimateService } from '../../services/scroll-animate.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-my-project',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './my-project.component.html',
  styleUrl: './my-project.component.css',
})
export class MyProjectComponent {
  constructor(
    private el: ElementRef,
    private scrollAnimateService: ScrollAnimateService
  ) {}

  ngAfterViewInit() {
    this.scrollAnimateService.initIntersectionObserver(this.el);
  }
}
