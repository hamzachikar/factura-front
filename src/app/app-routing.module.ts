import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AboutPageComponent } from './home/about-page/about-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { HomeComponent } from './home/home.component';
import { ServicePageComponent } from './home/service-page/service-page.component';
import { LoginComponent } from './login/login.component';
import { UserGestComponent } from './user/admin/user-gest/user-gest.component';
import { ProfileComponent } from './user/profile/profile.component';
import { TestComponent } from './user/test/test.component';
import { UserComponent } from './user/user.component';
import { WelcomeComponent } from './user/welcome/welcome.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent,children:[
    { path: 'home', component: HomePageComponent},
    { path: 'about', component: AboutPageComponent},
    { path: 'service', component: ServicePageComponent},
  ]},
  {path: 'app', component: UserComponent,canActivate:[AuthGuard],children:[
    { path: 'dash', component:WelcomeComponent},
    {path:'users',component:UserGestComponent},
    { path: 'test', component:TestComponent},
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
