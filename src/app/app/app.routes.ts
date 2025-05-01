import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { FeedComponent } from '../pages/feed/feed.component';
import { ProfileComponent } from '../pages/profile/profile.component'; 

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'profile/:username', component: ProfileComponent },

];
