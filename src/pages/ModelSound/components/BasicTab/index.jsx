import React, { Component } from 'react';
import {  Overlay, Table, Button, Tab, Upload, Grid } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

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
        { tab: '声音预警', key: 'sound_warning',
          url1: '#',
          url2: '#',
          title1: '声音源', title2: '识别结果',
          content: '声音预警介绍', 
          result: '设备是否正常：' },
        { tab: '声音识别', key: 'sound_recognition',
          url1:'#',
          url2:'#',
          title1: '声音源', title2: '识别结果',
          content: '声音识别介绍', 
          result: '文字内容：'  },
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
    setTimeout(() => {
        this.setState({currentResult: result, currenttab:tab, currenturl:url}, ()=>{
          // console.log("setTimeout setState callback " + this.state.currenttab, this.state.currenturl, this.state.currentResult);
        });
    }, 0);
  }

  render() {
    return (
      <div className="basic-tab">
        <IceContainer title='声音识别项目' className={styles.tabCardStyle}>
          <Tab shape='wrapped' onChange={this.handleTabChange}>
            {this.state.tabs.map((item) => <Tab.Item key={item.key} title={item.tab} onClick={this.changeState.bind(this, item.url, item.tab, item.result)}>
            <div className={styles.detached}>
              {item.content}
            </div>
            </Tab.Item>)}
          </Tab>
        </IceContainer>
      </div>
    );
  }
}