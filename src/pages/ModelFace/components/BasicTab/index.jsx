import React, { Component } from 'react';
import { Tab, Grid } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';
import IcePanel from '@icedesign/panel';

const { Row, Col } = Grid;

export default class BasicTab extends Component {
  static displayName = 'BasicTab';

  render() {
    const tabs = [
      { tab: '人脸识别', key: 'face_recognition' },
      { tab: '人脸对比', key: 'face_compare' },
      { tab: '多人脸检测', key: 'face_many' },
    ];

    return (
      <div className="basic-tab">
        <IceContainer title='识别项目' className={styles.tabCardStyle}>
          <Tab shape='text' contentStyle={{ display: 'none' }}>
            {tabs.map((item) => <Tab.Item key={item.key} title={item.tab} />)}
          </Tab>
          <Row wrap>
            <Col xxs="24" s="12" l="12">
            <IcePanel style={{marginBottom: '10px', marginRight: '15px'}}>
              <IcePanel.Header>
                原始图片
              </IcePanel.Header>
              <IcePanel.Body>
                <img></img>
              </IcePanel.Body>
            </IcePanel>
            </Col>
            <Col>
            <IcePanel style={{marginBottom: '10px'}}>
              <IcePanel.Header>
                识别结果
              </IcePanel.Header>
              <IcePanel.Body>
                <img></img>
              </IcePanel.Body>
            </IcePanel>
            </Col>
          </Row>
          
        </IceContainer>
      </div>
    );
  }
}