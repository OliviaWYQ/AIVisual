import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export default class Logo extends PureComponent {
  render() {
    return (
      <div className="logo">
        
        <Link to="/" className="logo-text">
          Richstone AI Visual Analysis Platform
          <img height='20' src='https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/logo_fs.png' />
        </Link>
      </div>
    );
  }
}
