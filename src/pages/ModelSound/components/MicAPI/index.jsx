import React, { Component } from 'react';
import { ReactMic } from 'react-mic';
import { Button } from '@alifd/next';
import styles from './index.module.scss';

export default class MicAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false,
    };
  }

    startRecording = () => {
      this.setState({
        record: true,
      });
      console.log('start recoding');
    }

    stopRecording = () => {
      this.setState({
        record: false,
      });
      console.log('stop recoding');
    }

    // onData(recordedBlob) {
    //   console.log('chunk of real-time data is: ', recordedBlob);
    // }

    // onStop(recordedBlob) {
    //   console.log('recordedBlob is: ', recordedBlob);
    // }

    render() {
      return (
        <div >
          <div className={styles.micbox}>
            <Button type="secondary" onClick={this.startRecording}>开始录音</Button> &nbsp;&nbsp;&nbsp;
            <Button type="secondary" onClick={this.stopRecording}>停止录音</Button>
          </div>
          <div className={styles.micbox}>
            <ReactMic
              record={this.state.record}
              className="sound-wave"
                    // onStop={this.onStop}
                    // onData={this.onData}
              strokeColor="#000000"
              backgroundColor="rgb(220, 222, 227)"
            />
          </div>
        </div>
      );
    }
}
