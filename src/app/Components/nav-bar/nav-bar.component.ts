import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../../Services/Theme/theme-change.service';

@Component({
  selector: 'app-navbar-component',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavbarComponent {
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
