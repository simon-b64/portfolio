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
        const supportedLangs = ['de', 'en'];
        this.translateService.addLangs(supportedLangs);
        this.translateService.setFallbackLang('en');

        const browserLang = this.translateService.getBrowserLang() ?? '';
        const langToUse = supportedLangs.includes(browserLang) ? browserLang : 'en';
        this.translateService.use(langToUse);
    }

}
