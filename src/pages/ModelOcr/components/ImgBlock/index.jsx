import React, { Component } from 'react';
import { Progress, Icon, Grid, Upload, Button } from '@alifd/next';
import IcePanel from '@icedesign/panel';
import CameraAPI from '../CameraAPI/index';

const { Row, Col } = Grid;

export default class ImgBlock extends Component {
  static displayName = 'ImgBlock';

  state = {
    url: this.props.url,
    alt: this.props.alt,
    result: this.props.result,
    percent: 0,
  };

  render() {

    return (
      <div>
        
        {/* 调用摄像头 */}
        <div style={{ position: 'relative', margin: '30px 95px 0px' }}>
          <CameraAPI />
        </div>
        {/* 上传 */}
        <div style={{ margin: '-62px 0 10px' }}>
          <Upload
          action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
          multiple
          listType="text">
          <Button type="primary" style={{ margin: '30px 0 0' }}> 上传图片 </Button> &nbsp;&nbsp;
        </Upload>
        </div>
        <Row wrap>
          <Col>
            <IcePanel style={{ marginTop: '30px', marginBottom: '10px', marginRight: '10px' }}>
              <IcePanel.Header>
                原始图片
              </IcePanel.Header>
              <IcePanel.Body>
                <img src={this.state.url} alt={this.state.alt}/>
              </IcePanel.Body>
            </IcePanel>
          </Col>
          <Col>
            <IcePanel style={{ marginTop: '30px', marginBottom: '10px' }}>
              <IcePanel.Header>
                识别结果
              </IcePanel.Header>
              <IcePanel.Body>
                <p>{this.state.result}</p>
              </IcePanel.Body>
            </IcePanel>
          </Col>
        </Row>
      </div>
    );
  }
}
