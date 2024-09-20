import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [

  { path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent
  },
  {
    path: 'register',
    title: 'Registro',
    component: RegisterComponent
  },
  {
    path: 'dashboard',
    title: 'Dashboard',
    component: DashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
