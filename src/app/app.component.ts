import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponentComponent } from "./Components/navbar/navbar-component.component";
import { MatIconModule } from '@angular/material/icon';
import { WelcomeScreenComponent } from "./Components/welcome-screen/welcome-screen.component";
import { MatButtonModule } from '@angular/material/button';
import { AboutMeComponent } from "./Components/about-me/about-me.component";
import { SkillsComponent } from "./Components/skills/skills.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponentComponent, MatIconModule, WelcomeScreenComponent, MatButtonModule, AboutMeComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Personal-blog';
}
