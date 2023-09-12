import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProfileComponent } from './component/profile/profile.component';
import { TableListComponent } from './component/table-list/table-list.component';
import { TipographyComponent } from './component/tipography/tipography.component';
import { IconsComponent } from './component/icons/icons.component';
import { MapsComponent } from './component/maps/maps.component';
import { NotificationComponent } from './component/notification/notification.component';

const routes: Routes = [

  { path: '', component: DashboardComponent },
  { path: '/profile', component: ProfileComponent },
  { path: '/table-lis', component: TableListComponent },
  { path: '/tiphograpy', component: TipographyComponent },
  { path: '/icons', component: IconsComponent },
  { path: '/maps', component: MapsComponent },
  { path: '/notifications', component: NotificationComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
