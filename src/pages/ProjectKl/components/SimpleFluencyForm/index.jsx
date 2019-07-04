import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Radio, Upload, Select, Step, Input, Button, Form } from '@alifd/next';
import styles from './index.module.scss';
import LineBarChart from '../LineBarChart/index';
import moment from 'moment';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const formItemLayout = {
  labelCol: { xxs: 5, s: 5, l: 7 },
  wrapperCol: { s: 14, l: 12 },
};

const startValue = moment('2018-09-01', 'YYYY-MM-DD', true);
const endValue = moment('2018-09-09', 'YYYY-MM-DD', true);

const { Group: ButtonGroup } = Button;

export default class SimpleFluencyForm extends Component {
  static displayName = 'SimpleFluencyForm';

  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      stepType: 'circle',
      stepAnimation: true,
      labelPlacement: 'ver',
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(currentStep) {
    // console.log(currentStep);
    this.setState({
      step: currentStep,
    });
  }

  formChange = (values, field) => {
    console.log(values, field);
  }

  nextStep = (values, errors) => {
    console.log('error', errors, 'value', values);
    if (!errors) {
      const s = this.state.step + 1;
      this.setState({
        step: s > 7 ? 7 : s,
      });
    } else {
      // 处理表单报错
    }
  };

  prev = () => {
    const s = this.state.step - 1;
    this.setState({
      step: s < 0 ? 0 : s,
    });
  };

  disabledDate = function (date, view) {
    switch (view) {
      case 'date':
        return (endValue + 1).valueOf() <= date.valueOf() || date.valueOf() <= (startValue - 1).valueOf();
      default: return false;
    }
  };

  renderStep = (step) => {
    if (step === 0) {
      return (
        <IceContainer className={styles.form}>
          <Form onChange={this.formChange} >
            <h4 align="center">
            选择客流数据
            </h4>
            <div className={styles.select}>
              <Upload
                action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
                listType="text"
              >
                <Button type="primary" >上传文件</Button>
              </Upload>
            </div>
            <div className={styles.select}>
              <Button onClick={this.nextStep} validate type="primary">保存</Button>
            </div>
          </Form>
        </IceContainer>
      );
    } else if (step === 1) {
      return (
        <IceContainer className={styles.form}>
          <h4 align="center" >是否进行数据清理?</h4>
          <div className={styles.select}>
            <Select dataSource={['是', '否']} useVirtual defaultValue="是" />
          </div>
          <div className={styles.buttonGroup}>
            <Button onClick={this.nextStep} validate type="primary">保存</Button>
          </div>
        </IceContainer>
      );
    } else if (step === 2) {
      return (
        <IceContainer className={styles.form}>
          <div className={styles.select}>
              选择预测范围：
            <Select dataSource={['1天内', '1周内', '1个月内', '1年内']} useVirtual defaultValue="请选择" />
          </div>
          <div className={styles.select}>
            <span id="radio-a11y">时间粒度 ：</span>
            <RadioGroup aria-labelledby="radio-a11y">
              <Radio id="year" value="year">年</Radio>
              <Radio id="month" value="month">月</Radio>
              <Radio id="week" value="week">周</Radio>
              <Radio id="day" value="day">日</Radio>
              <Radio id="hour" value="hour">时</Radio>
              <Radio id="minute" value="minute">分</Radio>
              <Radio id="second" value="second">秒</Radio>
            </RadioGroup>
          </div>
          <div className={styles.buttonGroup}>
            <Button onClick={this.nextStep} validate type="primary">保存</Button>
          </div>
        </IceContainer>
      );
    } else if (step === 3) {
      return (
        <IceContainer className={styles.form}>
          <Form onChange={this.formChange} >
            <div className={styles.select}>
              选择预测模型：
              <Select dataSource={['算法A', '算法B', '算法C', '算法D']} useVirtual defaultValue="请选择" />
            </div>
            <br />
            <FormItem label="参数1：" {...formItemLayout} required requiredMessage="必填项" >
              <Input name="number1" autoComplete="on" />
            </FormItem>
            <FormItem label="参数2：" {...formItemLayout} required requiredMessage="必填项" >
              <Input name="number2" autoComplete="on" />
            </FormItem>
            <FormItem label="参数3：" {...formItemLayout} required requiredMessage="必填项" >
              <Input name="number3" autoComplete="on" />
            </FormItem>
            <div className={styles.buttonGroup}>
              <FormItem {...formItemLayout} label=" ">
                <Form.Submit onClick={this.nextStep} validate type="primary">保存</Form.Submit>
              </FormItem>
            </div>
          </Form>
        </IceContainer>
      );
    // } else if (step === 4) {
    //   return (
    //     <IceContainer className={styles.form}>
    //       <Form onChange={this.formChange} >
    //         <FormItem label="参数2：" {...formItemLayout} required requiredMessage="必填项" >
    //           <Input name="number2" autoComplete="on" />
    //         </FormItem>
    //         <div className={styles.buttonGroup}>
    //           {/* <Button onClick={this.prev}
    //             type="primary"
    //             disabled={this.state.step === 0}>上一步</Button> */}
    //           <FormItem {...formItemLayout} label=" ">
    //             <Form.Submit onClick={this.nextStep} validate type="primary">保存</Form.Submit>
    //           </FormItem>
    //         </div>
    //       </Form>
    //     </IceContainer>
    //   );
    // } else if (step === 5) {
    //   return (
    //     <IceContainer className={styles.form}>
    //       <Form onChange={this.formChange} >
    //         <FormItem label="参数3：" {...formItemLayout} required requiredMessage="必填项" >
    //           <Input name="number3" autoComplete="on" />
    //         </FormItem>
    //         <div className={styles.buttonGroup}>
    //           {/* <Button onClick={this.prev}
    //             type="primary"
    //             disabled={this.state.step === 0}>上一步</Button> */}
    //           <FormItem {...formItemLayout} label=" ">
    //             <Form.Submit onClick={this.nextStep} validate type="primary">保存</Form.Submit>
    //           </FormItem>
    //         </div>
    //       </Form>
    //     </IceContainer>
    //   );
    } else if (step === 4) {
      return (
        <IceContainer title="分析结果" >
          {/* 折线图和柱状图 */}
          <LineBarChart />
          <div className={styles.buttonGroup}>
            <Button onClick={this.prev}
              type="primary"
              disabled={this.state.step === 0}
            >返回
            </Button>
          </div>
        </IceContainer>
      );
    }
  };

  render() {
    return (
      <div className="simple-fluency-form">
        <IceContainer title="流程图">
          <br />
          <Step shape="circle" current={this.state.step}>
            <Step.Item key={0} title="输入数据" content="选择数据源" onClick={this.onClick} />
            <Step.Item key={1} title="数据清理" content="清除无效数据" onClick={this.onClick} />
            <Step.Item key={2} title="影响因子" content="选择分析项" onClick={this.onClick} />
            <Step.Item key={3} title="算法选择" content="调整参数" onClick={this.onClick} />
            {/* <Step.Item key={4} title="算法2" content='调整参数' onClick={this.onClick}/>
            <Step.Item key={5} title="算法3" content='调整参数' onClick={this.onClick}/> */}
            <Step.Item key={4} title="完成" content="分析结果" onClick={this.onClick} />
          </Step>
        </IceContainer>
        {this.renderStep(this.state.step)}
      </div>
    );
  }
}

