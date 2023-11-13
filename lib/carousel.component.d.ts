import { AnimationBuilder } from '@angular/animations';
import { ListKeyManager } from '@angular/cdk/a11y';
import { AfterContentInit, AfterViewInit, EventEmitter, OnDestroy, QueryList, Renderer2 } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatCarousel, Orientation, SvgIconOverrides } from './carousel';
import { MatCarouselSlideComponent } from './carousel-slide/carousel-slide.component';
import * as ɵngcc0 from '@angular/core';
export declare class MatCarouselComponent implements AfterContentInit, AfterViewInit, MatCarousel, OnDestroy {
    private animationBuilder;
    private renderer;
    private platformId;
    timings: string;
    svgIconOverrides: SvgIconOverrides;
    set autoplay(value: boolean);
    set interval(value: number);
    get loop(): boolean;
    set loop(value: boolean);
    hideArrows: boolean;
    hideIndicators: boolean;
    pauseOnHover: boolean;
    color: ThemePalette;
    get maxWidth(): string;
    set maxWidth(value: string);
    maintainAspectRatio: boolean;
    proportion: number;
    slideHeight: string;
    set slides(value: number);
    useKeyboard: boolean;
    useMouseWheel: boolean;
    get orientation(): Orientation;
    set orientation(value: Orientation);
    animationStart: EventEmitter<number>;
    change: EventEmitter<number>;
    get currentIndex(): number;
    get currentSlide(): MatCarouselSlideComponent;
    slidesList: QueryList<MatCarouselSlideComponent>;
    private carouselContainer;
    private carouselList;
    listKeyManager: ListKeyManager<MatCarouselSlideComponent>;
    private _autoplay;
    private autoplay$;
    private interval$;
    private slides$;
    private _maxWidth;
    private maxWidth$;
    private _loop;
    private loop$;
    private _orientation;
    private orientation$;
    private timer$;
    private timerStop$;
    private destroy$;
    private playing;
    constructor(animationBuilder: AnimationBuilder, renderer: Renderer2, platformId: any);
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    next(): void;
    previous(): void;
    slideTo(index: number): void;
    onKeyUp(event: KeyboardEvent): void;
    onMouseEnter(): void;
    onMouseLeave(): void;
    onMouseWheel(event: WheelEvent): void;
    onResize(event: Event): void;
    onPan(event: any, slideElem: HTMLElement): void;
    onPanEnd(event: any, slideElem: HTMLElement): void;
    private isOutOfBounds;
    private isVisible;
    private getOffset;
    private getTranslation;
    private getWidth;
    private goto;
    private playAnimation;
    private resetSlides;
    private resetTimer;
    private startTimer;
    private stopTimer;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MatCarouselComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MatCarouselComponent, "mat-carousel", never, { "timings": "timings"; "hideArrows": "hideArrows"; "hideIndicators": "hideIndicators"; "pauseOnHover": "pauseOnHover"; "color": "color"; "maintainAspectRatio": "maintainAspectRatio"; "proportion": "proportion"; "slideHeight": "slideHeight"; "useKeyboard": "useKeyboard"; "useMouseWheel": "useMouseWheel"; "autoplay": "autoplay"; "interval": "interval"; "loop": "loop"; "maxWidth": "maxWidth"; "slides": "slides"; "orientation": "orientation"; "svgIconOverrides": "svgIconOverrides"; }, { "animationStart": "animationStart"; "change": "change"; }, ["slidesList"], never, false, never>;
}

//# sourceMappingURL=carousel.component.d.ts.map