import React, { Component } from 'react';
import ExpandedTable from './components/ExpandedTable';

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="select-page">
        {/* 额外渲染和选择混合表格 */}
        <ExpandedTable />
      </div>
    );
  }
}
