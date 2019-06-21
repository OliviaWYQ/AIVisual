import React, { Component } from 'react';
import { Tab, Button, Grid, } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default class BasicTab extends Component {
  static displayName = 'BasicTab';

  render() {
    const tabs = [
      { tab: '客流预测', key: 'keliu', content: '客流预测项目介绍客流预测项目介绍客流预测项目介绍客流预测项目介绍客流预测项目介绍客流预测项目介绍客流预测项目介绍客流预测项目介绍客流预测项目介绍客流预测项目介绍客流预测项目介绍' },
      { tab: '声音预警', key: 'sheng',  content: '声音预警项目介绍声音预警项目介绍声音预警项目介绍声音预警项目介绍声音预警项目介绍声音预警项目介绍声音预警项目介绍声音预警项目介绍声音预警项目介绍声音预警项目介绍声音预警项目介绍'  },
      { tab: '电信反欺诈', key: 'dianxin',  content: '电信反欺诈项目介绍电信反欺诈项目介绍电信反欺诈项目介绍电信反欺诈项目介绍电信反欺诈项目介绍电信反欺诈项目介绍电信反欺诈项目介绍电信反欺诈项目介绍电信反欺诈项目介绍电信反欺诈项目介绍电信反欺诈项目介绍'  },
    ];

    return (
      <div className="basic-tab">
        <IceContainer title="项目类型" className={styles.tabCardStyle}>
          <Tab shape='wrapped'>
            {
              tabs.map((item) => <Tab.Item key={item.key} title={item.tab}>
                    <Row className={styles.contentStyle}>
                      <Col s="12" l="10">
                        {item.content}
                      </Col>
                    </Row>
                  </Tab.Item>)
            }
          </Tab>
          {/* <Col s="12" l="10">
            <div className={styles.buttonStyle}>
                <Button type="primary">确定</Button>
            </div>
          </Col> */}
        </IceContainer>
      </div>
    );
  }
}