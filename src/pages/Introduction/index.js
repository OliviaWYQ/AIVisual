import React, { Component } from 'react';
import AbilityIntroduction from './components/AbilityIntroduction';

// 平台介绍->新特性
export default class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="introduction-page">
        {/* 新特性 */}
        <AbilityIntroduction />
      </div>
    );
  }
}
