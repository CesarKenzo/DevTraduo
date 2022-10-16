import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { PostComponent } from './post/post.component';
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { UploadFileComponent } from './upload-file/upload-file.component';


@NgModule({
  declarations: [
    PostComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    UploadFileComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    AppMaterialModule
  ],

  exports: [FooterComponent]
})
export class DashboardModule { }
