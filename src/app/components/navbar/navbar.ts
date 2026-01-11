import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-navbar',
    imports: [
        RouterLink,
        RouterLinkActive,
        TranslatePipe
    ],
    templateUrl: './navbar.html',
    styleUrl: './navbar.scss',
})
export class Navbar {
    private translateService = inject(TranslateService);

    private currentLanguage = signal(this.translateService.getCurrentLang());

    protected alternativeLanguage = computed(() => {
        return this.currentLanguage() === 'en' ? 'DE' : 'EN';
    })

    switchLanguage() {
        const newLang = this.currentLanguage() === 'en' ? 'de' : 'en';
        this.translateService.use(newLang);
        this.currentLanguage.set(newLang);
    }

}
