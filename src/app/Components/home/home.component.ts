import { Component } from '@angular/core';
import { WelcomeScreenComponent } from "../welcome-screen/welcome-screen.component";
import { SkillsComponent } from "../skills/skills.component";
import { MyProjectComponent } from "../my-project/my-project.component";
import { AboutMeComponent } from "../about-me/about-me.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WelcomeScreenComponent, SkillsComponent, MyProjectComponent, AboutMeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
