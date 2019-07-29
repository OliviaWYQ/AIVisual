import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
// import { Paragraph } from '@alifd/next';
import SimpleFluencyForm from './components/SimpleFluencyForm';

const content = '近年来，我国电信诈骗案件的涉案金额和数量正以每年20%到30%的速度快速增长，电信网络新型违法犯罪，严重危害人民群众财产安全，影响社会和谐稳定。电信反欺诈系统基于大数据和人工智能前沿技术，采用机器学习、深度学习等算法，通过分析电信用户通话记录，可快速识别并标记疑似诈骗号码，助力公安部高效准确锁定犯罪嫌疑人。';

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
            <div style={{display: 'flex', paddingLeft:'60px', paddingRight:'60px'}}>
              <h4>{content}</h4>
            </div>
          </IceContainer>
          <SimpleFluencyForm />
        </IceContainer>
      </div>
    );
  }
}
