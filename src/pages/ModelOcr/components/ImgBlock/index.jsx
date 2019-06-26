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
    url1: this.props.url,
    alt: this.props.alt,
    result: this.props.result,
    percent: 0,
  };

  // addProgress = () => {
  //   this.setState(prevState => {
  //     return {
  //       percent: prevState.percent + 10,
  //     };
  //   });
  // }
  //
  // minusProgress = () => {
  //   this.setState(prevState => {
  //     return {
  //       percent: prevState.percent - 10,
  //     };
  //   });
  // }

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
            <IcePanel style={{ marginTop: '10px', marginBottom: '10px', marginRight: '10px' }}>
              <IcePanel.Header>
                原始图片
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
                <img src={this.state.url1} alt={this.state.alt}/>
              </IcePanel.Body>
            </IcePanel>
          </Col>
          <Col>
            <IcePanel style={{ marginTop: '10px', marginBottom: '10px' }}>
              <IcePanel.Header>
                识别结果
              </IcePanel.Header>
              <IcePanel.Body>
                <p>{this.state.result.split('：').join('：\n\n')}</p>
              </IcePanel.Body>
            </IcePanel>
          </Col>
        </Row>
        {/*</IceContainer>*/}

      </div>

    );
  }
}
