import React from 'react';
export declare type Placement = 'topLeft' | 'topCenter' | 'leftCenter' | 'center';
export interface DragableContainerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    pan?: boolean;
    zoom?: boolean;
    minZoom?: number;
    maxZoom?: number;
    zoomStep?: 0.1;
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
}
export interface Styles {
    scale: number;
    translateX: number;
    translateY: number;
    originX: number | string;
    originY: number | string;
    transition?: string;
}
export declare function DragableContainer(props: DragableContainerProps, ref: any): JSX.Element;
declare const _default: React.ForwardRefExoticComponent<DragableContainerProps & React.RefAttributes<unknown>>;
export default _default;
