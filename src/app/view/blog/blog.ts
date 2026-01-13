import { Component, signal } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-blog',
    imports: [
        FaIconComponent,
        DatePipe,
        RouterLink
    ],
    templateUrl: './blog.html',
    styleUrl: './blog.scss',
})
export class BlogView {
    protected readonly faPenToSquare = faPenToSquare;

    protected blogPost  = signal([
        {
            id: 2,
            icon: ['fas', 'circle-nodes'] as any,
            title: 'Personal Website 2026',
            date: '2026-01-13',
            content: 'This year I decided to start the tradition of reworking my personal website every year. Whilst implementing this I wanted to start using newer technologies and using the new angular 21 features. I have also decided to use a blog format to document my journey throughout the year.'
        },
        {
            id: 1,
            icon: ['far', 'pen-to-square'] as any,
            title: 'First example blog post',
            date: '2024-02-20',
            content: 'This is the content of the second blog post.'
        }
    ])
}
