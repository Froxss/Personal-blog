import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../../services/theme-change.service';

@Component({
  selector: 'app-navbar-component',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './navbar-component.component.html',
  styleUrl: './navbar-component.component.css',
})
export class NavbarComponentComponent {
  themeIcon: string = 'bedtime';

  constructor(private themeService: ThemeService) {
    this.updateIcon();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    this.updateIcon();
  }

  private updateIcon() {
    this.themeIcon = this.themeService.isDarkMode() ? 'light_mode' : 'bedtime';
  }
}
