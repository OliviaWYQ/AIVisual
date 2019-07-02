import React, { Component } from 'react';
import { Grid, Icon } from '@alifd/next';
import styles from './index.module.scss';
import IceContainer from '@icedesign/container';

const { Row, Col } = Grid;

const getData = () => {
  return Array.from({ length: 4 }).map((item, index) => {
    return {
      title: `算法名称 0${index + 1}`,
      body: [
        {
          label: '场景',
          value: '人脸识别',
        },
        {
          label: '时间',
          value: '2018-09-20',
        },
        {
          label: '用户',
          value: '用户名',
        },
        {
          label: '备注',
          value: '无',
        },
      ],
    };
  });
};

export default class ModelCards extends Component {
  static displayName = 'ModelCards';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const mockData = getData();
    return (
      <IceContainer title='项目管理'>
        <Row wrap gutter="40" className={styles.row}>
        {mockData.map((data, index) => {
          return (
            <Col l="6" key={index}>
              <div className={styles.modelCards}>
                <div className={styles.head}>
                  <Icon type="electronics" className={styles.icon} /> {data.title}
                </div>
                <div className={styles.body}>
                  {data.body.map((item, key) => {
                    return (
                      <div className={styles.item} key={key}>
                        <span className={styles.label}>{item.label}：</span>
                        <span className={styles.value}>{item.value}</span>
                      </div>
                    );
                  })}
                </div>
                <div className={styles.footer}>
                  <a className={styles.lightBlue }>
                    打开
                  </a>
                  <a className={styles.green }>删除</a>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
      </IceContainer>
    );
  }
}

