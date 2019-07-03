import React, { Component } from 'react';
import BasicTab from './components/BasicTab';

// 应用场景->人脸识别
export default class ModelFace extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="model-face-page">
        {/* 基础 Tab 组件 */}
        <BasicTab />
        {/* <ImgBlock /> */}
      </div>
    );
  }
}
