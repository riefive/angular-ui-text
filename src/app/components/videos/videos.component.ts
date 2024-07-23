import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject, takeUntil } from 'rxjs';
import { ScreenService } from '../../services/screen.service';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent {
  destroyed = new Subject<void>();
  currentScreenSize!: string;

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  lists = [
    { id: '0', name: 'Waseem Arshad', content: 'How to improve your skill', views: '10000 views' },
    { id: '1', name: 'John Stainior', views: '2500 views' },
    { id: '2', name: 'John Doe', views: '2500 views' },
    { id: '3', name: 'Michael Kelight', views: '2500 views' },
    { id: '4', name: 'Ahmed Yasin', views: '2500 views' },
    { id: '5', name: 'upload', type: 'icon' }
  ];

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize =
              this.displayNameMap.get(query) ?? 'Unknown';
          }
        }
      });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
