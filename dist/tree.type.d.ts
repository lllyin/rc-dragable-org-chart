import React, { ReactNode } from 'react';
import { DragableContainerProps } from './DragableContainer';
export interface TreeData {
  [key: string | number]: any;
  children?: TreeData[];
}
export interface OrgTreeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'onClick'>,
    DragableContainerProps {
  layout: 'horizontal' | 'vertical';
  nodeKeys?: {
    label: string;
    expand: string;
  };
  data: TreeData;
  collapsable?: boolean;
  expandAll?: boolean;
  renderContent?: (data: TreeData) => ReactNode;
  renderExpandButton?: (isExpand: boolean, data: TreeData) => ReactNode;
  onClick?: (data: TreeData) => void;
}
export interface TreeNodeProps extends OrgTreeProps {
  onExpand: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, data: TreeData) => void;
}
