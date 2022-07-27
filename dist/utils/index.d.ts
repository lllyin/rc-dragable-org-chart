export declare function throttle(fn: Function, delay: number): Function;
export declare function injectStyle(animations?: string[]): {
    el: HTMLStyleElement;
    styleId: string;
    animationName: string;
} | null;
export declare function genKeyframes(animations?: string[], name?: string): {
    name: string;
    style: string;
} | null;
