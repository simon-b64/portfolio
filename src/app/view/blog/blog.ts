import { Component, signal } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

interface BlogPost {
    id: string;
    title: string;
    date: Date;
    content: string;
    icon: string;
}

@Component({
    selector: 'app-blog',
    imports: [
        FaIconComponent,
        DatePipe,
        RouterLink,
        NgOptimizedImage
    ],
    templateUrl: './blog.html',
    styleUrl: './blog.scss',
})
export class BlogView {
    protected readonly faPenToSquare = faPenToSquare;

    protected blogPost  = signal<BlogPost[]>([
        {
            id: '2',
            icon: '/assets/icons/circle-nodes.svg',
            title: 'Personal Website 2026',
            date: new Date(),
            content: 'This year I decided to start the tradition of reworking my personal website every year. Whilst implementing this I wanted to start using newer technologies and using the new angular 21 features. I have also decided to use a blog format to document my journey throughout the year.'
        },
        {
            id: '1',
            icon: '/assets/icons/circle-nodes.svg',
            title: 'First example blog post',
            date: new Date(),
            content: 'This is the content of the second blog post.'
        }
    ]);
}
