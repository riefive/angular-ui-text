import { Component } from '@angular/core';
import { VideosComponent } from '../../components/videos/videos.component';
import { ActivitiesComponent } from '../../components/activities/activities.component';
import { PeoplesComponent } from '../../components/peoples/peoples.component';
import { DocumentsComponent } from '../../components/documents/documents.component';
import { ChannelsComponent } from '../../components/channels/channels.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    VideosComponent,
    ActivitiesComponent,
    PeoplesComponent,
    DocumentsComponent,
    ChannelsComponent,
    FooterComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
