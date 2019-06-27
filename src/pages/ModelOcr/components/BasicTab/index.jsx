import React, { Component } from 'react';
import { Table, Button, Tab, Upload } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';
import ImgBlock from '../ImgBlock/index';

export default class BasicTab extends Component {
  static displayName = 'BasicTab';

  state = {
    tabs1: [
      { tab: '通用文本 OCR', key: 'tongyong', id: 1, 
        url: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgTY.jpg',
        content: '通用文本 OCR 介绍通用文本 OCR 介绍通用文本 OCR 介绍通用文本 OCR 介绍通用文本 OCR 介绍通用文本 OCR 介绍通用文本 OCR 介绍通用文本 OCR 介绍通用文本 OCR 介绍通用文本 OCR 介绍通用文本 OCR 介绍通用文本 OCR 介绍通用文本 OCR 介绍通用文本 OCR 介绍通用文本 OCR 介绍通用文本 OCR 介绍通用文本 OCR 介绍通用文本 OCR 介绍',
        result: '文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本'
      },
      { tab: '手写体 OCR', key: 'shouxieti', id: 2, 
        url: '#',
        content: '手写体 OCR手写体 OCR手写体 OCR手写体 OCR手写体 OCR手写体 OCR手写体 OCR手写体 OCR手写体 OCR手写体 OCR手写体 OCR手写体 OCR手写体 OCR手写体 OCR手写体 OCR手写体 OCR手写体 OCR手写体 OCR手写体 OCR手写体 OCR手写体 OCR手写体 OCR手写体 OCR手写体 OCR手写体 OCR手写体 OCR手写体 OCR手写体 OCR手写体 OCR手写体 OCR手写体 OCR',
        result: '文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本'
      },
      { tab: '二维码 OCR', key: 'erweima', id: 3, 
        url: '#',
        content: '二维码 OCR二维码 OCR二维码 OCR二维码 OCR二维码 OCR二维码 OCR二维码 OCR二维码 OCR二维码 OCR二维码 OCR二维码 OCR二维码 OCR二维码 OCR二维码 OCR二维码 OCR二维码 OCR二维码 OCR二维码 OCR二维码 OCR二维码 OCR二维码 OCR二维码 OCR二维码 OCR二维码 OCR二维码 OCR二维码 OCR二维码 OCR二维码 OCR二维码 OCR二维码 OCR二维码 OCR',
        result: '号码号码号码号码号码号码号码号码号码号码号码'
      },
      { tab: '条形码 OCR', key: 'tiaoxingma', id: 4, 
        url: '#',
        content: '条形码 OCR条形码 OCR条形码 OCR条形码 OCR条形码 OCR条形码 OCR条形码 OCR条形码 OCR条形码 OCR条形码 OCR条形码 OCR条形码 OCR条形码 OCR条形码 OCR条形码 OCR条形码 OCR条形码 OCR条形码 OCR条形码 OCR条形码 OCR条形码 OCR条形码 OCR条形码 OCR条形码 OCR条形码 OCR条形码 OCR条形码 OCR条形码 OCR条形码 OCR条形码 OCR条形码 OCR条形码 OCR',
        result: '号码号码号码号码号码号码号码号码号码号码号码'
      },
      { tab: '车牌 OCR', key: 'chepai', id: 5, 
        url: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgCP.jpg',
        content: '车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍车牌 OCR 介绍', 
        result:'车牌号：' 
      }],
    tabs2: [
      { tab: '身份证 OCR', key: 'shenfen', id: 6, 
        url: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgSFZ.jpg',
        content: '身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍身份证 OCR 介绍', 
        result:'姓名：性别：民族：出生：住址：身份证号：签证机关：有效期：' 
      },
      { tab: '名片 OCR', key: 'mingpian', id: 7, 
        url: '',
        content: '名片 OCR名片 OCR名片 OCR名片 OCR名片 OCR名片 OCR名片 OCR名片 OCR名片 OCR名片 OCR名片 OCR名片 OCR名片 OCR名片 OCR名片 OCR名片 OCR名片 OCR名片 OCR名片 OCR', 
        result:'姓名：性别：民族：出生：住址：身份证号：签证机关：有效期：' 
      },
      { tab: '护照 OCR', key: 'huzhao', id: 8, 
        url: '#',
        content: '护照 OCR护照 OCR护照 OCR护照 OCR护照 OCR护照 OCR护照 OCR护照 OCR护照 OCR护照 OCR护照 OCR护照 OCR护照 OCR护照 OCR护照 OCR护照 OCR护照 OCR护照 OCR护照 OCR护照 OCR护照 OCR护照 OCR护照 OCR护照 OCR护照 OCR护照 OCR护照 OCR护照 OCR护照 OCR护照 OCR护照 OCR护照 OCR护照 OCR', 
        result:'国家码：护照号：姓名：姓名拼音：性别：出生地点：出生日期：签发地点：签发日期：有效期：' 
      },
      { tab: '通行证 OCR', key: 'tongxing', id: 9, 
        url: '#',
        content: '通行证 OCR通行证 OCR通行证 OCR通行证 OCR通行证 OCR通行证 OCR通行证 OCR通行证 OCR通行证 OCR通行证 OCR通行证 OCR通行证 OCR通行证 OCR通行证 OCR通行证 OCR通行证 OCR通行证 OCR通行证 OCR通行证 OCR通行证 OCR通行证 OCR通行证 OCR', 
        result:'证件号：姓名：性别：出生日期：有效期限：签证机关：签发地：种类：有效期：备注：' 
      },
      { tab: '驾驶证 OCR', key: 'jiashi', id: 10, 
        url: '#',
        content: '驾驶证 OCR驾驶证 OCR驾驶证 OCR驾驶证 OCR驾驶证 OCR驾驶证 OCR驾驶证 OCR驾驶证 OCR驾驶证 OCR驾驶证 OCR驾驶证 OCR驾驶证 OCR驾驶证 OCR驾驶证 OCR驾驶证 OCR驾驶证 OCR驾驶证 OCR驾驶证 OCR驾驶证 OCR驾驶证 OCR驾驶证 OCR', 
        result:'证件号：姓名：性别：国籍：住址：出生日期：初次领证日期：准驾车型：有效期限：' 
      },
      { tab: '行驶证 OCR', key: 'xingshi', id: 11, 
        url: '#',
        content: '行驶证 OCR行驶证 OCR行驶证 OCR行驶证 OCR行驶证 OCR行驶证 OCR行驶证 OCR行驶证 OCR行驶证 OCR行驶证 OCR行驶证 OCR行驶证 OCR行驶证 OCR行驶证 OCR行驶证 OCR行驶证 OCR行驶证 OCR行驶证 OCR行驶证 OCR行驶证 OCR行驶证 OCR行驶证 OCR', 
        result:'号牌号码：车型：所有人：住址：品牌型号：使用性质、签证机关：发动机号码：车辆识别代码（VIN）：注册登记日期：发证日期：核定载质量：准牵引总质量：核定载客：外形轮廓：检验记录：' 
      },
      { tab: '营业执照 OCR', key: 'yinyezhizhao', id: 12, 
        url: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgYYZZ.jpg',
        content: '营业执照 OCR 介绍营业执照 OCR 介绍营业执照 OCR 介绍营业执照 OCR 介绍营业执照 OCR 介绍营业执照 OCR 介绍营业执照 OCR 介绍营业执照 OCR 介绍营业执照 OCR 介绍营业执照 OCR 介绍营业执照 OCR 介绍营业执照 OCR 介绍营业执照 OCR 介绍营业执照 OCR 介绍营业执照 OCR 介绍营业执照 OCR 介绍营业执照 OCR 介绍营业执照 OCR 介绍营业执照 OCR 介绍', 
        result:'编号：注册号：统一社会信用码：公司名称：类型：地址：负责人：注册资本：成立时间：经营日期：经营范围：' 
      }],
    tabs3: [
      { tab: '银行卡 OCR', key: 'yinhang', id: 13, 
        url: '#',
        content: '银行卡 OCR银行卡 OCR银行卡 OCR银行卡 OCR银行卡 OCR银行卡 OCR银行卡 OCR银行卡 OCR银行卡 OCR银行卡 OCR银行卡 OCR银行卡 OCR银行卡 OCR银行卡 OCR银行卡 OCR银行卡 OCR银行卡 OCR银行卡 OCR银行卡 OCR银行卡 OCR银行卡 OCR银行卡 OCR银行卡 OCR', 
        result:'卡号：有效期：发卡行：卡片类型：' 
      },
      { tab: '飞机票 OCR', key: 'feiji', id: 14, 
        url: '#',
        content: '飞机票 OCR飞机票 OCR飞机票 OCR飞机票 OCR飞机票 OCR飞机票 OCR飞机票 OCR飞机票 OCR飞机票 OCR飞机票 OCR飞机票 OCR飞机票 OCR飞机票 OCR飞机票 OCR飞机票 OCR飞机票 OCR飞机票 OCR飞机票 OCR飞机票 OCR飞机票 OCR',
        result:'起飞港：到达港：日期：航班号：姓名：机票费：税额：含税价额：' 
      },
      { tab: '火车票 OCR', key: 'huoche', id: 15, 
        url: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgHCP.jpg',
        content: '火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍火车票 OCR 介绍',
        result:'车票号码：始发站：目的站：车次：日期：票价：席别：姓名：' 
      },
      { tab: '出租车票 OCR', key: 'chuzuche', id: 16, 
        url: '#',
        content: '出租车票 OCR出租车票 OCR出租车票 OCR出租车票 OCR出租车票 OCR出租车票 OCR出租车票 OCR出租车票 OCR出租车票 OCR出租车票 OCR出租车票 OCR出租车票 OCR出租车票 OCR出租车票 OCR出租车票 OCR出租车票 OCR出租车票 OCR出租车票 OCR', 
        result:'发票号码：代码：车号：日期：时间：金额：' 
      },
      { tab: '增值税发票 OCR', key: 'zengzhishui', id: 17, 
        url: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgFP.jpg',
        content: '增值税发票 OCR增值税发票 OCR增值税发票 OCR增值税发票 OCR增值税发票 OCR增值税发票 OCR增值税发票 OCR增值税发票 OCR增值税发票 OCR增值税发票 OCR增值税发票 OCR增值税发票 OCR增值税发票 OCR增值税发票 OCR增值税发票 OCR增值税发票 OCR增值税发票 OCR',
         result:'发票类型、发票名称、发票代码、发票号码、开票日期、收款人、复核、开票人；购买方：名称、纳税人识别码、地址和电话、开户行及账号；销售方：名称、纳税人识别码、地址和电话、开户行和账号；货物及税信息：名称、单位、数量、金额、税率、税额，金额合计、税额合计、价税合计（大写）、价税合计（小写）' 
      },
      { tab: '定额发票 OCR', key: 'dinge', id: 18, 
        url: '#',
        content: '定额发票 OCR定额发票 OCR定额发票 OCR定额发票 OCR定额发票 OCR定额发票 OCR定额发票 OCR定额发票 OCR定额发票 OCR定额发票 OCR定额发票 OCR定额发票 OCR定额发票 OCR定额发票 OCR定额发票 OCR定额发票 OCR定额发票 OCR定额发票 OCR定额发票 OCR',
        result:'发票代码：发票号码：金额：' 
      },
    ],
    currentkey: 'none',
    currenturl: '#',
    currentresult: 'none',
  }

