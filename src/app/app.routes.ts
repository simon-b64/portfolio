import { Routes } from '@angular/router';
import { HomeView } from './view/home/home';
import { NotFoundView } from './view/not-found/not-found';
import { BlogView } from './view/blog/blog';
import { ContactView } from './view/contact/contact';
import { BlogEntryView } from './view/blog-entry/blog-entry';

export const routes: Routes = [
    {
        title: 'Simon Buchinger - Software Engineer',
        path: '',
        pathMatch: 'full',
        component: HomeView
    },
    {
        path: 'blog',
        children: [
            {
                path: '',
                title: 'Blog | Simon Buchinger',
                pathMatch: "full",
                component: BlogView
            },
            {
                path: ':id',
                title: 'Blog Entry | Simon Buchinger',
                component: BlogEntryView
            }
        ]
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
