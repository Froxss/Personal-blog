import { Component, ElementRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ScrollAnimateService } from '../../Services/scroll-animate/scroll-animate.service';

@Component({
  selector: 'app-my-project',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './my-project.component.html',
  styleUrl: './my-project.component.scss',
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
