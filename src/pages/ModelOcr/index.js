import React, { Component } from 'react';
import BasicTab from './components/BasicTab';

// 应用场景->OCR识别
export default class ModelOcr extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="model-ocr-page">
          {/* 基础 Tab 组件 */}
          <BasicTab />
      </div>
    );
  }
}
