import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  names: string[] = ['Videos', 'People', 'Documents', 'Events', 'Communities', 'Favorites', 'Channels']
}
