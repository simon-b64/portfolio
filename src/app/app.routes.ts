import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home';
import { NotFoundPage } from './pages/not-found/not-found';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomePage
    },
    {
        path: 'not-found',
        component: NotFoundPage
    },
    {
        path: '**',
        redirectTo: '/not-found'
    }
];
