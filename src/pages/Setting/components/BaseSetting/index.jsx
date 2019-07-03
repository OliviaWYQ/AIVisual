/* eslint  react/no-string-refs: 0 */
import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import IceContainer from '@icedesign/container';
import { Input, Upload, Form } from '@alifd/next';
import styles from './index.module.scss';

const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { xxs: 6, s: 3, l: 3 },
  wrapperCol: { s: 12, l: 10 },
};

function beforeUpload(info) {
  console.log('beforeUpload callback : ', info);
}

function onChange(info) {
  console.log('onChane callback : ', info);
}

function onSuccess(res, file) {
  console.log('onSuccess callback : ', res, file);
}

function onError(file) {
  console.log('onError callback : ', file);
}

class SettingsForm extends Component {
  static displayName = 'SettingsForm';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        name: '',
        gender: 'male',
        notice: false,
        email: '',
        avatar: [],
        siteUrl: '',
        githubUrl: '',
        twitterUrl: '',
        description: '',
      },
    };
  }

  onDragOver = () => {
    console.log('dragover callback');
  };

  onDrop = (fileList) => {
    console.log('drop callback : ', fileList);
  };

  formChange = (value) => {
    console.log('value', value);
    this.setState({
      value,
    });
  };

  validateAllFormField = (values, errors) => {
    console.log('error', errors, 'value', values);
    if (!errors) {
      // 提交当前填写的数据
    } else {
      // 处理表单报错
    }
  };

  render() {
    const {
      intl: { formatMessage },
    } = this.props;
    return (
      <div className="settings-form">
        <IceContainer>
          <Form value={this.state.value} onChange={this.formChange} ref="form">
            <div className={styles.formContent}>
              <h2 className={styles.formTitle}>
                <FormattedMessage id="app.setting.pagetitle" />
              </h2>
              {/* 姓名 */}
              <FormItem
                label={formatMessage({ id: 'app.setting.name' })}
                {...formItemLayout}
                required
                maxLength={10}
                requiredMessage={formatMessage({
                  id: 'app.setting.name.message',
                })}
              >
                <Input name="name" placeholder="username" />
              </FormItem>
              {/* 邮箱 */}
              <FormItem
                label={formatMessage({ id: 'app.setting.email' })}
                {...formItemLayout}
                required
                requiredMessage={formatMessage({
                  id: 'app.setting.email.message',
                })}
              >
                <Input htmlType="email" name="email" />
              </FormItem>
              {/* 头像 */}
              <FormItem
                label={formatMessage({ id: 'app.setting.avatar' })}
                {...formItemLayout}
                required
                requiredMessage={formatMessage({
                  id: 'app.setting.avatar.message',
                })}
              >
                <Upload.Card
                  name="avatar"
                  listType="card"
                  action=""
                  accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
                  beforeUpload={beforeUpload}
                  onChange={onChange}
                  onSuccess={onSuccess}
                  onError={onError}
                />
              </FormItem>
            </div>
          </Form>
        </IceContainer>
      </div>
    );
  }
}

export default injectIntl(SettingsForm);
