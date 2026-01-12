import { Routes } from '@angular/router';
import { HomeView } from './view/home/home';
import { NotFoundView } from './view/not-found/not-found';
import { BlogView } from './view/blog/blog';
import { ContactView } from './view/contact/contact';

export const routes: Routes = [
    {
        title: 'Simon Buchinger - Software Engineer',
        path: '',
        pathMatch: 'full',
        component: HomeView
    },
    {
        title: 'Blog | Simon Buchinger',
        path: 'blog',
        component: BlogView
    },
    {
        title: 'Contact | Simon Buchinger',
        path: 'contact',
        component: ContactView
    },
    {
        path: '**',
        component: NotFoundView
    }
];
