import React, { Component } from 'react';
import SimpleFluencyForm from './components/SimpleFluencyForm';
import IceContainer from '@icedesign/container';
import { Paragraph } from '@alifd/next';

const content = '电信反欺诈项目介绍电信反欺诈项目介绍电信反欺诈项目介绍电信反欺诈项目介绍电信反欺诈项目介绍电信反欺诈项目介绍电信反欺诈项目介绍电信反欺诈项目介绍电信反欺诈项目介绍电信反欺诈项目介绍电信反欺诈项目介绍电信反欺诈项目介绍电信反欺诈项目介绍电信反欺诈项目介绍电信反欺诈项目介绍电信反欺诈项目介绍电信反欺诈项目介绍电信反欺诈项目介绍电信反欺诈项目介绍电信反欺诈项目介绍电信反欺诈项目介绍电信反欺诈项目介绍电信反欺诈项目介绍';

export default class ProjectFraud extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="project-fraud-page">
        <IceContainer>
          <h2 align="center" >电信反欺诈项目</h2>
          <IceContainer title='项目介绍' >
            <Paragraph>{content}</Paragraph>
          </IceContainer>
          <SimpleFluencyForm />
        </IceContainer>
      </div>
    );
  }
}
