/// <reference types="react" />
export declare type Placement = 'topLeft' | 'topCenter' | 'leftCenter' | 'center';
export declare type Toolbar = 'zoom' | 'rotate' | 'flip' | 'remove';
export interface DragableContainerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    autoAdjust?: boolean;
    pan?: boolean;
    zoom?: boolean;
    minZoom?: number;
    maxZoom?: number;
    zoomStep?: 0.1;
    defaultScale?: number;
    defaultTransform?: {
        x: number;
        y: number;
    };
    offset?: {
        x: number;
        y: number;
    };
    placement?: Placement;
    wrapperClassName?: string;
    defaultExpandLevels?: number[];
    transition?: string;
    toolbar?: Toolbar[];
    disableWheelZoom?: boolean;
}
export interface Styles {
    scale: number;
    translateX: number;
    translateY: number;
    originX: number | string;
    originY: number | string;
    transition?: string;
}
