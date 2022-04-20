import React, { ReactNode } from 'react';
import { DragableContainerProps } from './DragableContainer';
export interface TreeData {
  [key: string | number]: any;
  children?: TreeData[];
}
export interface OrgTreeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>,
    DragableContainerProps {
  layout: 'horizontal' | 'vertical';
  data: TreeData;
}
export interface TreeNodeProps extends OrgTreeProps {
  layout: 'horizontal' | 'vertical';
  data: TreeData;
  renderContent?: (data: TreeData) => ReactNode;
}
