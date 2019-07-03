import React, { Component } from 'react';
import BaseSetting from './components/BaseSetting';
import ChangePasswordForm from './components/ChangePasswordForm'

// 个人中心->基本设置
export default class Setting extends Component {
  static displayName = 'Setting';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {/* 基本设置 */}
        <BaseSetting />
        {/* 修改密码 */}
        <ChangePasswordForm />
      </div>
    );
  }
}
