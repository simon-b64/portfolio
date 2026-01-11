import { Component } from '@angular/core';
import { Logo } from '../../components/logo/logo';

@Component({
    selector: 'app-home',
    imports: [
        Logo
    ],
    templateUrl: './home.html',
    styleUrl: './home.scss',
})
export class HomeView {

}
