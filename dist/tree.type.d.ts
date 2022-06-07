import React, { ReactNode } from 'react';
import { DragableContainerProps } from './DragableContainer/DragableContainer.type';
export interface TreeData {
    [key: string | number]: any;
    children?: TreeData[];
}
export interface OrgTreeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'onClick'>, DragableContainerProps {
    layout: 'horizontal' | 'vertical';
    nodeKeys?: {
        label: string;
        expand: string;
        level: string;
        combine: string;
    };
    data: TreeData;
    collapsable?: boolean;
    expandAll?: boolean;
    renderContent?: (data: TreeData, level: number, colNum: number) => ReactNode;
    renderExpandButton?: (isExpand: boolean, data: TreeData) => ReactNode;
    onClick?: (data: TreeData) => void;
    forward?: (params: {
        data: TreeData;
        foreUpdate: Function;
    }) => void;
}
export interface TreeNodeProps extends OrgTreeProps {
    onExpand: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, data: TreeData) => void;
}
