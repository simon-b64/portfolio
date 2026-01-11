import { Routes } from '@angular/router';
import { HomeView } from './view/home/home';
import { NotFoundView } from './view/not-found/not-found';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeView
    },
    {
        path: '**',
        component: NotFoundView
    }
];
