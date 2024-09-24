import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Components/nav-bar/nav-bar.component';
// Angular 18'de gerekli

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent], // Bileşenler burada
  // provideHttpClient burada doğru şekilde eklendi
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // 'styleUrl' yerine 'styleUrls' olması gerekiyor
})
export class AppComponent {
  title = 'BlogProject';
}
