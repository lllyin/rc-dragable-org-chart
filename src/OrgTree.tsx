import React from 'react';
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
    center,
    layout = 'vertical',
  } = props;

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
          <TreeNode {...props} />
        </div>
      </div>
    </DragableContainer>
  );
}

export default OrgTree;
