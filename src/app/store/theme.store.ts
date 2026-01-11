import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { ThemeService } from '../services/theme.service';

export type Theme = 'light' | 'dark';

export const ThemeStore = signalStore(
    { providedIn: 'root' },
    withState({
        theme: 'light' as Theme,
    }),
    withMethods((store) => {
        const themeService = inject(ThemeService);

        return {
            loadFromLocalStorage() {
                const theme = themeService.loadSavedTheme();
                patchState(store, { theme });
                themeService.updateThemeInDocumentAndStorage(theme);
            },
            toggleTheme() {
                const theme = store.theme() === 'light' ? 'dark' : 'light';
                patchState(store, { theme });
                themeService.updateThemeInDocumentAndStorage(theme);
            },
        };
    }),
    withHooks({
        onInit({ loadFromLocalStorage }) {
            loadFromLocalStorage();
        },
    }),
);
