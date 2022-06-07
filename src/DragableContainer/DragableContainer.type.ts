export type Placement = 'topLeft' | 'topCenter' | 'leftCenter' | 'center';

export type Toolbar = 'zoom' | 'rotate' | 'flip' | 'remove';

export interface DragableContainerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  // 遮挡时自动调整位置
  autoAdjust?: boolean;
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
  // 默认缩放
  defaultScale?: number;
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
  // 工具栏
  toolbar?: Toolbar[];
  // 禁用鼠标滚轮缩放
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
