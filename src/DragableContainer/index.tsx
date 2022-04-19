import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import classnames from '../utils/classnames';

import styles from './index.module.less';

const cls = classnames(styles);
const initTransform = {
  scale: 1,
  wheelDirection: 0,
  translateX: 0,
  translateY: 0,
  originX: '50%',
  originY: '50%',
};

export interface DragableContainerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  // 图层是否允许拖动
  pan: boolean;
  // 图层是否允许缩放
  zoom: boolean;
  // 图层最小缩放比例
  minZoom: number;
  // 图层最大缩放比例
  maxZoom: number;
  // 缩放幅度
  zoomStep: 0.1;
}
export interface TransformVals {
  scale: number;
  translateX: number;
  translateY: number;
  originX: number;
  originY: number;
  wheelDirection: number;
}

export default function DragableContainer(props: DragableContainerProps) {
  const { children, pan = true, zoom = true, minZoom = 0.1, maxZoom = 2, zoomStep = 0.1 } = props;
  const containerRef: React.Ref<HTMLDivElement> = useRef(null);
  const [isMove, setIsMove] = useState(false);
  const [transform, _setTransform] = useState<TransformVals>(initTransform);
  const transfromRef = useRef<TransformVals>(initTransform);
  const posRef = useRef<{
    deltaX: number;
    deltaY: number;
    isMove: boolean;
  }>({
    isMove: false,
    deltaX: 0,
    deltaY: 0,
  });

  useEffect(() => {
    containerRef.current?.addEventListener('mousedown', handleDown);
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleUp);

    // calcOriginPoint();
    return () => {
      containerRef.current?.removeEventListener('mousedown', handleDown);
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleUp);
    };
  }, []);

  useEffect(() => {
    if (!zoom) return;
    const { wheelDirection } = transform;
    if (wheelDirection > 0) {
      onZoomOut();
    } else if (wheelDirection < 0) {
      onZoomIn();
    }
  }, [transform.wheelDirection, zoom]);

  const setTransform = (values: Partial<TransformVals>) => {
    _setTransform((state) => {
      const newStaste = { ...state, ...values };

      transfromRef.current = newStaste;
      return newStaste;
    });
  };

  // 计算缩放原点
  const calcOriginPoint = () => {
    if (!containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();

    setTransform({
      originX: Math.round(width / 2),
      originY: Math.round(height / 2),
    });
  };

  const onZoomIn = () => {
    _setTransform((state) => ({
      ...state,
      scale: state.scale >= maxZoom ? maxZoom : state.scale + zoomStep,
    }));
  };

  const onZoomOut = () => {
    _setTransform((state) => ({
      ...state,
      scale: state.scale <= minZoom ? minZoom : state.scale - zoomStep,
    }));
  };

  const handleDown = (ev: globalThis.MouseEvent) => {
    ev.preventDefault();
    setIsMove(true);

    posRef.current.isMove = true;
    posRef.current.deltaX = ev.pageX - transfromRef.current.translateX;
    posRef.current.deltaY = ev.pageY - transfromRef.current.translateY;
  };

  const handleMove = (ev: globalThis.MouseEvent) => {
    if (!posRef.current.isMove || !pan) return;

    const x = ev.pageX - posRef.current.deltaX;
    const y = ev.pageY - posRef.current.deltaY;

    setTransform({
      translateX: x,
      translateY: y,
    });
  };

  const handleUp = (ev: globalThis.MouseEvent) => {
    setIsMove(false);

    posRef.current.isMove = false;
  };

  const handleWheelMove: React.WheelEventHandler<HTMLDivElement> = (ev) => {
    ev.preventDefault();
    ev.persist();
    const wheelDirection = ev.deltaY;

    setTransform({
      wheelDirection,
    });
  };

  return (
    <div className={cls('drag-wrapper')} onWheel={handleWheelMove}>
      <div
        className={cls('drag-container')}
        ref={containerRef}
        style={{
          cursor: isMove ? 'move' : 'default',
          transform: `translate(${transform.translateX}px, ${transform.translateY}px) scale(${transform.scale})`,
          transformOrigin: `${transform.originX}px ${transform.originY}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
