import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { BasicElementsComponent } from './basic-elements/basic-elements.component';
import { AdvancedElementsComponent } from './advanced-elements/advanced-elements.component';
import { FormExamplesComponent } from './form-examples/form-examples.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';
import { FormEditorsComponent } from './form-editors/form-editors.component';
import { FormUploadComponent } from './form-upload/form-upload.component';
import {DropzoneModule} from "ngx-dropzone-wrapper";

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule,
    DropzoneModule
  ],
  declarations: [
      BasicElementsComponent,
      AdvancedElementsComponent,
      FormExamplesComponent,
      FormValidationComponent,
      FormWizardComponent,
      FormEditorsComponent,
      FormUploadComponent
  ]
})
export class FormsModule { }
