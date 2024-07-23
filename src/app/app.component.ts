import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Input, Ripple, initTWE } from 'tw-elements';
import { HeaderComponent } from './components/header/header.component';
import { VideosComponent } from './components/videos/videos.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { PeoplesComponent } from './components/peoples/peoples.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { ChannelsComponent } from './components/channels/channels.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    VideosComponent,
    ActivitiesComponent,
    PeoplesComponent,
    DocumentsComponent,
    ChannelsComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-ux-test';

  ngOnInit() {
    initTWE({ Input, Ripple });
  }
}
