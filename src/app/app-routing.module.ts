import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_form/_guards/auth.guard';
import { Role } from './_form/_models';
import { HomeComponent } from './home/home/home.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { UserSignInComponent } from './_form/user-sign-in';
import { UserSignUpComponent } from './_form/user-sign-up/user-sign-up.component';


const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: UserSignInComponent,
  },
  {
    path: 'join',
    component: UserSignUpComponent,
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
