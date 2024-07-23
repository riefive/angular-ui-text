import { Component } from '@angular/core';

@Component({
  selector: 'app-channels',
  standalone: true,
  imports: [],
  templateUrl: './channels.component.html',
  styleUrl: './channels.component.css'
})
export class ChannelsComponent {
  channels = [
    { id: 1, name: 'Google'},
    { id: 2, name: 'Dribble'},
    { id: 3, name: 'Microsoft'},
    { id: 4, name: 'Behance'},
    { id: 5, name: 'Weather Channel'},
    { id: 6, name: 'Gurus'},
    { id: 7, name: 'iMedia'},
    { id: 8, name: 'Creativeye'},
    { id: 9, name: 'Khan Studios'},
    { id: 10, name: 'Yahoo'},
  ];
}
