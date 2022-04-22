import React, { ReactNode } from 'react';
import { DragableContainerProps } from './DragableContainer';

export interface TreeData {
  [key: string | number]: any;
  children?: TreeData[];
}

export interface OrgTreeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>,
    DragableContainerProps {
  // 布局
  layout: 'horizontal' | 'vertical';
  // node字段映射
  nodeKeys?: {
    label: string;
    expand: string;
  };
  // 数据
  data: TreeData;
  // 是否可以折叠
  collapsable?: boolean;
  // 是否展开所有
  expandAll?: boolean;
  // 自定义节点内容
  renderContent?: (data: TreeData) => ReactNode;
  // 自定义展开按钮
  renderExpandButton?: (isExpand: boolean, data: TreeData) => ReactNode;
}

export interface TreeNodeProps extends OrgTreeProps {
  // 点击展开按钮
  onExpand: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, data: TreeData) => void;
}
