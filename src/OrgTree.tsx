import React, { useEffect, useState, useRef } from 'react';
import classnames from './utils/classnames';
import { TreeData, OrgTreeProps } from './tree.type';
import TreeNode from './TreeNode';
import DragableContainer from './DragableContainer/index';

import styles from './OrgTree.module.less';

const cls = classnames(styles);
let isInit = false;

const defaultNodeKeys = {
  label: 'label',
  expand: '_expand',
  level: '_level',
  combine: 'isStaff',
};

function OrgTree(props: OrgTreeProps) {
  const {
    pan,
    zoom,
    minZoom,
    maxZoom,
    zoomStep,
    defaultTransform,
    wrapperClassName,
    defaultExpandLevels,
    placement,
    layout = 'vertical',
    defaultScale,
    nodeKeys = { ...defaultNodeKeys, ...props.nodeKeys },
    nodeKey = 'id',
    expandAll = true,
    autoAdjust = true,
    offset,
    forward,
    toolbar,
    disableWheelZoom,
    spacing = 10,
  } = props;
  const [refresh, setRefresh] = useState(Date.now);
  const dragContainerRef: any = useRef(null);
  const expandKey = nodeKeys.expand;
  const levelKey = nodeKeys.level;
  const parentKey = '_parent';
  const style = { '--card-spacing': `${spacing}px` } as React.CSSProperties;

  useEffect(() => {
    if (expandAll !== void 0) {
      toogleExpandAll(props.data, expandAll, defaultExpandLevels);

      setTimeout(() => {
        isInit && dragContainerRef.current?.setPlacement(placement, false, defaultScale);
        isInit = true;
      }, 10);
    }
    forward &&
      forward({
        data: props.data,
        foreUpdate,
      });
  }, [props.data]);

  const foreUpdate = (fn?: (tree: TreeData) => TreeData, force = false) => {
    if (typeof fn === 'function') {
      fn(props.data);
      toogleExpandAll(props.data, expandAll, defaultExpandLevels);
      return;
    }
    const refreshKey = Date.now();
    props.data.refreshKey = refreshKey;
    if (force) {
      setRefresh(refreshKey);
    }
  };

  const handleExpand = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, nodeData: TreeData) => {
    nodeData[expandKey] = !nodeData[expandKey];
    if (!nodeData[expandKey] && nodeData.children) {
      collapse(nodeData.children);
    }
    foreUpdate(void 0, true);
  };

  const collapse = (list: TreeData['children'] = []) => {
    list.forEach((childNode) => {
      childNode[expandKey] = false;
      childNode.children && collapse(childNode.children);
    });
  };

  function expandAllNode(nodeData: TreeData, isExpand: boolean, defaultExpandLevels?: number[]) {
    nodeData[levelKey] = nodeData[levelKey] || 1;
    nodeData[expandKey] = defaultExpandLevels
      ? defaultExpandLevels.includes(nodeData[levelKey])
      : isExpand;

    if (nodeData.children) {
      nodeData.children.forEach((node) => {
        node[levelKey] = nodeData[levelKey] + 1;
        node[parentKey] = nodeData;
        expandAllNode(node, isExpand);
      });
    }

    return nodeData;
  }

  const toogleExpandAll = (
    nodeData: TreeData,
    isExpand: boolean,
    defaultExpandLevels?: number[],
  ) => {
    expandAllNode(nodeData, isExpand, defaultExpandLevels);
    foreUpdate(void 0, true);
  };

  return (
    <DragableContainer
      ref={dragContainerRef}
      pan={pan}
      zoom={zoom}
      minZoom={minZoom}
      maxZoom={maxZoom}
      zoomStep={zoomStep}
      defaultTransform={defaultTransform}
      placement={placement}
      wrapperClassName={wrapperClassName}
      offset={offset}
      autoAdjust={autoAdjust}
      defaultScale={defaultScale}
      toolbar={toolbar}
      disableWheelZoom={disableWheelZoom}
    >
      <div className={cls('org-tree-container')} style={style}>
        <div className={cls('org-tree', `${layout} org-tree`)}>
          <TreeNode
            key={refresh}
            {...props}
            nodeKey={nodeKey}
            placement={placement}
            layout={layout}
            nodeKeys={nodeKeys}
            expandAll={expandAll}
            onExpand={handleExpand}
          />
        </div>
      </div>
    </DragableContainer>
  );
}

export default OrgTree;
