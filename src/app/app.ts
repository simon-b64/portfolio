import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { TranslateService } from '@ngx-translate/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Navbar],
    templateUrl: './app.html',
    styleUrl: './app.scss'
})
export class App {
    private translateService = inject(TranslateService);
    private library = inject(FaIconLibrary);


    constructor() {
        this.translateService.addLangs(['de', 'en']);
        this.translateService.setFallbackLang('en');
        this.translateService.use('en');

        this.library.addIconPacks(fas, far);
    }

}
