import { FormUpdateComponent } from './pages/form-update/form-update.component';
import { FormComponent } from './pages/form/form.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { RegisterComponent } from './pages/login/register.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'account-settings', component: AccountSettingsComponent },
      { path: 'form', component: FormComponent },
      { path: 'form-update/:id', component: FormUpdateComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  },


    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
