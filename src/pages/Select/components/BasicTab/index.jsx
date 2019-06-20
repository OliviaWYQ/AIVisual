import React, { Component } from 'react';
import { Tab } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

export default class BasicTab extends Component {
  static displayName = 'BasicTab';

  render() {
    const tabs = [
      { tab: '客流预测', key: 'keliu' },
      { tab: '声音预警', key: 'sheng' },
      { tab: '电信反欺诈', key: 'dianxin' },
    ];

    return (
      <div className="basic-tab">
        <IceContainer title="项目类型" className={styles.tabCardStyle}>
          <Tab contentStyle={{ display: 'none' }}>
            {tabs.map((item) => <Tab.Item key={item.key} title={item.tab} />)}
          </Tab>
        </IceContainer>
      </div>
    );
  }
}