import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export default class Logo extends PureComponent {
  render() {
    return (
      <div className="logo">
        {/* <div className='setimg'>
          <img src='https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/richstone.png'/>
        </div> */}
        <Link to="/" className="logo-text">
          Richstone AI Visual Analysis Platform
        </Link>
      </div>
    );
  }
}
