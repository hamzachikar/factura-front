import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthIntercpetorService } from './auth/auth-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginAlertComponent } from './login/login-alert/login-alert.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { AboutPageComponent } from './home/about-page/about-page.component';
import { AboutComponent } from './home/about-page/about/about.component';
import { ServicePageComponent } from './home/service-page/service-page.component';
import { ServicesComponent } from './home/service-page/services/services.component';
import { UserComponent } from './user/user.component';
import { NavComponent } from './nav/nav.component';
import { ModalComponent } from './modal/modal.component';
import { ProfileComponent } from './user/profile/profile.component';
import { WelcomeComponent } from './user/welcome/welcome.component';
import { SideNavBarComponent } from './user/side-nav-bar/side-nav-bar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from './user/welcome/line-chart/line-chart.component';
import { TestComponent } from './user/test/test.component';
@NgModule({
  declarations: [ 
    AppComponent,
    LoginComponent,
    HomeComponent,
    LoginAlertComponent,
    HomePageComponent,
    AboutPageComponent,
    AboutComponent,
    ServicePageComponent,
    ServicesComponent,
    UserComponent,
    NavComponent,
    ModalComponent,
    ProfileComponent,
    WelcomeComponent,
    SideNavBarComponent,
    LineChartComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatMenuModule,
    ChartsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthIntercpetorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
