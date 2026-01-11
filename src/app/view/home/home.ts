import { Component } from '@angular/core';
import { Logo } from '../../components/logo/logo';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-home',
    imports: [
        Logo,
        TranslatePipe
    ],
    templateUrl: './home.html',
    styleUrl: './home.scss',
})
export class HomeView {

}
