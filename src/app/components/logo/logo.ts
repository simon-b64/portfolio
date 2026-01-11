import { Component, inject, Input, numberAttribute } from '@angular/core';
import { NgStyle } from '@angular/common';
import { ThemeStore } from '../../store/theme.store';

@Component({
    selector: 'app-logo',
    imports: [
        NgStyle,
    ],
    templateUrl: './logo.html',
    styleUrl: './logo.css',
})
export class Logo {
    @Input({ transform: numberAttribute }) scale: number | undefined;
    @Input() color: string | undefined;
    @Input({ transform: numberAttribute }) strokeWidth: number | undefined;

    private readonly themeStore = inject(ThemeStore);

    get effectiveStrokeWidth() {
        return this.strokeWidth ?? 6;
    }

    get effectiveViewBox() {
        const padding = (this.strokeWidth ?? 6) / 2;
        const width = 930 + (this.strokeWidth ?? 6);
        const height = 832 + (this.strokeWidth ?? 6);
        return `-${ padding } -${ padding } ${ width } ${ height }`;
    }

    get effectiveColor() {
        if (this.color !== undefined) {
            return this.color;
        }

        return this.themeStore.theme() === 'dark' ? '#ffffff' : '#000000';
    }

    get scaleStyle() {
        const scale = this.scale ?? 1;
        return {
            transform: `scale(${ scale })`,
            width: '100%',
            height: 'auto',
            display: 'block',
        };
    }
}
