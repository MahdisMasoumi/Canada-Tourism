import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title: string = 'Meet Canada';
  slogan: string = 'Embrace the passion';
  banner: string = 'assets/images/canada.jpeg';
}
