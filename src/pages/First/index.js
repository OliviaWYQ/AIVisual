import React, { Component } from 'react';
import AbilityIntroduction from './components/AbilityIntroduction';
import LandingIntroBanner from './components/LandingIntroBanner';

export default class First extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="first-page">
        <LandingIntroBanner />
        {/* 产品能力介绍 */}
        <AbilityIntroduction />
      </div>
    );
  }
}
