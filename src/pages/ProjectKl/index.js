import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
// import { Paragraph } from '@alifd/next';
import SimpleFluencyForm from './components/SimpleFluencyForm';

const content = '客流预测系统采用蜂窝基站定位获取该区域的手机位置信息，每隔5分钟更新实时客流数据。可预测交通枢纽、热门景点、学校、医院、购物中心等关键地区在未来一天、一周、一个月的客流人数。通过预测客流发展趋势，可进一步优化人力资源、公共资源配置，从而缓解客流压力，或提升客流量转化率。';

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
            <div style={{ display: 'flex', paddingLeft: '60px', paddingRight: '60px' }}>
              <h4>{content}</h4>
            </div>
          </IceContainer>
          {/* 算法流程图 */}
          <SimpleFluencyForm />
        </IceContainer>
      </div>
    );
  }
}
