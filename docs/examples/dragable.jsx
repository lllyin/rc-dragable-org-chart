import React, { Component } from 'react';
import DragableContainer from '../../src/DragableContainer/index';
import OrgTreeDemo from './basic';

export default function DragableContainerDemo(props) {
  return (
    <DragableContainer>
      <OrgTreeDemo />
      {/* <div style={{ width: 200, height: 100, backgroundColor: 'red' }}>box</div> */}
    </DragableContainer>
  );
}
