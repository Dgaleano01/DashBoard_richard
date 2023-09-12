import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProfileComponent } from './component/profile/profile.component';
import { TableListComponent } from './component/table-list/table-list.component';
import { TipographyComponent } from './component/tipography/tipography.component';
import { IconsComponent } from './component/icons/icons.component';
import { MapsComponent } from './component/maps/maps.component';
import { NotificationComponent } from './component/notification/notification.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { NavBarHorizontalComponent } from './component/nav-bar-horizontal/nav-bar-horizontal.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    TableListComponent,
    TipographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationComponent,
    NavBarComponent,
    NavBarHorizontalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
