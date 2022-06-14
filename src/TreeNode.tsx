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

function CombinedNodes(props: { nodes: TreeData[]; extraProps: TreeNodeProps; colNum: number }) {
  const { nodes, extraProps, colNum } = props;

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
      className={cls(
        'tree-node combine-tree-node',
        `tree-node is-leaf'} ${isExpand ? '' : 'collapsed'}`,
      )}
      key={`leafs-len-${nodes.length}`}
      data-colnum={colNum}
    >
      <div
        className={cls('label')}
        onClick={() => onClick && onClick(nodes)}
        // onMouseDown={(ev) => {
        //   ev.stopPropagation();
        // }}
      >
        <div className={cls('combine-nodes', 'combine-nodes')} data-colnum={colNum}>
          {nodes.map((leaf) => renderContent(leaf, leaf[levelKey], colNum))}
        </div>
      </div>
    </div>
  );
}

function Node(props: { data: TreeData; extraProps: TreeNodeProps; colNum: number }) {
  const { data, extraProps, colNum } = props;
  const {
    renderContent = renderDefaultContent,
    renderExpandButton = renderDefaultExpandBtn,
    collapsable,
    onExpand,
    onClick,
    nodeKeys,
    nodeKey,
  } = extraProps;
  const expandKey = nodeKeys?.expand || '_expand';
  const levelKey = nodeKeys?.level || '_level';
  const isExpand = data[expandKey];
  const keyId = `node-${data[nodeKey]}`;

  const handleExpand = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    ev.stopPropagation();
    onExpand(ev, data);
  };

  return (
    <div
      key={keyId}
      className={cls(
        'tree-node',
        `tree-node ${isLeaf(data) ? 'is-leaf' : ''} ${isExpand ? '' : 'collapsed'}`,
      )}
      data-id={keyId}
      data-colnum={colNum ?? ''}
    >
      <div
        className={cls('label')}
        onClick={() => onClick && onClick(data)}
        // onMouseDown={(ev) => {
        //   ev.stopPropagation();
        // }}
      >
        {renderContent(data, data[levelKey], colNum)}
        {collapsable && data.children && data.children.length > 0 && (
          <div onClick={handleExpand}>{renderExpandButton(isExpand, data)}</div>
        )}
      </div>
      {isExpand &&
        data.children &&
        data.children.length > 0 &&
        renderChildren(data.children, extraProps, colNum)}
    </div>
  );
}

const renderChildren = (children: TreeData['children'], props: TreeNodeProps, colNum: number) => {
  const { nodeKey, mergeNode } = props;
  let combinedNodes: TreeData[] = [];
  let index = 0;

  let childEles = [
    <div className={cls('children')}>
      {children?.map((node) => {
        // const isCombine = node[props.nodeKeys?.combine || ''];
        const isCombine = mergeNode && mergeNode(node);
        const keyId = `child-${node[nodeKey]}`;

        if (isCombine) {
          combinedNodes.push(node);
          return null;
        }
        if (combinedNodes.length > 0) {
          index += 1;
          const Compnent = (
            <Fragment key={`combine-${keyId}`}>
              <CombinedNodes nodes={combinedNodes} extraProps={props} colNum={colNum} />
              <Node key={keyId} data={node} extraProps={props} colNum={index} />
            </Fragment>
          );
          combinedNodes = [];
          return Compnent;
        }
        index += 1;
        return <Node key={keyId} data={node} extraProps={props} colNum={index} />;
      })}
    </div>,
  ];

  if (combinedNodes.length === children?.length) {
    childEles = [<CombinedNodes nodes={combinedNodes} extraProps={props} colNum={colNum} />];
  } else if (combinedNodes.length > 0) {
    childEles.push(<CombinedNodes nodes={combinedNodes} extraProps={props} colNum={colNum} />);
  }

  return childEles;
};

export default function TreeNode(props: TreeNodeProps) {
  const { nodeKey = 'id', data } = props;
  const keyId = `tree-${data[nodeKey]}`;
  return <Node data={data} extraProps={props} colNum={0} key={keyId} />;
}
