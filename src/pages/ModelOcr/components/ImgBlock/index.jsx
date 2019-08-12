import React, { Component } from 'react';
import { Grid, Upload, Button } from '@alifd/next';
import IcePanel from '@icedesign/panel';
import CameraAPI from '../CameraAPI/index';
import PostCarPlate from '../../REST/post_carplate';
import GetCarPlate from '../../REST/get_carplate';

const { Row, Col } = Grid;

export default class ImgBlock extends Component {
  static displayName = 'ImgBlock';

  state = {
    url: this.props.url,
    alt: this.props.alt,
    result: this.props.result,
    // percent: 0,
    testOCR: {
      component: 'a',
      href: 'http://192.168.16.176:5000/model_chinese_ocr',
      target: '_blank',
    },
    testCP: {
      component: 'a',
      href: 'http://192.168.16.176:5000/model_car_plate',
      target: '_blank',
    },
  };

  ifMultiple() {
    if (this.state.alt === 'shenfen' || this.state.alt === 'tongxing' || this.state.alt === 'xingshi') {
      // console.log(this.state.url.split('.jpg')[0]+'b.jpg')
      return (
        <div>
          <img src={this.state.url} alt={this.state.alt} />
          <img src={`${this.state.url.split('.jpg')[0]}b.jpg`} alt={`${this.state.alt}_b`} />
        </div>
      );
    }
    return (
      <img src={this.state.url} alt={this.state.alt} />
    );
  }


  checkTest(alt) {
    if (alt === 'chepai') {
      return (
        <div>
          <Button
            {...this.state.testCP}
            type="primary"
            style={{ position: 'relative', margin: '-38px 190px 10px' }}
          >
            测试接口
          </Button>
        </div>
      );
    }
    if (alt === 'yinyezhizhao') {
      return (
        <Button
          {...this.state.testOCR}
          type="primary"
          style={{ position: 'relative', margin: '-48px 190px 10px' }}
        >
          测试接口
        </Button>
      );
    }
    return (
      <div />
    );
  }

  showResult() {
    switch (this.state.alt) {
      // 车牌识别
      case 'chepai':
        // console.log(this.state.result[0]);
        return (
          <tbody>
            <tr>
              <td width="200px"><p>{ Object.keys(this.state.result[0]) }</p></td>
              <td><p>{ Object.values(this.state.result[0]).join(' ， ') }</p></td>
            </tr>
          </tbody>
        );
        // 营业执照
      case 'yinyezhizhao':
        return (
          Array.from(Object.keys(this.state.result[0]))
            .map((item, index) => {
              return (
                <tbody key={index}>
                  <tr key={index}>
                    <td width="200px"><p>{item}</p></td>
                    <td><p>{this.state.result[0][item]}</p></td>
                  </tr>
                </tbody>
              );
            })
        );
        // 通用
      case 'tongyong':
        return (
          Array.from(this.state.result[0])
            .map((item, index) => {
              return (
                <tbody key={index}>
                  <tr key={index}>
                    <td><p>{item}</p></td>
                  </tr>
                </tbody>
              );
            })
        );
        // 手写体
      case 'shouxieti':
        return (
          <tbody>
            <tr>
              <td><p>{this.state.result[0].join(', ')}</p></td>
            </tr>
          </tbody>
        );
        // 二维码
      case 'erweima':
        return (
          <tbody>
            <tr>
              <td><p>{this.state.result[0].join(', ')}</p></td>
            </tr>
          </tbody>
        );
        // 条形码
      case 'tiaoxingma':
        return (
          <tbody>
            <tr>
              <td><p>{this.state.result[0].join(', ')}</p></td>
            </tr>
          </tbody>
        );
      default:
        return (
          Array.from(Object.keys(this.state.result[0]))
            .map((item, index) => {
              return (
                <tbody key={index}>
                  <tr key={index}>
                    <td width="200px"><p>{item}</p></td>
                    <td><p>{this.state.result[0][item]}</p></td>
                  </tr>
                </tbody>
              );
            })
        );
    }
  }

  handleUpload(alt) {
    if (alt === 'chepai') {
      return (
        <div>
          {/* <Upload */}
          {/*  action="http://127.0.0.1:5000/model_car_plate/car_plate_submit" */}
          {/*  // headers={"Access-Control-Allow-Origin": "*"} */}
          {/*  formatter={(res, file) => { */}
          {/*    // 函数里面根据当前服务器返回的响应数据 */}
          {/*    // 重新拼装符合组件要求的数据格式 */}
          {/*    return { */}
          {/*      success: res.status === 'success', */}
          {/*      get: res.carplate, */}
          {/*    }; */}
          {/*  }} */}
          {/* > */}
          {/*  <Button type="primary" style={{ margin: '30px 0 0' }}> 上传图片 </Button> &nbsp;&nbsp; */}
          {/* </Upload> */}
          <PostCarPlate />
          {/* <GetCarPlate /> */}
        </div>
      );
    }
    return (
      <div>
        <Upload
          action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
          multiple
          listType="text"
        >
          <Button type="primary" style={{ margin: '30px 0 0' }}> 上传图片 </Button> &nbsp;&nbsp;
        </Upload>
      </div>
    );
  }

  checkCamera(alt) {
    if (alt === 'chepai') {
      return (
        <div style={{ position: 'relative', margin: '30px 95px 0px' }}>
          <CameraAPI />
        </div>
      );
    }
    return (
      <div style={{ position: 'relative', margin: '30px 95px 0px' }}>
        <CameraAPI />
      </div>
    );
  }

  render() {
    return (
      <div>
        {/* 调用摄像头 */}
        {this.checkCamera(this.state.alt)}
        {/* 测试接口 */}
        {this.checkTest(this.state.alt)}
        {/* 上传 */}
        <div style={{ margin: '-62px 0 5px' }}>
          {this.handleUpload(this.state.alt)}
        </div>
        <Row wrap>
          <Col>
            <IcePanel style={{ marginTop: '25px', marginBottom: '10px', marginRight: '10px' }}>
              <IcePanel.Header>
                原始图片
              </IcePanel.Header>
              <IcePanel.Body>
                <div>
                  {this.ifMultiple()}
                </div>
                {/* <img src={this.state.url} alt={this.state.alt} /> */}
              </IcePanel.Body>
            </IcePanel>
          </Col>
          <Col>
            <IcePanel style={{ marginTop: '25px', marginBottom: '10px' }}>
              <IcePanel.Header>
                识别结果
              </IcePanel.Header>
              <IcePanel.Body>
                <div>
                  <table width="450">
                    {this.showResult()}
                  </table>
                </div>
              </IcePanel.Body>
            </IcePanel>
          </Col>
        </Row>
      </div>
    );
  }
}
