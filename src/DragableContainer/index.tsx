import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
import classnames from '../utils/classnames';
import { throttle } from '../utils';
import { DragableContainerProps, Styles, Placement } from './DragableContainer.type';

import styles from './index.module.less';

const cls = classnames(styles);

export function DragableContainer(props: DragableContainerProps, ref) {
  const {
    wrapperClassName = '',
    children,
    pan = true,
    zoom = true,
    minZoom = 0.1,
    maxZoom = 2,
    zoomStep = 0.1,
    defaultScale = 1,
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
    autoAdjust = true,
    toolbar = ['zoom'],
    disableWheelZoom = false,
  } = props;
  const defaultStyles = {
    scale: defaultScale,
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

    initfixVisible();
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
        setPlacement(placement, false, defaultScale);
      }
    }, 10);
  }, [placement]);

  useImperativeHandle(ref, () => ({
    setPlacement,
  }));

  const setPlacement = (placement: Placement, animation = false, defaultScale = 1) => {
    if (!wrapperRef.current) return;
    const treeDom = wrapperRef.current.querySelector('.org-tree');
    if (!treeDom) return;

    const { width: wrapperW, height: wrapperH } = wrapperRef.current.getBoundingClientRect();
    const { width, height } = treeDom.getBoundingClientRect();
    const _transition = animation ? transition : void 0;
    const ratio = defaultScale / 1;
    const origin = {
      x: (ratio - 1) * wrapperW * 0.5,
      y: (ratio - 1) * wrapperH * 0.5,
    };

    // console.log('setPlacement:', placement, { wrapperW, wrapperH, width, height })
    switch (placement) {
      case 'center': {
        setStyles({
          translateX: (wrapperW - width) / 2 + origin.x,
          translateY: (wrapperH - height) / 2 + origin.y,
          transition: _transition,
          scale: defaultScale,
        });
        break;
      }
      case 'topLeft': {
        setStyles({
          translateX: offset.x + origin.x,
          translateY: offset.y + origin.y,
          transition: _transition,
          scale: defaultScale,
        });
        break;
      }
      case 'topCenter': {
        setStyles({
          translateX: (wrapperW - width) / 2 + offset.x + origin.x,
          translateY: offset.y + origin.y,
          transition: _transition,
          scale: defaultScale,
        });
        break;
      }
      case 'leftCenter': {
        setStyles({
          translateX: 0 + origin.x,
          translateY: (wrapperH - height) / 2 + origin.y,
          transition: _transition,
          scale: defaultScale,
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

  const initfixVisible = () => {
    if (!wrapperRef.current) return;
    const treeDom = wrapperRef.current.querySelector('.org-tree');
    if (!treeDom) return;

    let options = {
      root: document.querySelector('#scrollArea'),
      rootMargin: '0px',
      threshold: [0, 1],
    };

    let observer = new IntersectionObserver((entries, observer) => {
      const res = entries[0];
      if (res.intersectionRatio > 0) {
        // console.log('--在可视范围内:', posRef.current.isMove, res, treeDom)
      } else {
        // console.log('--不在可视范围内:', posRef.current.isMove, res, treeDom)
        setTimeout(() => {
          if (!posRef.current.isMove && autoAdjust) {
            setPlacement(placement, true);
          }
        }, 200);
      }
    }, options);

    observer.observe(treeDom);
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
      width: wrapperW,
      height: wrapperH,
      left,
      top,
    } = wrapperRef.current.getBoundingClientRect();
    // console.log('calcScaleOriginTransform', containerRef.current?.style.transform, { translateX, translateY, containerW, containerH, left, top })
    const origin = {
      x: (ratio - 1) * wrapperW * 0.5,
      y: (ratio - 1) * wrapperH * 0.5,
    };
    // 计算偏移量
    const x = translateX - ((ratio - 1) * (ev.clientX - left - translateX) - origin.x);
    const y = translateY - ((ratio - 1) * (ev.clientY - top - translateY) - origin.y);

    return {
      translateX: Number(x.toFixed(3)),
      translateY: Number(y.toFixed(3)),
    };
  };

  const onZoom = (flag = 1, ev?: globalThis.WheelEvent) => {
    const state = stylesRef.current;
    let _scale = state.scale;

    if (flag > 0) {
      // 缩小
      _scale = _scale <= minZoom ? minZoom : _scale - zoomStep;
    } else if (flag < 0) {
      // 放大
      _scale = _scale >= maxZoom ? maxZoom : _scale + zoomStep;
    }
    _scale = parseFloat(_scale.toFixed(2));

    const trans = ev ? calcScaleOriginTransform({ ratio: _scale / state.scale, ev }) : {};

    // console.log('_scale:', _scale);
    const newState = {
      ...state,
      ...trans,
      scale: _scale,
    };

    setStyles(newState);
  };

  const handleZoom = (ev: globalThis.WheelEvent) => {
    const wheelDirection = ev.deltaY;

    onZoom(wheelDirection, ev);
  };

  const throttleOnZoom = throttle(handleZoom, 1);

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
    if (!zoom || disableWheelZoom) return;
    ev.preventDefault();
    ev.stopPropagation();

    throttleOnZoom(ev);
  };

  const getUnitValue = (value: number | string) => {
    return typeof value === 'number' ? `${value}px` : value;
  };

  // console.log('render styles:', styles, props);
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
      <div className={cls('toolbar')}>
        {toolbar.includes('zoom') && (
          <div className={cls('tool-item scal-tool-item')}>
            <div className={cls('scale-icon')} onClick={() => onZoom(1)}>
              <svg
                t="1654504508891"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4720"
                width="200"
                height="200"
              >
                <path
                  d="M269.473684 485.052632m40.421053 0l404.210526 0q40.421053 0 40.421053 40.421052l0 0q0 40.421053-40.421053 40.421053l-404.210526 0q-40.421053 0-40.421053-40.421053l0 0q0-40.421053 40.421053-40.421052Z"
                  fill="#666666"
                  p-id="4721"
                ></path>
              </svg>
            </div>
            <div className={cls('scale-num')}>{(styles.scale * 100) >> 0}%</div>
            <div className={cls('scale-icon')} onClick={() => onZoom(-1)}>
              <svg
                t="1654504404583"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4584"
                width="200"
                height="200"
              >
                <path
                  d="M269.473684 485.052632m40.421053 0l404.210526 0q40.421053 0 40.421053 40.421052l0 0q0 40.421053-40.421053 40.421053l-404.210526 0q-40.421053 0-40.421053-40.421053l0 0q0-40.421053 40.421053-40.421052Z"
                  fill="#666666"
                  p-id="4585"
                ></path>
                <path
                  d="M552.421053 282.947368m0 40.421053l0 404.210526q0 40.421053-40.421053 40.421053l0 0q-40.421053 0-40.421053-40.421053l0-404.210526q0-40.421053 40.421053-40.421053l0 0q40.421053 0 40.421053 40.421053Z"
                  fill="#666666"
                  p-id="4586"
                ></path>
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default forwardRef(DragableContainer);
