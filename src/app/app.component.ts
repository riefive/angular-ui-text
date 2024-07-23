import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { VideosComponent } from './components/videos/videos.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { PeoplesComponent } from './components/peoples/peoples.component';
import { Input, Ripple, initTWE } from 'tw-elements';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SearchBarComponent,
    BreadcrumbsComponent,
    VideosComponent,
    ActivitiesComponent,
    PeoplesComponent,
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
