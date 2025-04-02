import { Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'courses',
    component: CoursesComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full', // pathmatch: 'full" ensures that the redirect happens only when the full path is empty
  },
  // wildcard route
  {
    path: '**',
    component: NotFoundComponent,
  },
];
