import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  //{ path: 'heroes', component:  },
  //{ path: 'story', component:  },
  //{ path: 'tournaments', component:  },
  //{ path: 'ambassador', component:  },
  { path: '**', redirectTo: '' },
];
