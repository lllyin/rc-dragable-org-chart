import React, { Component } from 'react';

import OrgTree from 'rc-dragable-org-chart';
class OrgTreeDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        id: 0,
        label: '测试有限公司',
        children: [
          {
            id: 1,
            label: '技术部',
            children: [
              {
                id: 4,
                label: '后端工程师',
              },
              {
                id: 5,
                label: '前端工程师',
              },
              {
                id: 6,
                label: '运维工程师',
              },
            ],
          },
          {
            id: 2,
            label: '人事部',
          },
          {
            id: 3,
            label: '销售部',
          },
        ],
      },
      horizontal: false,
      collapsable: false,
      expandAll: true,
      labelClassName: 'bg-white',
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const { data, horizontal, collapsable, expandAll, labelClassName } = this.state;

    return (
      <div className="m-t-lg text-center">
        <OrgTree
          // disableWheelZoom
          nodeKey="id"
          data={data}
          placement="center"
          horizontal={horizontal}
          collapsable={collapsable}
          labelClassName={labelClassName}
          defaultScale={0.5}
          expandAll={expandAll}
          // toolbar={[]}
          // renderContent={(data, level) => {
          //   console.log('level:', data.label, level)
          //   return data.label;
          // }}
          onClick={(data) => {
            console.log('点击node', data);
          }}
        ></OrgTree>
      </div>
    );
  }
}

export default OrgTreeDemo;
