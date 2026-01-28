import { Routes } from '@angular/router';
import { HomeView } from './view/home/home';
import { NotFoundView } from './view/not-found/not-found';
import { BlogView } from './view/blog/blog';
import { ContactView } from './view/contact/contact';
import { CvView } from './view/cv/cv';

export const routes: Routes = [
    {
        title: 'Simon Buchinger - Software Engineer',
        path: '',
        pathMatch: 'full',
        component: HomeView
    },
    {
        title: 'CV | Simon Buchinger',
        path: 'cv',
        component: CvView
    },
    {
        path: 'blog',
        children: [
            {
                path: '',
                title: 'Blog | Simon Buchinger',
                pathMatch: "full",
                component: BlogView
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
