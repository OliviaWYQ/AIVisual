import React, { Component } from 'react';
import { Tab } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';
import ImgBlock from '../ImgBlock/index';
import data from '../../../../../static/ocr_tab';

export default class BasicTab extends Component {
  static displayName = 'BasicTab';

  state = {
    tabs1: [
      { tab: '通用文本 OCR',
        key: 'tongyong',
        id: 1,
        content: '为用户提供图片中印刷体文字检测和识别服务。支持多场景、任意版面下整图文字中的中文、字母、数字、常见字符的识别。',
        url: data.data.tongyong.post,
        result: data.data.tongyong.get,
      },
      { tab: '手写体 OCR',
        key: 'shouxieti',
        id: 2,
        content: '为用户提供图片内手写体文字的检测和识别服务，并返回文字内容，支持多场景手写中文、字母、数字及常见字符的识别。',
        url: data.data.shouxieti.post,
        result: data.data.shouxieti.get,
      },
      { tab: '二维码 OCR',
        key: 'erweima',
        id: 3,
        content: '快速识别图片中的二维码，并返回网站链接。',
        url: data.data.erweima.post,
        result: data.data.erweima.get,
      },
      { tab: '条形码 OCR',
        key: 'tiaoxingma',
        id: 4,
        content: '快速扫描图片中的条形码，并返回数字编号。',
        url: data.data.tiaoxingma.post,
        result: data.data.tiaoxingma.get,
      },
      { tab: '车牌 OCR',
        key: 'chepai',
        id: 5,
        content: '支持对中国大陆机动车车牌的自动定位和识别，返回地域编号和车牌号信息。',
        url: data.data.chepai.post,
        result: data.data.chepai.get,
      }],
    tabs2: [
      { tab: '身份证 OCR',
        key: 'shenfen',
        id: 6,
        content: '支持二代身份证正反面所有字段的识别，包括姓名、性别、民族、出生日期、住址、身份证号、签发机关、有效期限，为用户提供最方便快捷的身份证信息录入体验。',
        url: data.data.shenfen.post,
        result: data.data.shenfen.get,
      },
      { tab: '名片 OCR',
        key: 'mingpian',
        id: 7,
        content: '支持对名片各字段的自动定位与识别，包含姓名、电话、手机号、邮箱、公司、职位、地址、邮编、网址等。',
        url: data.data.mingpian.post,
        result: data.data.mingpian.get,
      },
      { tab: '护照 OCR',
        key: 'huzhao',
        id: 8,
        content: '支持中国大陆护照内容检测识别功能，已支持字段包括类型、国家码、护照号、姓名、姓名拼音、国籍、性别、出生地点、出生日期、签发地点、签发日期、有效期等, 可以应用于出入境审查等各种需要提取护照信息的场景。',
        url: data.data.huzhao.post,
        result: data.data.huzhao.get,
      },
      { tab: '通行证 OCR',
        key: 'tongxing',
        id: 9,
        content: '已支持港澳通行证正反面关键字段识别，包括：证件号、姓名、姓名拼音、性别、出生日期、有效期限、签发地点、签发机关、种类、有效期、备注等。',
        url: data.data.tongxing.post,
        result: data.data.tongxing.get,
      },
      { tab: '驾驶证 OCR',
        key: 'jiashi',
        id: 10,
        content: '支持对驾驶证主页所有字段的自动定位与识别，包含证号、姓名、性别、国籍、住址、出生日期、初次领证日期、准驾车型、有效起始日期、有效期限等。',
        url: data.data.jiashi.post,
        result: data.data.jiashi.get,
      },
      { tab: '行驶证 OCR',
        key: 'xingshi',
        id: 11,
        content: '支持对行驶证主页和副页所有字段的自动定位与识别，包含号牌号码、车辆类型、所有人、住址、使用性质、品牌型号、车辆识别代码、发动机号、签发机关、注册日期、发证日期、核定载人数、总质量、整备质量、核定载质量、外形轮廓、准牵引总质量、备注、检验记录等。',
        url: data.data.xingshi.post,
        result: data.data.xingshi.get,
      },
      { tab: '营业执照 OCR',
        key: 'yinyezhizhao',
        id: 12,
        content: '快速识别营业执照中的编号、统一社会信用码、公司名称、主体类型、地址、法定代表人、注册资本、成立日期、营业期限、经营范围等字段。',
        url: data.data.yinyezhizhao.post,
        result: data.data.yinyezhizhao.get,
      }],
    tabs3: [
      { tab: '银行卡 OCR',
        key: 'yinhang',
        id: 13,
        content: '自动识别主流银行卡的卡号和有效期，同时返回卡号、有效期、发卡行、卡类型、持卡人等信息。',
        url: data.data.yinhang.post,
        result: data.data.yinhang.get,
      },
      { tab: '火车票 OCR',
        key: 'huoche',
        id: 14,
        content: '已支持火车票全部字段的识别，包括：编号、出发站、到达站、车次、出发时间、票价、席别、座位号、姓名等。',
        url: data.data.huoche.post,
        result: data.data.huoche.get,
      },
      { tab: '出租车票 OCR',
        key: 'chuzuche',
        id: 15,
        content: '支持关键字段发票代码、发票号码、车号、金额、日期等识别。',
        url: data.data.chuzuche.post,
        result: data.data.chuzuche.get,
      },
      { tab: '增值税发票 OCR',
        key: 'zengzhishui',
        id: 16,
        content: '已支持全字段识别，包括发票名称、发票代码、发票号码、开票日期、价税合计、合计税额、合计金额、税率、购买方识别号、销售方识别号等。',
        url: data.data.zengzhishui.post,
        result: data.data.zengzhishui.get,
      },
      { tab: '定额发票 OCR',
        key: 'dinge',
        id: 17,
        content: '支持发票代码、发票号码及金额等关键字段识别。',
        url: data.data.dinge.post,
        result: data.data.dinge.get,
      },
    ],
    // eslint-disable-next-line react/no-unused-state
    currentkey: 'none',
    // eslint-disable-next-line react/no-unused-state
    currenturl: '#',
    // eslint-disable-next-line react/no-unused-state
    currentresult: 'none',
  }

