import React, { Component } from 'react';
import SimpleFluencyForm from './components/SimpleFluencyForm';
import IceContainer from '@icedesign/container';
import { Paragraph } from '@alifd/next';

const content = 'Eu magna zril ancillae quo, et has nusquam volutpat, an stet vivendo definitionem per. Ei deleniti salutandi his. Eros deleniti persequeris ne cum, has ei quod audiam deserunt, at sea homero graeci torquatos. Id tacimates molestiae cum, per tota solum ne, ei eius veniam detraxit vix. Melius consulatu ius ea, lobortis scripserit pro cu, ex nobis putent iriure est. Nec ubique principes vulputate ut.';

// 应用场景->反欺诈
export default class ProjectFraud extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="project-fraud-page">
        <IceContainer>
          <h2 align="center" >电信反欺诈</h2>
          <IceContainer title="功能介绍" >
            <Paragraph>{content}</Paragraph>
          </IceContainer>
          <SimpleFluencyForm />
        </IceContainer>
      </div>
    );
  }
}
