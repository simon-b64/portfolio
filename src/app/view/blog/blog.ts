import { Component, OnInit, signal } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
export class BlogView implements OnInit {
    protected readonly faPenToSquare = faPenToSquare;
    protected readonly blogPosts = signal<BlogPost[]>([]);

    private readonly entries = [
        "2026_01_19"
    ];

    constructor(
        private httpClient: HttpClient
    ) {
    }

    ngOnInit(): void {
        this.entries.forEach(entry => {
            this.httpClient.get(`/blog/${entry}/entry.json`).subscribe((data: any) => {
                this.blogPosts.update(posts => [
                    ...posts,
                    {
                        id: entry,
                        icon: data.preview_image,
                        title: data.title,
                        date: new Date(data.date),
                        content: data.preview
                    }
                ]);
            });
        });
    }
}
