import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInterfaceRoutingModule } from './user-interface-routing.module';
import { AlertsComponent } from './alerts/alerts.component';
import { UiKitComponent } from './ui-kit/ui-kit.component';
import { CollapseComponent } from './collapse/collapse.component';
import { ColorsComponent } from './colors/colors.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { IconsComponent } from './icons/icons.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { MediaObjectComponent } from './media-object/media-object.component';
import { ModalsComponent } from './modals/modals.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProgressbarsComponent } from './progressbars/progressbars.component';
import { RangeSlidersComponent } from './range-sliders/range-sliders.component';
import { SortableNestableComponent } from './sortable-nestable/sortable-nestable.component';
import { TabsComponent } from './tabs/tabs.component';
import { WavesComponent } from './waves/waves.component';


@NgModule({
  imports: [
    CommonModule,
    UserInterfaceRoutingModule
  ],
  declarations: [
      AlertsComponent,
      UiKitComponent,
      CollapseComponent,
      ColorsComponent,
      DialogsComponent,
      IconsComponent,
      ListGroupComponent,
      MediaObjectComponent,
      ModalsComponent,
      NotificationsComponent,
      ProgressbarsComponent,
      RangeSlidersComponent,
      SortableNestableComponent,
      TabsComponent,
      WavesComponent
  ]
})
export class UserInterfaceModule { }
