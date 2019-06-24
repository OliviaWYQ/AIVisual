import React, { Component } from 'react';
import BasicTab from './components/BasicTab';
import ImgBlock from './components/ImgBlock';

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
        <ImgBlock />
      </div>
    );
  }
}
