import React, { Component } from 'react';
import { Button, Tab, Upload } from '@alifd/next';
import IceContainer from '@icedesign/container';
import IcePanel from '@icedesign/panel';
import styles from './index.module.scss';
import MicAPI from '../MicAPI/index';

export default class BasicTab extends Component {
  static displayName = 'BasicTab';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { tab: '声音识别',
          key: 'sound_warning',
          title1: '声音源',
          title2: '识别结果',
          content: '通过声音识别，检测生产环境中的冷却塔设备正常工作或发生故障。',
          result: '设备是否正常：' },
        { tab: '语音识别',
          key: 'sound_recognition',
          title1: '声音源',
          title2: '识别结果',
          content: '通过自然语言处理，将60秒内的中文语音转换成对应的文字信息。',
          result: '文字内容：' },
      ],
      // eslint-disable-next-line react/no-unused-state
      currenttab: '声音识别',
      // eslint-disable-next-line react/no-unused-state
      visible: false,
      currentResult: '设备是否正常：',
    };
  }

  handleTabChange = (key) => {
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      tabKey: key,
    });
  };

  changeState = (tab, result) => {
    setTimeout(() => {
      // eslint-disable-next-line react/no-unused-state
      this.setState({ currentResult: result, currenttab: tab }, () => {
        // console.log("setTimeout setState callback " + this.state.currenttab, this.state.currentResult);
      });
    }, 0);
  }

  render() {
    return (
      <div className="basic-tab">
        <IceContainer title="声音识别项目" className={styles.tabCardStyle}>
          <Tab shape="wrapped" onChange={this.handleTabChange}>
            {this.state.tabs.map((item) => (
              <Tab.Item key={item.key} title={item.tab} onClick={this.changeState.bind(this, item.tab, item.result)}>
                <div className={styles.detached}>
                  <p>{item.content}</p>
                </div>
              </Tab.Item>))}
          </Tab>
          <Upload
            action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
            multiple
            listType="text"
          >
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
