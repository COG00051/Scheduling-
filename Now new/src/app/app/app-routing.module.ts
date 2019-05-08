import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChatComponent} from './chat/chat.component';
import {CalendarComponent} from './calendar/calendar.component';
import {ContactComponent} from './contact/contact.component';
import {InboxComponent} from './inbox/inbox.component';
import {SingleMailComponent} from './single-mail/single-mail.component';
import {ComposeMailComponent} from './compose-mail/compose-mail.component';
import {FileDashboardComponent} from './file-dashboard/file-dashboard.component';
import {FileDocumentsComponent} from './file-documents/file-documents.component';
import {FileImagesComponent} from './file-images/file-images.component';
import {FileMediaComponent} from './file-media/file-media.component';
import {BlogDashboardComponent} from './blog-dashboard/blog-dashboard.component';
import {BlogPostComponent} from './blog-post/blog-post.component';
import {BlogListComponent} from './blog-list/blog-list.component';
import {BlogGridComponent} from './blog-grid/blog-grid.component';
import {BlogDetailsComponent} from './blog-details/blog-details.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'inbox',
        pathMatch: 'full'
    },
    {
        path: 'inbox',
        component: InboxComponent
    },
    {
        path: 'compose-mail',
        component: ComposeMailComponent
    },
    {
        path: 'single-mail',
        component: SingleMailComponent
    },
    {
        path: 'chat',
        component: ChatComponent
    },
    {
        path: 'calendar',
        component: CalendarComponent
    },
    {
        path: 'file-dashboard',
        component: FileDashboardComponent
    },
    {
        path: 'file-documents',
        component: FileDocumentsComponent
    },
    {
        path: 'file-media',
        component: FileMediaComponent
    },
    {
        path: 'file-images',
        component: FileImagesComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'blog-dashboard',
        component: BlogDashboardComponent
    },
    {
        path: 'blog-post',
        component: BlogPostComponent
    },
    {
        path: 'blog-list',
        component: BlogListComponent
    },
    {
        path: 'blog-grid',
        component: BlogGridComponent
    },
    {
        path: 'blog-details',
        component: BlogDetailsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
