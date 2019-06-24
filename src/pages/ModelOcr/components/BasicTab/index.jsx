import React, { Component } from 'react';
import { Tab } from '@alifd/next';
// import IceContainer from '@icedesign/container';
// import styles from './index.module.scss';

export default class BasicTab extends Component {
  static displayName = 'BasicTab';

  render() {
    const tabs = [
      { tab: '通用文本 OCR', key: 'tongyong' },
      { tab: '车牌 OCR', key: 'chepai' },
      { tab: '身份证 OCR', key: 'shenfenzheng' },
      { tab: '营业执照 OCR', key: 'yinyezhizhao' },
      { tab: '发票 OCR', key: 'fapiao' },
      { tab: '火车票 OCR', key: 'huochepiao' },
    ];

    return (
      <div className="basic-tab">
        {/* <IceContainer title='识别项目' className={styles.tabCardStyle}>*/}
          <Tab shape='wrapped'>
            {tabs.map((item) => <Tab.Item key={item.key} title={item.tab} />)}
          </Tab>
        {/* </IceContainer>*/}
      </div>
    );
  }
}
