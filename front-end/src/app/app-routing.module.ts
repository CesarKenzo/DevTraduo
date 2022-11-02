import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent},

  {
    path: 'dashboard',
    /*canActivate: [AuthGuardService],*/
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },

  { path: '', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
