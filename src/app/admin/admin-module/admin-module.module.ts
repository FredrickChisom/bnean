import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { SidenavListComponent } from '../sidenav-list/sidenav-list.component';
import { SidenavTogglerComponent } from '../sidenav-toggler/sidenav-toggler.component';
import { TopNavComponent } from '../top-nav/top-nav.component';
import { SharedModule } from 'src/app/shared';
import { CardDescriptionComponent } from '../card-description/card-description.component';
import { CardDescriptionDeckComponent } from '../card-description-deck/card-description-deck.component';



@NgModule({
  declarations: [
    AdminHomeComponent,
    SidenavListComponent,
    SidenavTogglerComponent,
    TopNavComponent,
    CardDescriptionComponent,
    CardDescriptionDeckComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
})
export class AdminModuleModule { }
