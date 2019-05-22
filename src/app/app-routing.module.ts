import { SearchComponent } from './pages/search/search.component';
import { FormComponent } from './pages/form/form.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { RegisterComponent } from './pages/login/register.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { PagesComponent } from './pages/pages.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { title: 'Home'} },
      { path: 'account-settings', component: AccountSettingsComponent, data: { title: 'Ajustes'}  },
      { path: 'form', component: FormComponent , data: { title: 'Alta empleado'}  },
      { path: 'search/:term', component: SearchComponent, data: { title: 'Buscador'}  },
      { path: 'user/:id', component: ProfileComponent , data: { title: 'Perfil'}  },
      { path: 'search/:term/:id', component: ProfileComponent , data: { title: 'Perfil'}  },
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
