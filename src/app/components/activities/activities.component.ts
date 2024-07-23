import { Component } from '@angular/core';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.css',
})
export class ActivitiesComponent {
  activities = [
    {
      id: 1,
      name: 'John Stainior',
      category: 'commented',
      type: 'chat',
      content: 'Well, I am liking it hot it captures the audio.',
      time: '2 seconds ago',
    },
    {
      id: 2,
      name: 'John Stainior',
      category: 'added a new video',
      type: 'video',
      content: 'Creative people must follow these guideline.',
      time: '5 minutes ago',
    },
    {
      id: 3,
      name: 'John Stainior',
      category: 'shared a document',
      type: 'document',
      content: 'How to become an expert.',
      time: '1 day ago',
    },
    {
      id: 4,
      name: 'Arjun',
      category: 'unlocked new badge',
      type: 'unlock',
      content: 'Social Guru',
      time: '44 minutes ago',
    },
    {
      id: 5,
      name: 'Micheal',
      category: 'upload a new video',
      type: 'video',
      content: 'How do i start a website design project.',
      time: '1 hour ago',
    },
    {
      id: 6,
      name: 'John Stainior',
      category: 'liked a video',
      type: 'like',
      content: 'Some marketing tricks.',
      time: '19 minutes ago',
    },
  ];
}
