import React, { Component } from 'react';
import BasicTab from './components/BasicTab';

// 应用场景->声音识别
export default class ModelSound extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="model-sound-page">
        {/* 基础 Tab 组件 */}
        <BasicTab />
      </div>
    );
  }
}
