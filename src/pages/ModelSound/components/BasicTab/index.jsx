import React, { Component } from 'react';
import {  Overlay, Table, Button, Tab, Upload, Grid } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';
import IcePanel from '@icedesign/panel';
// import CustomBlock from './components/CustomBlock';
// import data from './data';
import MicAPI from '../MicAPI/index';

const { Row, Col } = Grid;

export default class BasicTab extends Component {
  static displayName = 'BasicTab';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { tab: '声音识别', key: 'sound_warning',
          title1: '声音源', title2: '识别结果',
          content: '声音识别介绍', 
          result: '设备是否正常：' },
        { tab: '语言识别', key: 'sound_recognition',
          title1: '声音源', title2: '识别结果',
          content: '语言识别介绍', 
          result: '文字内容：'  },
      ],
      currenttab: '声音识别',
      visible: false,
      currentResult: '设备是否正常：',
    }
  }

  handleTabChange = (key) => {
    this.setState({
      tabKey: key,
    });
  };

  changeState = (tab, result) => {
    setTimeout(() => {
        this.setState({currentResult: result, currenttab:tab}, ()=>{
          // console.log("setTimeout setState callback " + this.state.currenttab, this.state.currentResult);
        });
    }, 0);
  }

  render() {
    return (
      <div className="basic-tab">
        <IceContainer title='声音识别项目' className={styles.tabCardStyle}>
          <Tab shape='wrapped' onChange={this.handleTabChange}>
            {this.state.tabs.map((item) => <Tab.Item key={item.key} title={item.tab} onClick={this.changeState.bind(this, item.tab, item.result)}>
            <div className={styles.detached}>
              {item.content}
            </div>
            </Tab.Item>)}
          </Tab>
          <Upload
            action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
            multiple
            listType="text">
            <Button type="primary" style={{ margin: '30px 0 0px' }}>上传音频</Button> &nbsp;&nbsp;
          </Upload>
          {/* 录音模块 */}
          <MicAPI />
          <IcePanel style={{ marginTop: '30px', marginBottom: '10px' }}>
              <IcePanel.Header>
                识别结果
              </IcePanel.Header>
              <IcePanel.Body>
                {this.state.currentResult}
              </IcePanel.Body>
            </IcePanel>

        </IceContainer>

       
      </div>
    );
  }
} 