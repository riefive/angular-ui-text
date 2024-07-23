import { Component } from '@angular/core';
import { MaterialModule } from '../../modules/material.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header-small',
  standalone: true,
  imports: [
    MaterialModule,
    RouterOutlet
  ],
  templateUrl: './header-small.component.html',
  styleUrl: './header-small.component.css'
})
export class HeaderSmallComponent {
  names: string[] = ['Videos', 'People', 'Documents', 'Events', 'Communities', 'Favorites', 'Channels']
}
