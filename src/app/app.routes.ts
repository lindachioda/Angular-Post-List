import { Routes } from '@angular/router';
import { Home } from './home/home';
import { InactivePost } from './inactive-post/inactive-post';
import { ActivePost } from './active-post/active-post';


export const routes: Routes = [
     { path: '', component: Home },
     { path: 'inactive-post', component: InactivePost },
     { path: 'active-post', component: ActivePost }
];
