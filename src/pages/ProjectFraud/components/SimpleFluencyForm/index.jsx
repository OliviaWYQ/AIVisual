import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Upload, Select, Table, Step, Grid, Input, Button, Form } from '@alifd/next';
import styles from './index.module.scss';
import IcePanel from '@icedesign/panel';

const { Row, Col } = Grid;
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { xxs: 5, s: 5, l: 7 },
  wrapperCol: { s: 14, l: 12 }
};

const { Group: ButtonGroup } = Button;

const dataSource = [{key: 1, number: '198237346429384', result: '否'},
                    {key: 2, number: '139447233444523', result: '是'}];

export default class SimpleFluencyForm extends Component {
  static displayName = 'SimpleFluencyForm';

  // state = {
  //   step: 6
  // }

  constructor(props) {
      super(props);

      this.state = {
          step: 6,
          stepType: 'circle',
          stepAnimation: true,
          labelPlacement: 'ver'
      };

      this.onClick = this.onClick.bind(this);
  }

  onClick(currentStep) {
      // console.log(currentStep);
      this.setState({
          step: currentStep
      });
  }

  formChange = (values, field) => {
    console.log(values, field)
  }

  nextStep = (values, errors) => {
    console.log('error', errors, 'value', values);
    if (!errors) {
      const s = this.state.step + 1;
      this.setState({ 
        // step: this.state.step + 1 
        step: s > 7 ? 7 : s
      });
    } else {
      // 处理表单报错
    }
  };

  // next = () => {
  //   const s = this.state.step + 1;
  //   this.setState({
  //     step: s > 7 ? 7 : s,
  //   });
  // };

  prev = () => {
    const s = this.state.step - 1;
    this.setState({
      step: s < 0 ? 0 : s,
    });
  };

