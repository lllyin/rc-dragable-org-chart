import React, { Fragment } from 'react';
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

const renderCombineNodes = (nodes: TreeData[], props: TreeNodeProps) => {
  const {
    renderContent = renderDefaultContent,
    renderExpandButton = renderDefaultExpandBtn,
    onClick,
    nodeKeys,
  } = props;
  const expandKey = nodeKeys?.expand || '_expand';
  const levelKey = nodeKeys?.level || '_level';
  const isExpand = true;

  return (
    <div
      className={cls('tree-node', `tree-node is-leaf'} ${isExpand ? '' : 'collapsed'}`)}
      key={`leafs-len-${nodes.length}`}
    >
      <div
        className={cls('label')}
        onClick={() => onClick && onClick(nodes)}
        onMouseDown={(ev) => {
          ev.stopPropagation();
        }}
      >
        {nodes.map((leaf) => renderContent(leaf, leaf[levelKey]))}
      </div>
    </div>
  );
};

const renderNode = (data: TreeData, props: TreeNodeProps) => {
  const {
    renderContent = renderDefaultContent,
    renderExpandButton = renderDefaultExpandBtn,
    collapsable,
    onExpand,
    onClick,
    nodeKeys,
  } = props;
  const expandKey = nodeKeys?.expand || '_expand';
  const levelKey = nodeKeys?.level || '_level';
  const isExpand = data[expandKey];

  const handleExpand = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    ev.stopPropagation();
    onExpand(ev, data);
  };

  return (
    <div
      className={cls(
        'tree-node',
        `tree-node ${isLeaf(data) ? 'is-leaf' : ''} ${isExpand ? '' : 'collapsed'}`,
      )}
      key={data.id || data.key}
    >
      <div
        className={cls('label')}
        onClick={() => onClick && onClick(data)}
        onMouseDown={(ev) => {
          ev.stopPropagation();
        }}
      >
        {renderContent(data, data[levelKey])}
        {collapsable && data.children && data.children.length > 0 && (
          <div onClick={handleExpand}>{renderExpandButton(isExpand, data)}</div>
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
  let combinedNodes: TreeData[] = [];

  let childEles = [
    <div className={cls('children')}>
      {children?.map((node) => {
        const isCombine = node[props.nodeKeys?.combine || ''];
        if (isCombine) {
          combinedNodes.push(node);
          return null;
        }
        if (combinedNodes.length > 0) {
          const Compnent = (
            <Fragment>
              {renderCombineNodes(combinedNodes, props)}
              {renderNode(node, props)}
            </Fragment>
          );
          combinedNodes = [];
          return Compnent;
        }
        return renderNode(node, props);
      })}
    </div>,
  ];

  if (combinedNodes.length === children?.length) {
    childEles = [renderCombineNodes(combinedNodes, props)];
  } else {
    childEles.unshift(renderCombineNodes(combinedNodes, props));
  }

  return childEles;
};

export default function TreeNode(props: TreeNodeProps) {
  return renderNode(props.data, props);
}
