import React, { Component } from 'react';
import EditableTable from './components/EditableTable';
import ModelCards from './components/ModelCards';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-page">
        {/* 项目历史 */}
        <ModelCards />
        {/* 数据路径 */}
        <EditableTable />
      </div>
    );
  }
}