  changeState = (url, key, result) => {
    setTimeout(() => {
      // eslint-disable-next-line react/no-unused-state
      this.setState({ currentresult: result, currentkey: key, currenturl: url }, () => {
        // console.log("setTimeout setState callback " + this.state.currentkey, this.state.currenturl, this.state.currentresult);
      });
    }, 0);
  }


  render() {

    return (
      <div className="basic-tab">
        <IceContainer title="OCR 识别项目" className={styles.tabCardStyle}>
          <Tab shape="text">
            <Tab.Item title="特殊类识别" key="001">
              <Tab shape="wrapped" >
                {this.state.tabs1.map((item) => (
                  <Tab.Item key={item.key} title={item.tab} onClick={this.changeState.bind(this, item.url, item.key, item.result)}>
                    <div className={styles.detached}>
                      <p>{item.content}</p>
                    </div>
                    <ImgBlock url={item.url} alt={item.key} result={item.result} />
                  </Tab.Item>))}
              </Tab>
            </Tab.Item>
            <Tab.Item title="证件类识别" key="002">
              <Tab shape="wrapped" >
                {this.state.tabs2.map((item) => (
                  <Tab.Item key={item.key} title={item.tab} onClick={this.changeState.bind(this, item.url, item.key, item.result)}>
                    <div className={styles.detached}>
                      <p>{item.content}</p>
                    </div>
                    <ImgBlock url={item.url} alt={item.key} result={item.result} />
                  </Tab.Item>))}
              </Tab>
            </Tab.Item>
            <Tab.Item title="票据类识别" key="003">
              <Tab shape="wrapped" >
                {this.state.tabs3.map((item) => (
                  <Tab.Item key={item.key} title={item.tab} onClick={this.changeState.bind(this, item.url, item.key, item.result)}>
                    <div className={styles.detached}>
                      <p>{item.content}</p>
                    </div>
                    <ImgBlock url={item.url} alt={item.key} result={item.result} />
                  </Tab.Item>))}
              </Tab>
            </Tab.Item>
          </Tab>
        </IceContainer>
      </div>
    );
  }
}
