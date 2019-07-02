import React, { Component } from 'react';
import AbilityIntroduction from './components/AbilityIntroduction';

export default class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="introduction-page">
        {/* 描述产品特点区块，深色主题，左文右图展示形式，支持异形图片。 */}
        {/* <ProductDescription /> */}
        {/* 用于左文右图产品介绍模块 */}
        {/* <ProductIntro /> */}
        {/* 用于描述产品的特点，左图右文形式。 */}
        {/* <ProductFeature /> */}
        {/* 平台工具介绍 */}
        {/* <PlatformToolsIntro /> */}
        <AbilityIntroduction />
      </div>
    );
  }
}
