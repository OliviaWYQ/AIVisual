import React, { Component } from 'react';
import BasicTab from './components/BasicTab';
// import ImgBlock from './components/ImgBlock';
// import IceContainer from '@icedesign/container';
// import styles from './components/BasicTab/index.module.scss';

export default class ModelOcr extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="model-ocr-page">
        {/*<IceContainer title='识别项目' className={styles.tabCardStyle}>*/}
          {/* 基础 Tab 组件 */}
          <BasicTab />
          {/* 上传图片组件 */}
          {/*<ImgBlock />*/}
        {/*</IceContainer>*/}

      </div>
    );
  }
}
