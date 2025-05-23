import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];
