import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Input, Select, Grid, Form } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { xxs: 8, s: 6, l: 4 },
  wrapperCol: { s: 12, l: 12 },
};

export default class ColumnForm extends Component {
  static displayName = ColumnForm;

  onFormChange = (values, field) => {
    console.log(values, field);
  };

  reset = () => {};

  submit = (values, errors) => {
    console.log('error', errors, 'value', values);
    if (!errors) {
      // 提交当前填写的数据
    } else {
      // 处理表单报错
    }
  };

  render() {
    return (
      <div className="column-form">
        <IceContainer title="新建资源" className={styles.container}>
          <Form onChange={this.onFormChange}>
            <div>
              <Row wrap>
                <Col xxs="24" s="12" l="12">
                  <FormItem
                    label="名称："
                    {...formItemLayout}
                    required
                    requiredMessage="文件名必须填写"
                  >
                    <Input name="dbname" />
                  </FormItem>
                  <FormItem
                    label="数据源："
                    {...formItemLayout}
                    required
                    requiredMessage="请选择数据源"
                  >
                    <Select
                      name="dbtype"
                      className={styles.selectWidth}
                      dataSource={[
                        { label: '数据库', value: 'database' },
                        { label: '本地文件', value: 'file' },
                      ]}
                    />
                  </FormItem>
                </Col>
                <Col>
                  <FormItem
                    label="类型："
                    {...formItemLayout}
                    required
                    requiredMessage="请选择数据类型"
                  >
                    <Select
                      name="type"
                      className={styles.selectWidth}
                      dataSource={[
                        // { label: '.jpg', value: '.jpg' },
                        // { label: '.png', value: '.png' },
                        // { label: '.avi', value: '.avi' },
                        // { label: '.mp4', value: '.mp4' },
                        { label: '.csv', value: '.csv' },
                        { label: '.sql', value: '.sql' },
                      ]}
                    />
                  </FormItem>

                  <FormItem
                    label="路径："
                    {...formItemLayout}
                    required
                    requiredMessage="路径必须填写"
                  >
                    <Input name="dbpath" />
                  </FormItem>
                </Col>
              </Row>

              <Row className={styles.btns}>
                <Col xxs="8" s="2" l="2" className={styles.formLabel}>
                  {' '}
                </Col>
                <Col s="12" l="10">
                  <Form.Submit type="primary" validate onClick={this.submit}>
                    立即创建
                  </Form.Submit>
                  <Form.Reset className={styles.resetBtn} onClick={this.reset}>
                    重置
                  </Form.Reset>
                </Col>
              </Row>
            </div>
          </Form>
        </IceContainer>
      </div>
    );
  }
}

