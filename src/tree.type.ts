import React, { ReactNode } from 'react';
import { DragableContainerProps } from './DragableContainer/DragableContainer.type';

export interface TreeData {
  [key: string | number]: any;
  children?: TreeData[];
}

export interface OrgTreeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'onClick' | 'onTransitionEnd'>,
    DragableContainerProps {
  // 布局
  layout: 'horizontal' | 'vertical';
  // node字段映射
  nodeKeys?: {
    label: string;
    expand: string;
    level: string;
    combine: string;
  };
  // 数据
  data: TreeData;
  // 是否可以折叠
  collapsable?: boolean;
  // 是否展开所有
  expandAll?: boolean;
  // 自定义节点内容
  renderContent?: (data: TreeData, level: number, colNum: number) => ReactNode;
  // 自定义展开按钮
  renderExpandButton?: (isExpand: boolean, data: TreeData) => ReactNode;
  // 点击node
  onClick?: (data: TreeData) => void;
  // forward
  forward?: (params: { data: TreeData; foreUpdate: Function }) => void;
  // 遍历key
  nodeKey: string;
  // 卡片间距
  spacing?: number;
  // 获取节点动画
  getNodeTransform?: (data: TreeData) => React.CSSProperties;
  // 是否合并叶子结点
  mergeNode?: (data: TreeData) => boolean;
  // 是否隐藏节点
  isHide?: (data: TreeData) => boolean;
  // 是否开启动画
  isAnim?: (data: TreeData) => boolean;
  onTransitionEnd?: (data: TreeData) => void;
}

export interface TreeNodeProps extends OrgTreeProps {
  // 点击展开按钮
  onExpand: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, data: TreeData) => void;
}
