import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { HomeModule } from './home/home.module';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'home', loadChildren:()=> import('./home/home.module').then(m => m.HomeModule),canActivate:[AuthGuard]},
  {path:'dashboard',loadChildren:() => import('./dashboard/dashboard.module').then(m => m.DashboardModule), canActivate:[AuthGuard]},
  {path: 'error', loadChildren:() => import('./error-page/error-page.module').then(m => m.ErrorPageModule)},
  {path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
