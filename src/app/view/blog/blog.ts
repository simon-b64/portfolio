import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

@Component({
    selector: 'app-blog',
    imports: [
        FaIconComponent
    ],
    templateUrl: './blog.html',
    styleUrl: './blog.scss',
})
export class BlogView {
    protected readonly faPenToSquare = faPenToSquare;

}
