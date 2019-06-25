import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import SimpleFluencyForm from './components/SimpleFluencyForm';
import { Paragraph } from '@alifd/next';
import IcePanel from '@icedesign/panel';
import IceTitle from '@icedesign/title';

const content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export default class ProjectKl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="project-kl-page">
        <IceContainer>
        <h2 align="center" >客流预测项目</h2>
        {/* <IcePanel style={{marginBottom: '10px'}}> */}
          {/* <IcePanel.Body> */}
            <IceContainer title='项目介绍' >
              <Paragraph>{content}</Paragraph>
            </IceContainer>
          {/* </IcePanel.Body> */}
        {/* </IcePanel> */}
          {/* SimpleFluencyForm */}
          <SimpleFluencyForm />
        </IceContainer>
      </div>
    );
  }
}
