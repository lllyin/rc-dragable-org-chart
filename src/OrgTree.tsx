import React from 'react';
import classnames from './utils/classnames';
import { TreeData, OrgTreeProps } from './tree.type';
import TreeNode from './TreeNode';
import DragableContainer from './DragableContainer/index';

import styles from './OrgTree.module.less';

const cls = classnames(styles);

export default function OrgTree(props: OrgTreeProps) {
  const { pan, zoom, minZoom, maxZoom, zoomStep, layout } = props;

  return (
    <DragableContainer
      pan={pan}
      zoom={zoom}
      minZoom={minZoom}
      maxZoom={maxZoom}
      zoomStep={zoomStep}
    >
      <div className={cls('org-tree-container')}>
        <div className={cls('org-tree', layout)}>
          <TreeNode {...props} />
        </div>
      </div>
    </DragableContainer>
  );
}
