import React, { Component } from 'react';
import { Table, Button, Tab, Upload, Grid } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';
import ImgBlock from '../ImgBlock/index';

// import CustomBlock from './components/CustomBlock';
// import data from './data';

const { Row, Col } = Grid;

export default class BasicTab extends Component {
  static displayName = 'BasicTab';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { tab: '人脸识别', key: 'face_recognition',
          url1: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgRL.jpg',
          url2: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgRL_out.jpg',
          title1: '原始图片', title2: '识别结果',
          content: '人脸识别介绍人脸识别介绍人脸识别介绍人脸识别介绍人脸识别人脸识别介绍人脸识别介绍人脸识别介绍人脸识别介绍人脸识别人脸识别介绍人脸识别介绍人脸识别介绍人脸识别介绍人脸识别介绍人脸识别介绍人脸识别介绍人脸识别介绍人脸识别介绍人脸识别介绍人脸识别介绍人脸识别介绍' },
        { tab: '人脸对比', key: 'face_compare',
          url1:'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgDB1.jpg',
          url2:'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgDB2.jpg',
          title1: '对比图片1', title2: '对比图片2',
          content: '人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍' },
        { tab: '多人脸检测', key: 'face_many',
          url1:'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgDR.jpg',
          url2:'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgDR_out.jpg',
          title1: '原始图片', title2: '识别结果',
          content: '多人脸检测介绍多人脸检测介绍多人脸检测介绍多人脸检测介绍多人脸检测介绍多人脸检测介绍多人脸检测介绍多人脸检测介绍多人脸检测介绍多人脸检测介绍多人脸检测介绍多人脸检测介绍多人脸检测介绍多人脸检测介绍多人脸检测介绍多人脸检测介绍多人脸检测介绍多人脸检测介绍多人脸检测介绍多人脸检测介绍多人脸检测介绍多人脸检测介绍多人脸检测介绍多人脸检测介绍多人脸检测介绍多人脸检测介绍多人脸检测介绍' },
      ],
      currentId: 1,
      currenturl: '',
    }
  }

  handleTabChange = (key) => {
    this.setState({
      tabKey: key,
    });
  };

  changeState = (url, id) => {
    this.setState(() => {
      this.state.currentId = id;
      this.state.currenturl = url;
    });
  }

  render() {
    return (
      <div className="basic-tab">
        <IceContainer title='识别项目' className={styles.tabCardStyle}>
          <Tab shape='wrapped' onChange={this.handleTabChange}>
            {this.state.tabs.map((item) => <Tab.Item key={item.key} title={item.tab} onClick={this.changeState.bind(this, item.url, item.id)}>
            {/* <Table dataSource={[item]}>
              <Table.Column title={'算法模型介绍及使用方法'} dataIndex="content"/>
            </Table> */}
            <div className={styles.detached}>
              {item.content}
            </div>
              {/* <Row className={styles.contentStyle}>
                <Col s="12" l="10">
                  {item.content}
                </Col>
              </Row> */}
            <Upload
              action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
              multiple>
              <Button type="primary" style={{ margin: '30px 0 10px' }}>上传图片</Button> &nbsp;&nbsp;
            </Upload>
            <ImgBlock url1={item.url1} url2={item.url2} alt={item.key} title1={item.title1} title2={item.title2}/>
            </Tab.Item>)}
          </Tab>
        </IceContainer>
      </div>
    );
  }
}