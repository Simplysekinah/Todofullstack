import { Routes } from '@angular/router';
import { SignupComponent } from './Pages/signup/signup.component';
import { authGuard } from './Guard/Auth/auth.guard';
import { LayoutComponent } from './Pages/layout/layout.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';

export const routes: Routes = [
    {
    path:'',
    redirectTo:'signup',
    pathMatch:'full'
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path: '',
    component:LayoutComponent,
    canActivate:[authGuard],
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      }
    ]
  }
];
