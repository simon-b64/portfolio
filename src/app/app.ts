import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Navbar],
    templateUrl: './app.html',
    styleUrl: './app.scss'
})
export class App {
    private translateService = inject(TranslateService);

    constructor() {
        this.translateService.addLangs(['de', 'en']);
        this.translateService.setFallbackLang('en');
        this.translateService.use('en');
    }

}
