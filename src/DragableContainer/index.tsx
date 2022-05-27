import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
import classnames from '../utils/classnames';
import { throttle } from '../utils';

import styles from './index.module.less';

const cls = classnames(styles);
export type Placement = 'topLeft' | 'topCenter' | 'leftCenter' | 'center';
export interface DragableContainerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  // 图层是否允许拖动
  pan?: boolean;
  // 图层是否允许缩放
  zoom?: boolean;
  // 图层最小缩放比例
  minZoom?: number;
  // 图层最大缩放比例
  maxZoom?: number;
  // 缩放幅度
  zoomStep?: 0.1;
  // 默认位移
  defaultTransform?: {
    x: number;
    y: number;
  };
  offset?: {
    x: number;
    y: number;
  };
  // 位置
  placement?: Placement;
  // 包裹类
  wrapperClassName?: string;
  // 默认展开层级
  defaultExpandLevels?: number[];
  // 动画
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

export function DragableContainer(props: DragableContainerProps, ref) {
  const {
    wrapperClassName = '',
    children,
    pan = true,
    zoom = true,
    minZoom = 0.1,
    maxZoom = 2,
    zoomStep = 0.1,
    defaultTransform = {
      x: 0,
      y: 0,
    },
    offset = {
      x: 0,
      y: 0,
    },
    placement = 'center',
    transition = 'transform 0.25s ease-out',
  } = props;
  const defaultStyles = {
    scale: 1,
    translateX: defaultTransform.x || 0,
    translateY: defaultTransform.y || 0,
    originX: '50%',
    originY: '50%',
  };
  const containerRef: React.Ref<HTMLDivElement> = useRef(null);
  const wrapperRef: React.Ref<HTMLDivElement> = useRef(null);
  const [isMove, setIsMove] = useState(false);
  const [styles, _setStyles] = useState<Styles>(defaultStyles);
  const stylesRef = useRef<Styles>(defaultStyles);
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
    // containerRef.current?.addEventListener('mousedown', handleDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    wrapperRef.current?.addEventListener('wheel', handleWheelMove);

    // calcOriginPoint();
    return () => {
      // containerRef.current?.removeEventListener('mousedown', handleDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      wrapperRef.current?.removeEventListener('wheel', handleWheelMove);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (placement) {
        setPlacement(placement);
      }
    }, 10);
  }, [placement]);

  useImperativeHandle(ref, () => ({
    setPlacement,
    fixVisible,
  }));

  const setPlacement = (placement: Placement, animation = false) => {
    if (!wrapperRef.current) return;
    const treeDom = wrapperRef.current.querySelector('.org-tree');
    if (!treeDom) return;

    const { width: containerW, height: containerH } = wrapperRef.current.getBoundingClientRect();
    const { width, height } = treeDom.getBoundingClientRect();
    const _transition = animation ? transition : void 0;

    switch (placement) {
      case 'center': {
        setStyles({
          translateX: (containerW - width) / 2,
          translateY: (containerH - height) / 2,
          transition: _transition,
        });
        break;
      }
      case 'topLeft': {
        setStyles({
          translateX: offset.x,
          translateY: offset.y,
          transition: _transition,
        });
        break;
      }
      case 'topCenter': {
        setStyles({
          translateX: (containerW - width) / 2 + offset.x,
          translateY: offset.y,
          transition: _transition,
        });
        break;
      }
      case 'leftCenter': {
        setStyles({
          translateX: 0,
          translateY: (containerH - height) / 2,
          transition: _transition,
        });
        break;
      }
      default: {
        break;
      }
    }

    animation &&
      setTimeout(() => {
        setStyles({ transition: void 0 });
      }, 300);
  };

  const fixVisible = () => {
    if (!wrapperRef.current) return;
    const treeDom = wrapperRef.current.querySelector('.org-tree');
    if (!treeDom) return;

    const { width: containerW, height: containerH } = wrapperRef.current.getBoundingClientRect();
    const { width, height } = treeDom.getBoundingClientRect();

    const { translateX, translateY } = stylesRef.current;
    const xRange = [-width, containerW];
    const yRange = [-height, containerH];

    if (
      translateX > xRange[0] &&
      translateX < xRange[1] &&
      translateY > yRange[0] &&
      translateY < yRange[1]
    ) {
      // console.log('在可视范围内:', placement)
    } else {
      // console.log('不在可视范围内:', placement)
      setTimeout(() => {
        setPlacement(placement, true);
      }, 0);
    }
  };

  const setStyles = (values: Partial<Styles>) => {
    _setStyles((state) => {
      const newStaste = { ...state, ...values };

      stylesRef.current = newStaste;
      return newStaste;
    });
  };

  // 计算缩放原点
  const calcScaleOriginTransform = (opts: { ratio: number; ev: globalThis.WheelEvent }) => {
    if (!wrapperRef.current) return;
    const { ratio, ev } = opts;
    const { translateX, translateY } = stylesRef.current;
    const {
      width: containerW,
      height: containerH,
      left,
      top,
    } = wrapperRef.current.getBoundingClientRect();
    const origin = {
      x: (ratio - 1) * containerW * 0.5,
      y: (ratio - 1) * containerH * 0.5,
    };
    // 计算偏移量
    const x = translateX - ((ratio - 1) * (ev.clientX - left - translateX) - origin.x);
    const y = translateY - ((ratio - 1) * (ev.clientY - top - translateY) - origin.y);

    return {
      translateX: Number(x.toFixed(3)),
      translateY: Number(y.toFixed(3)),
    };
  };

  const onZoom = (ev: globalThis.WheelEvent) => {
    const wheelDirection = ev.deltaY;
    const state = stylesRef.current;

    // console.log('onZoom:', ev.deltaY);

    let _scale = state.scale;

    if (wheelDirection > 0) {
      // 缩小
      _scale = _scale <= minZoom ? minZoom : _scale - zoomStep;
    } else if (wheelDirection < 0) {
      // 放大
      _scale = _scale >= maxZoom ? maxZoom : _scale + zoomStep;
    }
    const trans = calcScaleOriginTransform({ ratio: _scale / state.scale, ev });

    // console.log('trans:', trans);
    const newState = {
      ...state,
      ...trans,
      scale: _scale,
    };

    setStyles(newState);
  };

  const throttleOnZoom = throttle(onZoom, 1);

  const handleMouseDown: React.MouseEventHandler<HTMLDivElement> = (ev) => {
    ev.preventDefault();
    setIsMove(true);

    posRef.current.isMove = true;
    posRef.current.deltaX = ev.clientX - stylesRef.current.translateX;
    posRef.current.deltaY = ev.clientY - stylesRef.current.translateY;
  };

  const handleMouseMove = (ev: globalThis.MouseEvent) => {
    if (!posRef.current.isMove || !pan) return;

    const x = ev.clientX - posRef.current.deltaX;
    const y = ev.clientY - posRef.current.deltaY;

    setStyles({
      translateX: x,
      translateY: y,
    });
  };

  const handleMouseUp = (ev: globalThis.MouseEvent) => {
    setIsMove(false);

    posRef.current.isMove = false;
  };

  const handleWheelMove = (ev: globalThis.WheelEvent) => {
    if (!zoom) return;
    ev.preventDefault();
    ev.stopPropagation();

    throttleOnZoom(ev);
  };

  const getUnitValue = (value: number | string) => {
    return typeof value === 'number' ? `${value}px` : value;
  };

  // console.log('render styles:', styles);
  return (
    <div
      className={cls('drag-wrapper', wrapperClassName)}
      ref={wrapperRef}
      onMouseDown={handleMouseDown}
    >
      <div
        className={cls('drag-container')}
        ref={containerRef}
        style={{
          cursor: isMove ? 'move' : 'default',
          transform: `translate(${getUnitValue(styles.translateX)}, ${getUnitValue(
            styles.translateY,
          )}) scale(${styles.scale})`,
          transformOrigin: `${getUnitValue(styles.originX)} ${getUnitValue(styles.originY)}`,
          transition: styles.transition,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default forwardRef(DragableContainer);
