import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import IcePanel from '@icedesign/panel';

const { Row, Col } = Grid;

export default class ImgBlock extends Component {
  static displayName = 'ImgBlock';

  state = {
    url1: this.props.url1,
    url2: this.props.url2,
    alt: this.props.alt,
    title1: this.props.title1,
    title2: this.props.title2,
    // percent: 0,
    result: this.props.result,
  };

  renderResult = (title2) => {
    if (title2 === '识别结果') {
      return (
        <div>
          <table width="200">
            {
            // 拆分 result 返回的字符串
            Array.from(this.state.result.split('；')).map((item, index) => {
              // console.log(item);
              return (
                <tbody key={index}>
                  <tr key={index}>
                    <td><p>{item.split('：')[0]}</p></td>
                    <td><p>{item.split('：')[1]}</p></td>
                  </tr>
                </tbody>
              );
            })
          }
          </table>
        </div>
      );
    }
    return (<img src={this.state.url2} alt={`${this.state.alt}_out`} />);
  };

  leftImg(alt) {
    if (alt === 'face_compare'){
      return <img src={this.state.url1} alt={`${this.state.alt}_in`} />
    } else {
      return <img src={this.state.url2} alt={`${this.state.alt}_in`} />
    }
  }

  render() {
    if (this.state.alt === 'face_video'){
      return (
        <div></div>
      )
    }
    else {
      return (
        <div>
          <Row wrap>
            <Col>
              <IcePanel style={{ marginTop: '20px', marginBottom: '10px', marginRight: '10px' }}>
                <IcePanel.Header>
                  {this.state.title1}
                </IcePanel.Header>
                <IcePanel.Body>
                  {/* <img src={this.state.url1} alt={`${this.state.alt}_in`} /> */}
                  {this.leftImg(this.state.alt)}
                </IcePanel.Body>
              </IcePanel>
            </Col>
            <Col>
              <IcePanel style={{ marginTop: '20px', marginBottom: '10px' }}>
                <IcePanel.Header>
                  {this.state.title2}
                </IcePanel.Header>
                <IcePanel.Body>
                  {this.renderResult(this.state.title2)}
                </IcePanel.Body>
              </IcePanel>
            </Col>
          </Row>
        </div>
      );
    }
  }
}
