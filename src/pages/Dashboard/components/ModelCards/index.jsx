import React, { Component } from 'react';
import { Grid, Icon } from '@alifd/next';
import styles from './index.module.scss';
import IceContainer from '@icedesign/container';

const { Row, Col } = Grid;

const input = {
  project: [
    {
      title: '项目1',
      body: [
        {
          label: '场景',
          value: '客流预测',
        },
        {
          label: '时间',
          value: '2019-01-02',
        },
        {
          label: '用户',
          value: '用户名',
        },
        {
          label: '备注',
          value: '使用参数1',
        },
      ],
    },
    {
      title: '项目2',
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
    },
    {
      title: '项目3',
      body: [
        {
          label: '场景',
          value: '客流预测',
        },
        {
          label: '时间',
          value: '2019-05-20',
        },
        {
          label: '用户',
          value: '用户名',
        },
        {
          label: '备注',
          value: '使用参数2',
        },
      ],
    },
    {
      title: '项目4',
      body: [
        {
          label: '场景',
          value: '声音识别',
        },
        {
          label: '时间',
          value: '2019-04-27',
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
    },
  ]
}

const getData = (input) => {
  return Array.from(input).map((item, index) => {
      return {
        key: index + 1,
        title: item.title,
        body: item.body,
      };
  });
};

export default class ModelCards extends Component {
  static displayName = 'ModelCards';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      dataSource: input.project
    };
  }

  render() {
    const mockData = getData(this.state.dataSource);
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

