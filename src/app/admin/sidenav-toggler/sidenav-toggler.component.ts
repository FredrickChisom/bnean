import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../side-nav.service';

@Component({
  selector: 'app-sidenav-toggler',
  templateUrl: './sidenav-toggler.component.html',
  styleUrls: ['./sidenav-toggler.component.scss']
})
export class SidenavTogglerComponent implements OnInit {

  constructor(public sideNavService: SideNavService) { }

  ngOnInit() {
  }

}
