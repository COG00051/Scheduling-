import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {Page404Component} from './page404/page404.component';
import {Page500Component} from './page500/page500.component';
import {OfflineComponent} from './offline/offline.component';
import {LockedComponent} from './locked/locked.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full'
    },
    {
        path: 'sign-in',
        component: SignInComponent
    },
    {
        path: 'sign-up',
        component: SignUpComponent
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent
    },
    {
        path: '404',
        component: Page404Component
    },
    {
        path: '500',
        component: Page500Component
    },
    {
        path: 'offline',
        component: OfflineComponent
    },
    {
        path: 'locked',
        component: LockedComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
