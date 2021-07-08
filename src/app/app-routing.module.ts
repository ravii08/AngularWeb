import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'home',loadChildren:()=> import('./home/home.module').then(m => m.HomeModule),canActivate:[AuthGuard]},
  {path:'dashboard',loadChildren:() => import('./dashboard/dashboard.module').then(m => m.DashboardModule), canActivate:[AuthGuard]},
  {path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
