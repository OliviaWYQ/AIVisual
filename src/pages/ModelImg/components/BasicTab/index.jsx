import React, { Component } from 'react';
import { Overlay, Button, Tab, Upload } from '@alifd/next';
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
        { tab: '图片识别',
          key: 'img_recognition',
          url1: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgThing.jpg',
          url2: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgThing_res.jpg',
          title1: '原始图片',
          title2: '识别结果',
          content: '准确快速地检测图像中的内容信息，返回检测出的内容名称。',
          result: '物体名称：手机' },
        { tab: '图片对比',
          key: 'img_compare',
          url1: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/Img_cat.jpg',
          url2: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/Img_dog.jpg',
          title1: '对比图片1',
          title2: '对比图片2',
          content: '通过检测图像中的内容信息，对比检测出的物体相似度。',
          result: '相似度：10%' },
        { tab: '目标统计',
          key: 'img_many',
          url1: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/Img_fruit2.jpg',
          url2: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/Img_fruit2_res.jpg',
          title1: '原始图片',
          title2: '识别结果',
          content: '智能搜索图像中的包含的物体，并返回物体总个数。',
          result: '总个数：3' },
      ],
      // eslint-disable-next-line react/no-unused-state
      currenttab: 'tab',
      // eslint-disable-next-line react/no-unused-state
      currenturl: '',
      visible: false,
      currentResult: 'none',
    };
  }

  handleTabChange = (key) => {
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      tabKey: key,
    });
  };

  changeState = (url, tab, result) => {
    setTimeout(() => {
      // eslint-disable-next-line react/no-unused-state
      this.setState({ currentResult: result, currenttab: tab, currenturl: url }, () => {
        // console.log("setTimeout setState callback " + this.state.currenttab, this.state.currenturl, this.state.currentResult);
      });
    }, 0);
  }

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
    if (tab === '图片对比') {
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
    } return (
      <div>
        <div style={{ position: 'relative', margin: '30px 95px 0px' }}>
          {/* 调用摄像头 */}
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
        <IceContainer title="识别项目" className={styles.tabCardStyle}>
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
