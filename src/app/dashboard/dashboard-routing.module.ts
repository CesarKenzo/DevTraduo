import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { PostComponent } from './post/post.component';
import { ProfileComponent } from './profile/profile.component';


  const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'post', component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
