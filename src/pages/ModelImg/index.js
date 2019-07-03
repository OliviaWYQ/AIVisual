import React, { Component } from 'react';
import BasicTab from './components/BasicTab';

// 应用场景->图片识别
export default class ModelImg extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="model-img-page">
        {/* 基础 Tab 组件 */}
        <BasicTab />
      </div>
    );
  }
}
