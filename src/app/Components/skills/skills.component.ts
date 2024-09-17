import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { ScrollAnimateService } from '../../services/scroll-animate.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent implements AfterViewInit {
  constructor(
    private el: ElementRef,
    private scrollAnimateService: ScrollAnimateService
  ) {}

  ngAfterViewInit() {
    this.scrollAnimateService.initIntersectionObserver(this.el);
  }

  skills = [
    {
      title: 'Languages',
      items: ['Javascript', 'TypeScript', 'Java', 'Python', 'C#'],
    },
    {
      title: 'Backend',
      items: ['ASP.Net Core', 'Node.js', 'JWT'],
    },
    {
      title: 'Dev Tools and Platforms',
      items: ['Git', 'Github', 'VS Code', 'Docker', 'Postman'],
    },
    {
      title: 'FrontEnd',
      items: ['HTML', 'CSS', 'Angular.JS', 'Bootstrap'],
    },
    {
      title: 'Databases',
      items: ['PostgreSQL', 'MySQL', 'MongoDB'],
    },
  ];
}
