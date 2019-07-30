import React, { Component } from 'react';
import { Overlay, Button, Tab, Upload, Input, Select } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';
import ImgBlock from '../ImgBlock/index';
import CameraAPI from '../CameraAPI/index';

export default class BasicTab extends Component {
  static displayName = 'BasicTab';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { tab: '人脸识别',
          key: 'face_recognition',
          url1: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgRL.jpg',
          url2: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgRL_res.jpg',
          title1: '原始图片',
          title2: '识别结果',
          content: '智能检测图片中是否含有人脸，如果是则在指定人脸数据库中进行匹配并返回分析结果。当前支持的人脸识别属性有：姓名、性别、年龄。',
          result: '姓名：张丽；性别：女；年龄：25' },
        { tab: '人脸对比',
          key: 'face_compare',
          url1: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgDB1.jpg',
          url2: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgDB2.jpg',
          title1: '对比图片1',
          title2: '对比图片2',
          content: '通过提取人的面部特征，计算两张人脸的相似度，从而判断是否为同一人。人脸对比技术被广泛应用于基于人脸的真实身份验证、人证合一验证等。',
          result: '相似度：99%' },
        { tab: '人数统计',
          key: 'face_many',
          url1: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgDR.jpg',
          url2: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgDR_res.jpg',
          title1: '原始图片',
          title2: '识别结果',
          content: '智能搜索并确定其中是否含有人脸，返回图中包含的人脸个数。',
          result: '总人数：9' },
        { tab: '视频流分析',
          key: 'face_video',
          url1: '#',
          url2: '#',
          title1: '',
          title2: '',
          content: '智能识别视频流中的人脸属性，并返回分析结果。当前支持的人脸识别属性有：姓名、性别、年龄。',
          result: '' },
      ],
      // eslint-disable-next-line react/no-unused-state
      currenttab: 'tab',
      // eslint-disable-next-line react/no-unused-state
      currenturl: '',
      visible: false,
      currentResult: 'none',
      testCOMP: {
        component: 'a',
        href: 'http://192.168.16.176:5000/model_face_compare',
        target: '_blank',
      },
      testREC: {
        component: 'a',
        href: 'http://127.0.0.1:5000/model_video_face_recog',
        target: '_blank',
      },
      testVIDEO: {
        component: 'a',
        href: 'http://127.0.0.1:5000/model_video_face_recog',
        target: '_blank',
      },
    };
  }

  handleTabChange = (key) => {
    this.setState({
      // eslint-disable-next-line react/no-unused-state
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
      // eslint-disable-next-line react/no-unused-state
      this.setState({ currentResult: result, currenttab: tab, currenturl: url }, () => {
        // console.log("setTimeout setState callback " + this.state.currenttab, this.state.currenturl, this.state.currentResult);
      });
    }, 0);
  }

  // 检查State
  // componentDidUpdate(){
  //     console.log('update', this.state.currenttab, this.state.currentResult)
  // }

  onClick = () => {
    this.setState({
      visible: true,
    });
  }

  onClose = () => {
    this.setState({
      visible: false,
    });
  }

  renderPop = (tab) => {
    // 人脸对比
    if (tab === '人脸对比') {
      // console.log(tab)
      return (
        <div>
          <Button type="primary"
            style={{ position: 'relative', margin: '30px 95px 0px' }}
            onClick={this.onClick}
            ref={ref => {
                this.btn = ref;
            }}
          > 查看结果
          </Button>
          <Button
            {...this.state.testCOMP}
            type="primary"
            style={{ position: 'relative', margin: '30px -82px 0px' }}
          >
            测试接口
          </Button>
          <Overlay visible={this.state.visible}
            safeNode={() => this.btn}
            align="cc cc"
            hasMask
            disableScroll
            onRequestClose={this.onClose}
          >
            <span className={styles.overlay}>
              <h2>{this.state.currentResult}</h2>
            </span>
          </Overlay>
          <Upload
            action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
            multiple
            listType="text"
          >
            <Button type="primary" style={{ margin: '-38px 0 10px' }}>上传图片</Button> &nbsp;&nbsp;
          </Upload>
        </div>
      );
    }
    // 摄像头
    if (tab === '视频流分析') {
      // console.log('video')
      return (
        <div>
          <Button
            {...this.state.testVIDEO}
            type="primary"
            style={{ position: 'relative', margin: '30px 20px 10px' }}
          >
            测试接口
          </Button>
          <IceContainer title="设置摄像头">
            {/* <Input name="video" autoComplete="on" /> */}
            <div className={styles.select}>
              <Select dataSource={['本地', '远程']} useVirtual defaultValue="本地" />
            </div>
            <div style={{ margin: '-32px 120px 0' }}>
              <Button type="primary" >开启</Button>
              <Button type="primary" style={{ marginLeft: '10px' }}>关闭</Button>
            </div>
          </IceContainer>
        </div>
      );
    }
    if (tab === '人脸识别') {
      return (
        <div>
          {/* 调用摄像头 */}
          <div style={{ position: 'relative', margin: '30px 95px 0px' }}>
            <CameraAPI />
          </div>
          <Button
            {...this.state.testREC}
            type="primary"
            style={{ position: 'relative', margin: '-38px 190px 10px' }}
          >
            测试接口
          </Button>
          <div style={{ margin: '-77px 0 5px' }}>
            <Upload
              action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
              multiple
              listType="text"
            >
              <Button type="primary" style={{ margin: '30px 0 10px' }}>上传图片</Button> &nbsp;&nbsp;
            </Upload>
          </div>
        </div>
      );
    }
    // 其他
    return (
      <div>
        {/* 调用摄像头 */}
        <div style={{ position: 'relative', margin: '30px 95px 0px' }}>
          <CameraAPI />
        </div>
        <div style={{ margin: '-62px 0 5px' }}>
          <Upload
            action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
            multiple
            listType="text"
          >
            <Button type="primary" style={{ margin: '30px 0 10px' }}>上传图片</Button> &nbsp;&nbsp;
          </Upload>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="basic-tab">
        <IceContainer title="人脸识别项目" className={styles.tabCardStyle}>
          <Tab shape="wrapped" onChange={this.handleTabChange}>
            {this.state.tabs.map((item) => (
              <Tab.Item key={item.key} title={item.tab} onClick={this.changeState.bind(this, item.url, item.tab, item.result)}>
                <div className={styles.detached}>
                  <p>{item.content}</p>
                </div>
                {this.renderPop(item.tab)}
                <ImgBlock url1={item.url1} url2={item.url2} alt={item.key} title1={item.title1} title2={item.title2} result={item.result} />
              </Tab.Item>))}
          </Tab>
        </IceContainer>
      </div>
    );
  }
}
