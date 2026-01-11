import {Component} from '@angular/core';
import {Logo} from '../../components/logo/logo';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faAnglesDown, faLightbulb, faSearch, faUsers, faSmile } from '@fortawesome/free-solid-svg-icons';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
    imports: [
        Logo,
        FontAwesomeModule,
        NgOptimizedImage,
    ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomePage {
    protected readonly anglesDown = faAnglesDown;
    protected readonly faLightBulb = faLightbulb;
    protected readonly faSearch = faSearch;
    protected readonly faUsers = faUsers;
    protected readonly faSmile = faSmile;
}
