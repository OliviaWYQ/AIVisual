import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import SimpleFluencyForm from './components/SimpleFluencyForm';
import { Paragraph } from '@alifd/next';

const content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

// 应用场景->客流预测
export default class ProjectKl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="project-kl-page">
        <IceContainer>
          <h2 align="center" >客流预测</h2>
          <IceContainer title="功能介绍" >
            <Paragraph>{content}</Paragraph>
          </IceContainer>
          {/* 算法流程图 */}
          <SimpleFluencyForm />
        </IceContainer>
      </div>
    );
  }
}
