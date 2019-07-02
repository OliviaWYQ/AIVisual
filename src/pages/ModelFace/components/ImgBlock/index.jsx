import React, { Component } from 'react';
import { Progress, Icon, Grid, Upload, Button } from '@alifd/next';
// import IceContainer from '@icedesign/container';
// import styles from './index.module.scss';
import IcePanel from '@icedesign/panel';
import Img from '@icedesign/img';

const { Row, Col } = Grid;

export default class ImgBlock extends Component {
  static displayName = 'ImgBlock';

  state = {
    url1: this.props.url1,
    url2: this.props.url2,
    alt: this.props.alt,
    title1: this.props.title1,
    title2: this.props.title2,
    percent: 0,
    result: this.props.result,
  };

  renderResult= (title2)  => {
    if (title2 == '识别结果') {
     return (
       <div>
        <table width="200">
        <tr>
          <td><p>{this.state.result.split('：')[0]}</p></td>
          <td><p>{this.state.result.split('：')[0]}</p></td>
        </tr>
        <tr>
          <td><p>{this.state.result.split('：')[1]}</p></td>
          <td><p>{this.state.result.split('：')[1]}</p></td>
        </tr>
        <tr>
          <td><p>{this.state.result.split('：')[2]}</p></td>
          <td><p>{this.state.result.split('：')[2]}</p></td>
        </tr>
        </table>
       </div>
      );
    } else {
      return (<img src={this.state.url2} alt={this.state.alt+'_out'} ></img>);
    }
  };

  render() {
    const textRender = percent => {
      if (percent === 100) {
        return <Icon type="select" size="medium" />;
      }
      return `${percent.toFixed(0)}%`;
    };

    return (
      <div>
        <Row wrap>
          <Col>
            <IcePanel style={{ marginTop: '20px', marginBottom: '10px', marginRight: '10px' }}>
              <IcePanel.Header>
                {this.state.title1}
              </IcePanel.Header>
              <IcePanel.Body>
                <img src={this.state.url1} alt={this.state.alt+'_in'}/>
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
