import React from 'react';
export interface DragableContainerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  pan?: boolean;
  zoom?: boolean;
  minZoom?: number;
  maxZoom?: number;
  zoomStep?: 0.1;
}
export interface TransformVals {
  scale: number;
  translateX: number;
  translateY: number;
  originX: number | string;
  originY: number | string;
  wheelDirection: number;
}
export default function DragableContainer(props: DragableContainerProps): JSX.Element;