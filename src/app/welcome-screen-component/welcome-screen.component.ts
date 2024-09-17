import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-welcome-screen',
  standalone: true,
  imports: [MatButtonModule,MatIconModule],
  templateUrl: './welcome-screen.component.html',
  styleUrl: './welcome-screen.component.css'
})
export class WelcomeScreenComponent {

}
