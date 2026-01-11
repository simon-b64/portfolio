import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ThemeStore } from '../../store/theme.store';

@Component({
    selector: 'app-header',
    imports: [FontAwesomeModule],
    templateUrl: './header.html',
    styleUrl: './header.css',
})
export class Header {
    protected readonly themeStore = inject(ThemeStore);

    protected readonly faSun = faSun;
    protected readonly faMoon = faMoon;
}
