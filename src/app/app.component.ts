import { Component, ViewChild } from '@angular/core';
import { fadeAnimation } from './animations';
import { Router } from '@angular/router';
import { User, AuthenticationService, Role } from './_form';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation],
  // make fade in animation available to this component

  // attach the fade in animation to the host (root) element of this component
  host: {
    '[@fadeAnimation]': ''
  }
})
export class AppComponent {
  title = 'bnean';
  currentUser: User;
  @ViewChild('sidenav', { static: false })
  public sidenav: MatSidenav;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
