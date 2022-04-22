import React, { useEffect, useState } from 'react';
import classnames from './utils/classnames';
import { TreeData, OrgTreeProps } from './tree.type';
import TreeNode from './TreeNode';
import DragableContainer from './DragableContainer/index';

import styles from './OrgTree.module.less';

const cls = classnames(styles);

function OrgTree(props: OrgTreeProps) {
  const {
    pan,
    zoom,
    minZoom,
    maxZoom,
    zoomStep,
    defaultTransform,
    center = true,
    layout = 'vertical',
    nodeKeys = {
      label: 'label',
      expand: '_expand',
    },
    collapsable = false,
    expandAll = true,
  } = props;
  const [refresh, setRefresh] = useState(Date.now);
  const expandKey = nodeKeys.expand;

  useEffect(() => {
    if (expandAll) {
      toogleExpandAll(props.data, expandAll);
    }
  }, [props.data]);

  const foreUpdate = () => {
    setRefresh(Date.now);
  };

  const handleExpand = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, nodeData: TreeData) => {
    nodeData[expandKey] = !nodeData[expandKey];
    if (!nodeData[expandKey] && nodeData.children) {
      collapse(nodeData.children);
    }
    foreUpdate();
  };

  const collapse = (list: TreeData['children'] = []) => {
    list.forEach((childNode) => {
      childNode[expandKey] = false;
      childNode.children && collapse(childNode.children);
    });
  };

  function expandAllNode(nodeData: TreeData, isExpand: boolean) {
    nodeData[expandKey] = isExpand;
    if (nodeData.children) {
      nodeData.children.forEach((node) => expandAllNode(node, isExpand));
    }

    return nodeData;
  }

  const toogleExpandAll = (nodeData: TreeData, isExpand: boolean) => {
    const newNodeData = expandAllNode(nodeData, isExpand);
    foreUpdate();
  };

  return (
    <DragableContainer
      pan={pan}
      zoom={zoom}
      minZoom={minZoom}
      maxZoom={maxZoom}
      zoomStep={zoomStep}
      defaultTransform={defaultTransform}
      center={center}
    >
      <div className={cls('org-tree-container')}>
        <div className={cls('org-tree', `${layout} org-tree`)}>
          <TreeNode key={refresh} {...props} onExpand={handleExpand} />
        </div>
      </div>
    </DragableContainer>
  );
}

export default OrgTree;
