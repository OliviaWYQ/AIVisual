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
          <td><p>表头1</p></td>
          <td><p>结果1</p></td>
        </tr>
        <tr>
          <td><p>表头2</p></td>
          <td><p>结果2</p></td>
        </tr>
        <tr>
          <td><p>表头3</p></td>
          <td><p>结果3</p></td>
        </tr>
        </table>
        <p>{this.state.result.split('：')}</p>
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
        {/* <IceContainer className={styles.tabCardStyle}>*/}

        {/* <div className="progress-panel"> */}
        {/*  <Button.Group> */}
        {/*    <Button onClick={this.minusProgress} disabled={this.state.percent === 0}><Icon type="minus" /></Button> */}
        {/*    <Button onClick={this.addProgress} disabled={this.state.percent === 100}><Icon type="add" /></Button> */}
        {/*  </Button.Group> */}
        {/* </div> */}

        {/* <Progress style={{ margin: '15px 0 10px' }} percent={this.state.percent} progressive size="large" textRender={textRender} /> */}
        
        <Row wrap>
          <Col>
            <IcePanel style={{ marginTop: '20px', marginBottom: '10px', marginRight: '10px' }}>
              <IcePanel.Header>
                {this.state.title1}
              </IcePanel.Header>
              <IcePanel.Body>
                {/*<Img*/}
                {/*  enableAliCDNSuffix*/}
                {/*  width={400}*/}
                {/*  height={300}*/}
                {/*  src={this.state.url1}*/}
                {/*  type="contain"*/}
                {/*  style={{ margin: '10px' }}*/}
                {/*/>*/}
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
                {/*<Img*/}
                {/*  enableAliCDNSuffix*/}
                {/*  width={400}*/}
                {/*  height={300}*/}
                {/*  src={this.state.url2}*/}
                {/*  type="contain"*/}
                {/*  style={{ margin: '10px' }}*/}
                {/*/>*/}
                {this.renderResult(this.state.title2)}
                {/* <img src={this.state.url2} alt={this.state.alt+'_out'}/> */}
              </IcePanel.Body>
            </IcePanel>
          </Col>
        </Row>
        {/* <IcePanel style={{ marginTop: '10px', marginBottom: '10px' }}>
          <IcePanel.Header>
            识别结果
          </IcePanel.Header>
          <IcePanel.Body>
            <p>识别结果识别结果识别结果识别结果识别结果识别结果识别结果识别结果识别结果识别结果识别结果识别结果识别结果识别结果识别结果识别结果识别结果识别结果识别结果识别结果识别结果识别结果识别结果识别结果识别结果识别结果识别结果识别结果识别结果识别结果识别结果识别结果识别结果识别结果识别结果</p>
          </IcePanel.Body>
        </IcePanel> */}
        {/*</IceContainer>*/}
      </div>
    );
  }
}
