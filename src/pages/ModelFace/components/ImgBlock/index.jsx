import React, { Component } from 'react';
import { Tab, Grid, Upload, Button } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';
import IcePanel from '@icedesign/panel';
import Img from '@icedesign/img';

const { Row, Col } = Grid;

export default class ImgBlock extends Component {
    static displayName = 'ImgBlock';
  
    state = {
      url1: 'https://img.alicdn.com/tfs/TB1vyxuwHrpK1RjSZTEXXcWAVXa-1350-900.jpg',
      url2: 'https://img.alicdn.com/tfs/TB1vyxuwHrpK1RjSZTEXXcWAVXa-1350-900.jpg'
    };
  
    render() {
      const tabs = [
        { tab: '通用文本 OCR', key: 'tongyong', 
        url1: '../static/ocr.png',
        url2: '#' },
        { tab: '车牌 OCR', key: 'chepai', url1: '#', url2: '#' },
        { tab: '身份证 OCR', key: 'shenfenzheng', url1: '#', url2: '#' },
        { tab: '营业执照 OCR', key: 'yinyezhizhao', url1: '#', url2: '#' },
        { tab: '发票 OCR', key: 'fapiao', url1: '#', url2: '#' },
        { tab: '火车票 OCR', key: 'huochepiao', url1: '#', url2: '#' },
      ];
  
      return (
        <div className="basic-tab">
          <IceContainer className={styles.tabCardStyle}>
          <Upload
                action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
                // beforeUpload={beforeUpload}
                // onChange={onChange}
                // onSuccess={onSuccess}
                multiple
                defaultValue={[{
                    name: 'IMG.png',
                    state: 'done',
                    size: 1024,
                    // downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                    // fileURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                    // imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'
                }]}
            >
                <Button type="primary" style={{margin: '5px 0 10px'}}>上传图片</Button>
            </Upload>

            <Row wrap>
              <Col>
                <IcePanel style={{marginTop: '10px', marginBottom: '10px', marginRight: '10px'}}>
                  <IcePanel.Header>
                    原始图片
                  </IcePanel.Header>
                  <IcePanel.Body>
                  <Img
                    enableAliCDNSuffix={true}
                    width={400}
                    height={300}
                    src={this.state.url1}
                    type="contain"
                    style={{margin: '10px'}}
                  />
                  </IcePanel.Body>
                </IcePanel>
              </Col>
              <Col>
                <IcePanel style={{marginTop: '10px', marginBottom: '10px'}}>
                  <IcePanel.Header>
                    识别结果
                  </IcePanel.Header>
                  <IcePanel.Body>
                  <Img
                    enableAliCDNSuffix={true}
                    width={400}
                    height={300}
                    src={this.state.url2}
                    type="contain"
                    style={{margin: '10px'}}
                  />
                  </IcePanel.Body>
                </IcePanel>
              </Col>
            </Row>
            
          </IceContainer>
            
        </div>
        
      );
    }
  }