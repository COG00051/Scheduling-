import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertsComponent } from './alerts/alerts.component';
import { UiKitComponent } from './ui-kit/ui-kit.component';
import { WavesComponent } from './waves/waves.component';
import { TabsComponent } from './tabs/tabs.component';
import { SortableNestableComponent } from './sortable-nestable/sortable-nestable.component';
import { RangeSlidersComponent } from './range-sliders/range-sliders.component';
import { ProgressbarsComponent } from './progressbars/progressbars.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ModalsComponent } from './modals/modals.component';
import { MediaObjectComponent } from './media-object/media-object.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { IconsComponent } from './icons/icons.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { ColorsComponent } from './colors/colors.component';
import { CollapseComponent } from './collapse/collapse.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'alerts',
        pathMatch: 'full'
    },
    {
        path: 'ui-kit',
        component: UiKitComponent
    },
    {
        path: 'alerts',
        component: AlertsComponent
    },
    {
        path: 'collapsed',
        component: CollapseComponent
    },
    {
        path: 'colors',
        component: ColorsComponent
    },
    {
        path: 'dialogs',
        component: DialogsComponent
    },
    {
        path: 'icons',
        component: IconsComponent
    },
    {
        path: 'list-group',
        component: ListGroupComponent
    },
    {
        path: 'media-object',
        component: MediaObjectComponent
    },
    {
        path: 'modals',
        component: ModalsComponent
    },
    {
        path: 'notifications',
        component: NotificationsComponent
    },
    {
        path: 'progressbars',
        component: ProgressbarsComponent
    },
    {
        path: 'range-sliders',
        component: RangeSlidersComponent
    },
    {
        path: 'sortable-nestable',
        component: SortableNestableComponent
    },
    {
        path: 'tabs',
        component: TabsComponent
    },
    {
        path: 'waves',
        component: WavesComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserInterfaceRoutingModule { }
