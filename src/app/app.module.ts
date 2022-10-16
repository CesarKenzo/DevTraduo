import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    DashboardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
