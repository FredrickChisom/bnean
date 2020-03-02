import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared/shared.module';
import { HomeModuleModule, SlideService } from './home';
import { AdminModuleModule } from './admin/admin-module/admin-module.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from './_form/_helpers';
import { AuthenticationService, UserService } from './_form/_services';
import { LoginDetailComponent } from './_form/sub-form/login-detail/login-detail.component';
import { PasswordComponent } from './_form/sub-form/password/password.component';
import { ProfileComponent } from './_form/sub-form/profile/profile.component';
import { UserSignInComponent } from './_form/user-sign-in';
import { UserSignUpComponent } from './_form/user-sign-up/user-sign-up.component';
import { TopNavComponent, SideNavService } from './admin';


@NgModule({
  declarations: [
    AppComponent,
    LoginDetailComponent,
    PasswordComponent,
    ProfileComponent,
    UserSignInComponent,
    UserSignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModuleModule,
    AdminModuleModule
  ],
  providers: [
    SlideService, TopNavComponent, SideNavService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthenticationService, UserService,

    // provider used to create fake backend
    fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
