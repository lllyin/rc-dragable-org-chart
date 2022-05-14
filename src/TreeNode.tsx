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

function CombinedNodes(props: { nodes: TreeData[]; extraProps: TreeNodeProps }) {
  const { nodes, extraProps } = props;

  const {
    renderContent = renderDefaultContent,
    renderExpandButton = renderDefaultExpandBtn,
    onClick,
    nodeKeys,
  } = extraProps;
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
        // onMouseDown={(ev) => {
        //   ev.stopPropagation();
        // }}
      >
        <div className={cls('combine-nodes', 'combine-nodes')}>
          {nodes.map((leaf) => renderContent(leaf, leaf[levelKey]))}
        </div>
      </div>
    </div>
  );
}

function Node(props: { data: TreeData; extraProps: TreeNodeProps }) {
  const { data, extraProps } = props;
  const {
    renderContent = renderDefaultContent,
    renderExpandButton = renderDefaultExpandBtn,
    collapsable,
    onExpand,
    onClick,
    nodeKeys,
  } = extraProps;
  const expandKey = nodeKeys?.expand || '_expand';
  const levelKey = nodeKeys?.level || '_level';
  const isExpand = data[expandKey];

  const handleExpand = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    ev.stopPropagation();
    onExpand(ev, data);
  };

  return (
    <div
      key={data.id || data.key}
      className={cls(
        'tree-node',
        `tree-node ${isLeaf(data) ? 'is-leaf' : ''} ${isExpand ? '' : 'collapsed'}`,
      )}
      data-id={data.id}
    >
      <div
        className={cls('label')}
        onClick={() => onClick && onClick(data)}
        // onMouseDown={(ev) => {
        //   ev.stopPropagation();
        // }}
      >
        {renderContent(data, data[levelKey])}
        {collapsable && data.children && data.children.length > 0 && (
          <div onClick={handleExpand}>{renderExpandButton(isExpand, data)}</div>
        )}
      </div>
      {isExpand &&
        data.children &&
        data.children.length > 0 &&
        renderChildren(data.children, extraProps)}
    </div>
  );
}

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
              <CombinedNodes nodes={combinedNodes} extraProps={props} />
              <Node key={node.id} data={node} extraProps={props} />
            </Fragment>
          );
          combinedNodes = [];
          return Compnent;
        }
        return <Node key={node.id} data={node} extraProps={props} />;
      })}
    </div>,
  ];

  if (combinedNodes.length === children?.length) {
    childEles = [<CombinedNodes nodes={combinedNodes} extraProps={props} />];
  } else if (combinedNodes.length > 0) {
    childEles.unshift(<CombinedNodes nodes={combinedNodes} extraProps={props} />);
  }

  return childEles;
};

export default function TreeNode(props: TreeNodeProps) {
  return <Node data={props.data} extraProps={props} />;
}
