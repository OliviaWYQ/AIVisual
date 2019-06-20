import React, { Component } from 'react';
import { Tab } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

export default class BasicTab extends Component {
  static displayName = 'BasicTab';

  render() {
    const tabs = [
      { tab: 'OCR识别', key: 'ocr' },
      { tab: '车牌识别', key: 'chepai' },
      { tab: '人脸识别', key: 'face' },
      { tab: '人脸对比', key: 'face_compare' },
      { tab: '人脸统计', key: 'face_sum' },
    ];

    return (
      <div className="basic-tab">
        <IceContainer title='选择模型' className={styles.tabCardStyle}>
          <Tab contentStyle={{ display: 'none' }}>
            {tabs.map((item) => <Tab.Item key={item.key} title={item.tab} />)}
          </Tab>
        </IceContainer>
      </div>
    );
  }
}