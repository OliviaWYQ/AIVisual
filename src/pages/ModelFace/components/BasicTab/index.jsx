import React, { Component } from 'react';
import {  Overlay, Table, Button, Tab, Upload, Grid } from '@alifd/next';
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
          content: '人脸识别介绍人脸识别介绍人脸识别介绍人脸识别介绍人脸识别人脸识别介绍人脸识别介绍人脸识别介绍人脸识别介绍人脸识别人脸识别介绍人脸识别介绍人脸识别介绍人脸识别介绍人脸识别介绍人脸识别介绍人脸识别介绍人脸识别介绍人脸识别介绍人脸识别介绍人脸识别介绍人脸识别介绍', 
          result: '姓名：性别：年龄：' },
        { tab: '人脸对比', key: 'face_compare',
          url1:'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgDB1.jpg',
          url2:'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgDB2.jpg',
          title1: '对比图片1', title2: '对比图片2',
          content: '人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍人脸对比介绍', 
          result: '相似度：99%'  },
        { tab: '人数统计', key: 'face_many',
          url1:'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgDR.jpg',
          url2:'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgDR_out.jpg',
          title1: '原始图片', title2: '识别结果',
          content: '人数统计介绍人数统计介绍人数统计介绍人数统计介绍人数统计介绍人数统计介绍人数统计介绍人数统计介绍人数统计介绍人数统计介绍人数统计介绍人数统计介绍人数统计介绍人数统计介绍人数统计介绍人数统计介绍人数统计介绍人数统计介绍人数统计介绍人数统计介绍人数统计介绍人数统计介绍人数统计介绍', 
          result: '总人数：'  },
      ],
      currenttab: 'tab',
      currenturl: '',
      visible: false,
      currentResult: 'none',
    }
  }

  handleTabChange = (key) => {
    this.setState({
      tabKey: key,
    });
  };

  changeState = (url, tab, result) => {
    // setstate 不保证同步
    // this.setState(() => {
    //   this.state.currenttab = tab;
    //   this.state.currenturl = url;
    //   this.state.currentResult = result;
    //   // console.log('setstate:', this.state.currenttab, this.state.currentResult)
    // });

    // 使用 setTimeout 使 setstate同步
    setTimeout(() => {
        this.setState({currentResult: result, currenttab:tab, currenturl:url}, ()=>{
          // console.log("setTimeout setState callback " + this.state.currenttab, this.state.currenturl, this.state.currentResult);
        });
    }, 0);
  }

  // componentDidUpdate(){
  //     console.log('update', this.state.currenttab, this.state.currentResult)
  // }

  onClick = () => {
      this.setState({
          visible: true
      });
  }

  onClose = () => {
      this.setState({
          visible: false
      });
  }

  renderPop = (tab) => {
    // console.log('renderpop', tab, this.state.currenttab, this.state.currentResult )
    if (tab == '人脸对比') {
      return(
            <div>
            <Button type="primary" style={{ position: 'relative', margin: '30px 95px 0px' }} onClick={this.onClick} ref={ref => {
                this.btn = ref;
            }}> 查看结果 </Button>
            <Overlay visible={this.state.visible}
                safeNode={() => this.btn}
                align="cc cc"
                hasMask
                disableScroll
                onRequestClose={this.onClose}>
                <span className={styles.overlay}>
                    <h2>{this.state.currentResult}</h2>
                </span>
            </Overlay>
            <Upload
              action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
              multiple
              listType="text">
              <Button type="primary" style={{ margin: '-42px 0 10px' }}>上传图片</Button> &nbsp;&nbsp;
            </Upload>
        </div>
      );
    } return (
      <Upload
        action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
        multiple
        listType="text">
        <Button type="primary" style={{ margin: '30px 0 10px' }}>上传图片</Button> &nbsp;&nbsp;
      </Upload>
    )
  }

  render() {
    return (
      <div className="basic-tab">
        <IceContainer title='人脸识别项目' className={styles.tabCardStyle}>
          <Tab shape='wrapped' onChange={this.handleTabChange}>
            {this.state.tabs.map((item) => <Tab.Item key={item.key} title={item.tab} onClick={this.changeState.bind(this, item.url, item.tab, item.result)}>
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
            {this.renderPop(item.tab)}
            {/* <Upload
              action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
              multiple
              listType="text">
              <Button type="primary" style={{ margin: '30px 0 10px' }}>上传图片</Button> &nbsp;&nbsp;
            </Upload> */}
            <ImgBlock url1={item.url1} url2={item.url2} alt={item.key} title1={item.title1} title2={item.title2} result={item.result} />
            </Tab.Item>)}
          </Tab>
        </IceContainer>
      </div>
    );
  }
}