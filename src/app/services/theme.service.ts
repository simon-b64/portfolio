import { inject, Injectable, PLATFORM_ID, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Theme } from '../store/theme.store';

@Injectable({ providedIn: 'root' })
export class ThemeService {
    private readonly THEME_KEY = 'theme';
    private readonly isBrowser: boolean;
    private readonly renderer: Renderer2;

    private readonly platformId = inject(PLATFORM_ID);
    private readonly document = inject(DOCUMENT);
    private readonly rendererFactory = inject(RendererFactory2);

    constructor() {
        this.renderer = this.rendererFactory.createRenderer(null, null);
        this.isBrowser = isPlatformBrowser(this.platformId);
    }

    public loadSavedTheme(): Theme {
        if (!this.isBrowser)
            return 'light';

        const saved = localStorage.getItem(this.THEME_KEY) as Theme | null;
        if (saved) {
            return saved;
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            return prefersDark ? 'dark' : 'light';
        }
    }

    public updateThemeInDocumentAndStorage(theme: Theme): void {
        this.renderer.setAttribute(this.document.documentElement, 'data-theme', theme);
        if (this.isBrowser) {
            localStorage.setItem(this.THEME_KEY, theme);
        }
    }
}
