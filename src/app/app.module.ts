import { RegisterComponent } from './pages/login/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormComponent } from './pages/form/form.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { PagesComponent } from './pages/pages.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    FormComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    PagenotfoundComponent,
    PagesComponent,
    RegisterComponent,
    AccountSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