  renderStep = (step) => {
    if (step === 0) {
      return (
        <IceContainer>
          <h4 align='center'>
            选择需要判别的电信账号数据源
          </h4>
          <div className={styles.select}>
            <Upload 
            action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
            listType="text"
            >
            <Button type="primary" >上传文件</Button>
            </Upload>
          </div>
          <div className={styles.buttonGroup}>
          <Button onClick={this.nextStep} validate type="primary">保存</Button>
          </div>
          {/* <Form onChange={this.formChange} >
            <FormItem label="数据源：" {...formItemLayout} required requiredMessage="必填项" >
              <Input name="database" autoComplete="on" />
            </FormItem>
            <FormItem {...formItemLayout} label=" ">
              <Form.Submit onClick={this.nextStep} validate type="primary">下一步</Form.Submit>
          </FormItem>
          </Form> */}
        </IceContainer>
      );
    } else if (step === 1) {
      return (
        <IceContainer className={styles.form}>
          {/* <Form onChange={this.formChange} > */}
            {/* <FormItem label="数据清理：" {...formItemLayout} required requiredMessage="必填项" >
              <Input name="dataclean" autoComplete="on" />
            </FormItem> */}
            <h4 align='center' >是否进行数据清理?</h4>
            <div className={styles.select}>
              <Select dataSource={['是', '否']} useVirtual defaultValue="是" />
            </div>
            <div className={styles.buttonGroup}>
              {/* <Button onClick={this.prev}
                type="primary"
                disabled={this.state.step === 0}>上一步</Button> */}
              <FormItem {...formItemLayout} label=" ">
                <Form.Submit onClick={this.nextStep} validate type="primary">保存</Form.Submit>
              </FormItem>
            </div>
          {/* </Form> */}
        </IceContainer>
      );
    } else if (step === 2) {
      return (
        <IceContainer className={styles.form}>
          <Form onChange={this.formChange} >
            <FormItem label="特征值：" {...formItemLayout} required requiredMessage="必填项" >
              <Input name="primary" autoComplete="on" />
            </FormItem>
            <div className={styles.buttonGroup}>
              {/* <Button onClick={this.prev}
                type="primary"
                disabled={this.state.step === 0}>上一步</Button> */}
              <FormItem {...formItemLayout} label=" ">
                <Form.Submit onClick={this.nextStep} validate type="primary">保存</Form.Submit>
              </FormItem>
            </div>
          </Form>
        </IceContainer>
      );
    } else if (step === 3) {
      return (
        <IceContainer className={styles.form}>
          <Form onChange={this.formChange} >
            <FormItem label="参数1：" {...formItemLayout} required requiredMessage="必填项" >
              <Input name="number1" autoComplete="on" />
            </FormItem>
            <div className={styles.buttonGroup}>
              {/* <Button onClick={this.prev}
                type="primary"
                disabled={this.state.step === 0}>上一步</Button> */}
              <FormItem {...formItemLayout} label=" ">
                <Form.Submit onClick={this.nextStep} validate type="primary">保存</Form.Submit>
              </FormItem>
            </div>
          </Form>
        </IceContainer>
      );
    } else if (step === 4) {
      return (
        <IceContainer className={styles.form}>
          <Form onChange={this.formChange} >
            <FormItem label="参数2：" {...formItemLayout} required requiredMessage="必填项" >
              <Input name="number2" autoComplete="on" />
            </FormItem>
            <div className={styles.buttonGroup}>
              {/* <Button onClick={this.prev}
                type="primary"
                disabled={this.state.step === 0}>上一步</Button> */}
              <FormItem {...formItemLayout} label=" ">
                <Form.Submit onClick={this.nextStep} validate type="primary">保存</Form.Submit>
              </FormItem>
            </div>
          </Form>
        </IceContainer>
      );
    } else if (step === 5) {
      return (
        <IceContainer className={styles.form}>
          <Form onChange={this.formChange} >
            <FormItem label="参数3：" {...formItemLayout} required requiredMessage="必填项" >
              <Input name="number3" autoComplete="on" />
            </FormItem>
            <div className={styles.buttonGroup}>
              {/* <Button onClick={this.prev}
                type="primary"
                disabled={this.state.step === 0}>上一步</Button> */}
              <FormItem {...formItemLayout} label=" ">
                <Form.Submit onClick={this.nextStep} validate type="primary">保存</Form.Submit>
              </FormItem>
            </div>
          </Form>
        </IceContainer>
      );
    } else if (step === 6) {
      return (
        <IceContainer title='分析结果' >
          <h4 align='center'>欺诈账号判别结果</h4>
          <div className={styles.formTable}>
            <Table  dataSource={dataSource}>
                <Table.Column title="键值" dataIndex="key" width={100}/>
                <Table.Column title="账号" dataIndex="number"  width={200}/>
                <Table.Column title="是否为欺诈账号" dataIndex="result"  width={200} />
            </Table>
          </div>
          <div className={styles.buttonGroup}>
            <Button onClick={this.prev}
                type="primary"
                disabled={this.state.step === 0}>返回</Button>
          </div>
        </IceContainer>
      );
    }
  };

  render() {
    return (
      <div className="simple-fluency-form">
        {/* <IcePanel style={{marginBottom: '10px'}}> */}
          {/* <IcePanel.Body> */}
          <IceContainer  title='流程图'>
          <br />
          <Step shape="circle" current={this.state.step}>
            <Step.Item key={0} title="输入数据" content='选择数据源' onClick={this.onClick}/>
            <Step.Item key={1} title="数据清理" content='清除无效数据' onClick={this.onClick}/>
            <Step.Item key={2} title="特征提取" content='选择特征值' onClick={this.onClick}/>
            <Step.Item key={3} title="算法1" content='调整参数' onClick={this.onClick}/>
            <Step.Item key={4} title="算法2" content='调整参数' onClick={this.onClick}/>
            <Step.Item key={5} title="算法3" content='调整参数' onClick={this.onClick}/>
            <Step.Item key={6} title="完成" content='分析结果' onClick={this.onClick}/>
          </Step>
          </IceContainer>
          {/* </IcePanel.Body> */}
        {/* </IcePanel> */}
        {this.renderStep(this.state.step)}
      </div>
    );
  }
}


