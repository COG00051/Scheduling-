import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicElementsComponent} from './basic-elements/basic-elements.component';
import {AdvancedElementsComponent} from "./advanced-elements/advanced-elements.component";
import {FormUploadComponent} from "./form-upload/form-upload.component";
import {FormEditorsComponent} from "./form-editors/form-editors.component";
import {FormWizardComponent} from "./form-wizard/form-wizard.component";
import {FormValidationComponent} from "./form-validation/form-validation.component";
import {FormExamplesComponent} from "./form-examples/form-examples.component";

const routes: Routes = [
    {
      path: '',
      redirectTo: 'basic-elements',
      pathMatch: 'full'
    },
    {
      path: 'basic-elements',
      component: BasicElementsComponent
    },
    {
      path: 'advanced-elements',
      component: AdvancedElementsComponent
    },
    {
      path: 'form-examples',
      component: FormExamplesComponent
    },
    {
      path: 'form-validation',
      component: FormValidationComponent
    },
    {
      path: 'form-wizard',
      component: FormWizardComponent
    },
    {
      path: 'form-editors',
      component: FormEditorsComponent
    },
    {
      path: 'form-upload',
      component: FormUploadComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
