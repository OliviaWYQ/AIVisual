import React, { Component } from 'react';
import { Table, Button, Tab, Upload } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';
// import ImgSFZ from '../../../../../images/ImgSFZ.jpg';
// import ImgCP from '../../../../../images/ImgCP.jpg';
// import ImgFP from '../../../../../images/ImgFP.jpg';
// import ImgHCP from '../../../../../images/ImgHCP.jpg';
// import ImgTY from '../../../../../images/ImgTY.jpg';
// import ImgYYZZ from '../../../../../images/ImgYYZZ.jpg';
import ImgBlock from '../ImgBlock/index';
import Img from '@icedesign/img';

// const detachedContentStyle = {
//   border: '1px solid #DCDEE3',
//   padding: '20px'
// };

export default class BasicTab extends Component {
  static displayName = 'BasicTab';

  state = {
    tabs: [
      { tab: '通用文本 OCR', key: 'tongyong', id: 1, 
        url: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgTY.jpg',
        content: '通用文本 OCR 介绍通用文本 OCR 介绍通用文本 OCR 介绍通用文本 OCR 介绍通用文本 OCR 介绍通用文本 OCR 介绍通用文本 OCR 介绍通用文本 OCR 介绍通用文本 OCR 介绍通用文本 OCR 介绍通用文本 OCR 介绍通用文本 OCR 介绍通用文本 OCR 介绍通用文本 OCR 介绍通用文本 OCR 介绍通用文本 OCR 介绍通用文本 OCR 介绍通用文本 OCR 介绍',
        result: '文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本'
      },
      { tab: '车牌 OCR', key: 'chepai', id: 2, 
        url: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgCP.jpg',
        content: '车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍', 
        result:'车牌号：' 
      },
      { tab: '身份证 OCR', key: 'shenfenzheng', id: 3, 
        url: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgSFZ.jpg',
        content: '身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍', 
        result:'姓名：性别：民族：出生：住址：身份号码：' 
      },
      { tab: '营业执照 OCR', key: 'yinyezhizhao', id: 4, 
        url: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgYYZZ.jpg',
        content: '营业执照 OCR 介绍营业执照 OCR 介绍营业执照 OCR 介绍营业执照 OCR 介绍营业执照 OCR 介绍营业执照 OCR 介绍营业执照 OCR 介绍营业执照 OCR 介绍营业执照 OCR 介绍营业执照 OCR 介绍营业执照 OCR 介绍营业执照 OCR 介绍营业执照 OCR 介绍营业执照 OCR 介绍营业执照 OCR 介绍营业执照 OCR 介绍营业执照 OCR 介绍营业执照 OCR 介绍营业执照 OCR 介绍', 
        result:'注册号：法定代表人：公司名称：地址：营业期限：' 
      },
      { tab: '发票 OCR', key: 'fapiao', id: 5, 
        url: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgFP.jpg',
        content: '发票 OCR 介绍发票 OCR 介绍发票 OCR 介绍发票 OCR 介绍发票 OCR 介绍发票 OCR 介绍发票 OCR 介绍发票 OCR 介绍发票 OCR 介绍发票 OCR 介绍发票 OCR 介绍发票 OCR 介绍发票 OCR 介绍发票 OCR 介绍发票 OCR 介绍发票 OCR 介绍发票 OCR 介绍发票 OCR 介绍发票 OCR 介绍发票 OCR 介绍发票 OCR 介绍发票 OCR 介绍发票 OCR 介绍发票 OCR 介绍发票 OCR 介绍',
         result:'发票代码：发票号码：开票日期：开票人：收款人：金额：税率：税额：' 
      },
      { tab: '火车票 OCR', key: 'huochepiao', id: 6, 
        url: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgHCP.jpg',
        content: '火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍',
         result:'日期：起始站：到达站：列车号：座位号：价格：' 
      },
    ],
    currentId: 1,
    currenturl: '#',
    currentresult: '',
  }

  changeState = ((url, id, result) => {
    this.setState(() => {
      this.state.currentId = id;
      this.state.currenturl = url;
      this.state.currentresult = result;
      // console.log('tab:', this.state.currentId, this.state.currenturl);
    });
  })

  changeurl = (url) => {
    this.setState(() => {
      this.state.currenturl = url;
    });
  }

  render() {
    return (
      <div className="basic-tab">
         <IceContainer title='识别项目' className={styles.tabCardStyle}>
            {/* <Tab shape="wrapped" contentStyle={detachedContentStyle}>
              {this.state.tabs.map(pane => <Tab.Item title={pane.tab} key={pane.key} onClick={this.changeState.bind(this, pane.url, pane.id)}>
              {pane.content}
              </Tab.Item>)}  
            </Tab> */}

            <Tab shape='wrapped' >
              {this.state.tabs.map((item) => (<Tab.Item key={item.key} title={item.tab} onClick={this.changeState.bind(this, item.url, item.id, item.result)}>
                <div className={styles.detached}>
                {item.content}
                </div>
                {/* <Table dataSource={[item]}>
                  <Table.Column title={'算法模型介绍及使用方法'} dataIndex="content"/>
                </Table> */}
                {<div>
                  <Upload
                    action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
                    multiple
                    listType="text"
                  >
                    <Button type="primary" style={{ margin: '30px 0 0' }}> 上传图片 </Button> &nbsp;&nbsp;
                  </Upload>
                  <ImgBlock url={item.url} alt={item.key} result={item.result}/>
                </div>}
              </Tab.Item>))}
            </Tab>
         </IceContainer>
      </div>
    );
  }
}