  // changeState = ((url, key, result) => {
  //   this.setState(() => {
  //     this.state.currentkey = key;
  //     this.state.currenturl = url;
  //     this.state.currentresult = result;
  //     // console.log('tab:', this.state.currentId, this.state.currenturl);
  //   });
  // })

  changeState = (url, key, result) => {
    setTimeout(() => {
        this.setState({currentresult: result, currentkey:key, currenturl:url}, ()=>{
          // console.log("setTimeout setState callback " + this.state.currentkey, this.state.currenturl, this.state.currentresult);
        });
    }, 0);
  }

  // componentDidUpdate = () => {
  //   console.log("update" + this.state.currentkey, this.state.currenturl, this.state.currentresult);
  // } 

  render() {
    return (
      <div className="basic-tab">
        <IceContainer title='OCR 识别项目' className={styles.tabCardStyle}>
          <Tab shape="text">
            <Tab.Item title="特殊类识别" key="001">
              <Tab shape='wrapped' >
                {this.state.tabs1.map((item) => (<Tab.Item key={item.key} title={item.tab} onClick={this.changeState.bind(this, item.url, item.key, item.result)}>
                  <div className={styles.detached}>
                  {item.content}
                  </div>
                  <ImgBlock url={item.url} alt={item.key} result={item.result}/>
                </Tab.Item>))}
              </Tab>
            </Tab.Item>
            <Tab.Item title="证件类识别" key="002">
              <Tab shape='wrapped' >
                {this.state.tabs2.map((item) => (<Tab.Item key={item.key} title={item.tab} onClick={this.changeState.bind(this, item.url, item.key, item.result)}>
                  <div className={styles.detached}>
                  {item.content}
                  </div>
                  <ImgBlock url={item.url} alt={item.key} result={item.result}/>
                </Tab.Item>))}
              </Tab>
            </Tab.Item>
            <Tab.Item title="票据类识别" key="003">
              <Tab shape='wrapped' >
                {this.state.tabs3.map((item) => (<Tab.Item key={item.key} title={item.tab} onClick={this.changeState.bind(this, item.url, item.key, item.result)}>
                  <div className={styles.detached}>
                  {item.content}
                  </div>
                  <ImgBlock url={item.url} alt={item.key} result={item.result}/>
                </Tab.Item>))}
              </Tab>
            </Tab.Item>
          </Tab>
        </IceContainer>
      </div>
    );
  }
}
