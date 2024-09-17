import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponentComponent } from "./navbar-component/navbar-component.component";
import { MatIconModule } from '@angular/material/icon';
import { WelcomeScreenComponent } from "./welcome-screen-component/welcome-screen.component";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponentComponent, MatIconModule, WelcomeScreenComponent,MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Personal-blog';
}
