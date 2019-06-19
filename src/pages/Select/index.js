import React, { Component } from 'react';
import ExpandedTable from './components/ExpandedTable';
import ColumnForm from './components/ColumnForm';
// import UploadFile from './components/UploadFile';

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="select-page">
        <ColumnForm />
        {/* 额外渲染和选择混合表格 */}
        <ExpandedTable />
        {/* <UploadFile /> */}
      </div>
    );
  }
}
