import React, { useState } from 'react';
import classnames from './utils/classnames';
import { TreeData, TreeNodeProps } from './tree.type';

import styles from './TreeNode.module.less';

const cls = classnames(styles);

const isLeaf = (data: TreeData) => {
  return !data.children || data.children.length === 0;
};

const renderDefaultContent = (data: TreeData) => {
  return <div className={cls('label-inner')}>{data.label}</div>;
};

const renderDefaultExpandBtn = (isExpand: boolean, data: TreeData) => {
  return <span className={cls('epxand-btn', isExpand ? 'expanded' : '')}></span>;
};

const renderNode = (data: TreeData, props: TreeNodeProps) => {
  const {
    renderContent = renderDefaultContent,
    renderExpandButton = renderDefaultExpandBtn,
    collapsable,
    onExpand,
  } = props;
  const isExpand = data['_expand'];

  return (
    <div
      className={cls(
        'tree-node',
        `tree-node ${isLeaf(data) ? 'is-leaf' : ''} ${isExpand ? '' : 'collapsed'}`,
      )}
      key={data.id || data.key}
    >
      <div className={cls('label')}>
        {renderContent(data)}
        {collapsable && data.children && data.children.length > 0 && (
          <div onClick={(e) => onExpand(e, data)}>{renderExpandButton(isExpand, data)}</div>
        )}
      </div>
      {isExpand &&
        data.children &&
        data.children.length > 0 &&
        renderChildren(data.children, props)}
    </div>
  );
};

const renderChildren = (children: TreeData['children'], props: TreeNodeProps) => {
  return (
    <div className={cls('children')}>
      {children && children?.map((data) => renderNode(data, props))}
    </div>
  );
};

export default function TreeNode(props: TreeNodeProps) {
  return renderNode(props.data, props);
}
