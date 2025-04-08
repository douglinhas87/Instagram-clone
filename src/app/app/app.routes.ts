import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { FeedComponent } from '../pages/feed/feed.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'feed', component: FeedComponent },
];
