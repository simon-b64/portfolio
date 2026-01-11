import { Component, computed, input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-logo',
    imports: [
        NgStyle
    ],
    templateUrl: './logo.html',
    styleUrl: './logo.scss',
})
export class Logo {
    public scale = input<number>(1);
    public strokeWidth = input<number>(6);

    private readonly baseWidth = 930;
    private readonly baseHeight = 832;

    scaleStyle = computed(() => {
        const scale = this.scale() ?? 1;
        const sw = this.strokeWidth();
        const width = (this.baseWidth + sw) * scale;
        const height = (this.baseHeight + sw) * scale;

        return {
            width: `${ width }px`,
            height: `${ height }px`,
            display: 'block',
        };
    });

    effectiveViewBox = computed(() => {
        const padding = this.strokeWidth() / 2;
        const width = this.baseWidth + this.strokeWidth();
        const height = this.baseHeight + this.strokeWidth();
        return `-${ padding } -${ padding } ${ width } ${ height }`;
    });
}
