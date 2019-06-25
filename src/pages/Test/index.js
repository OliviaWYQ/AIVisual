import React, { Component } from 'react';
import BasicTab from './components/BasicTab';

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="test-page">
        {/* 基础 Tab 组件 */}
        <BasicTab />
      </div>
    );
  }
}
