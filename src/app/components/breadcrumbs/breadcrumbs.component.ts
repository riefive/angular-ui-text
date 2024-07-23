import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [NgFor],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.css'
})
export class BreadcrumbsComponent {
  names: string[] = ['Videos', 'People', 'Documents', 'Events', 'Communities', 'Favorites', 'Channels']
}
