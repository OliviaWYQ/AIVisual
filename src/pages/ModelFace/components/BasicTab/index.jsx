import React, { Component } from 'react';
import { Tab } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

// import CustomBlock from './components/CustomBlock';
import data from './data';

export default class BasicTab extends Component {
  static displayName = 'BasicTab';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      dataSource: data,
      tabKey: 'face_recognition',
    };
  }

  handleTabChange = (key) => {
    this.setState({
      tabKey: key,
    });
  };

  render() {
    const tabs = [
      { tab: '人脸识别', key: 'face_recognition' },
      { tab: '人脸对比', key: 'face_compare' },
      { tab: '多人脸检测', key: 'face_many' },
    ];

    return (
      <div className="basic-tab">
        <IceContainer title='识别项目' className={styles.tabCardStyle}>
          <Tab shape='text' onChange={this.handleTabChange} contentStyle={{ display: 'none' }}>
            {tabs.map((item) => <Tab.Item key={item.key} title={item.tab} />)}
          </Tab>
{/* 
          <CustomBlock
            dataSource={dataSource[this.state.tabKey]}
            // columns={this.columns}
            hasBorder={false}
          />
           */}
        </IceContainer>
      </div>
    );
  }
}