import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { ChatComponent } from './chat/chat.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ContactComponent } from './contact/contact.component';
import { InboxComponent } from './inbox/inbox.component';
import { ComposeMailComponent } from './compose-mail/compose-mail.component';
import { SingleMailComponent } from './single-mail/single-mail.component';
import { FileDashboardComponent } from './file-dashboard/file-dashboard.component';
import { FileDocumentsComponent } from './file-documents/file-documents.component';
import { FileMediaComponent } from './file-media/file-media.component';
import { FileImagesComponent } from './file-images/file-images.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogGridComponent } from './blog-grid/blog-grid.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogDashboardComponent } from './blog-dashboard/blog-dashboard.component';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { JsonFileService} from './json-file.service';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
      DropzoneModule,
  ],
  declarations: [
      ChatComponent,
      CalendarComponent,
      ContactComponent,
      InboxComponent,
      ComposeMailComponent,
      SingleMailComponent,
      FileDashboardComponent,
      FileDocumentsComponent,
      FileMediaComponent,
      FileImagesComponent,
      BlogDetailsComponent,
      BlogGridComponent,
      BlogListComponent,
      BlogPostComponent,
      BlogDashboardComponent,

  ],
  providers: [
    JsonFileService
  ]
})
export class AppModule { }
