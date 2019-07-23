import React, { Component } from 'react';
import { Tab } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';
import ImgBlock from '../ImgBlock/index';

export default class BasicTab extends Component {
  static displayName = 'BasicTab';

  state = {
    tabs1: [
      { tab: '通用文本 OCR',
        key: 'tongyong',
        id: 1,
        url: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgTY2.jpg',
        content: '通用文本 OCR 介绍',
        result: '\
        智慧旅游服务平台引导者；\
        智慧旅游新模式；\
        New Model of Smart Tourism；\
        智慧旅游是一种以物联网、云计算、智能数据挖掘等技术在旅游体验、产业发展、行政管理等方面的应用，以激励产业创新、促进产业结构升级为特色。根据《“十三五”全国旅游信息化规划》，我们提出打造“管理、服务、营销、体验”四维一体的智慧旅游新模式，以“123+N”的建设之路，全力推动旅游信息化发展，提升旅游服务与管理能力，助力旅游供给侧改革的落地。\
        ',
      },
      { tab: '手写体 OCR',
        key: 'shouxieti',
        id: 2,
        url: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgSXT2.jpg',
        content: '手写体 OCR 介绍',
        result: '但愿人长久，千里共婵娟。',
      },
      { tab: '二维码 OCR',
        key: 'erweima',
        id: 3,
        url: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgEWM.jpg',
        content: '二维码 OCR 介绍',
        result: 'http://weixin.qq.com/r/pkRZQefEW7okraMi9xG0',
      },
      { tab: '条形码 OCR',
        key: 'tiaoxingma',
        id: 4,
        url: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgTXM.jpg',
        content: '条形码 OCR 介绍',
        result: '9787506825061',
      },
      { tab: '车牌 OCR',
        key: 'chepai',
        id: 5,
        url: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgCP.jpg',
        content: '车牌 OCR 介绍',
        result: '车牌号：京H 44444',
      }],
    tabs2: [
      { tab: '身份证 OCR',
        key: 'shenfen',
        id: 6,
        url: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgSFZ3.jpg',
        content: '身份证 OCR 介绍',
        result: '姓名：郑燕彬；性别： 男；\
        民族： 汉；出生：1986/6/9；住址：广州市大学城外环东路132号；\
        身份证号：445281198606095334；签证机关：广州市公安局番禺分局；有效期：2006.05.25-2016.05.25',
      },
      { tab: '名片 OCR',
        key: 'mingpian',
        id: 7,
        url: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgMP2.jpg',
        content: '名片 OCR 介绍',
        result: '姓名：刘建刚；公司：广州丰石科技有限公司；职位：架构师；\
        邮编： 510650；邮箱： liujiangang@richstonedt.com；电话： 020-89810608；网址：www.richstonedt.com；\
        地址：广州市天河区元岗横路37号天河慧通产业广场B区B4栋1楼；\
        手机号：13580565968',
      },
      { tab: '护照 OCR',
        key: 'huzhao',
        id: 8,
        url: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgHZ2.jpg',
        content: '护照 OCR 介绍',
        result: '国家码：CHN；护照号：E50647126；姓名：肖英琪；姓名拼音： XIAOYINGQI；\
        性别：女/F；出生地点：北京/BEIJING；出生日期：1947/01/18；签发地点：北京/BEIJING；\
        签发日期： 2015/05/16；有效期：2025/05/15',
      },
      { tab: '通行证 OCR',
        key: 'tongxing',
        id: 9,
        url: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgTXZ3.jpg',
        content: '通行证 OCR 介绍',
        result: '证件号： C00000000；姓名：证件样本；\
        性别：女；出生日期： 1981.08.03；有效期限： 2014.04.21-2024.04.20；\
        签证机关： 公安部出入境管理局；签发地：广东；\
        种类：个人旅游；\
        有效期：2014.04.21-2025.04.20；\
        备注：持证人每次在香港逗留不超过7天；\
        种类：个人旅游；\
        有效期：2014.04.21-2025.04.20；\
        备注：持证人每次在澳门逗留不超过7天',
      },
      { tab: '驾驶证 OCR',
        key: 'jiashi',
        id: 10,
        url: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgJSZ2.jpg',
        content: '驾驶证 OCR 介绍',
        result: '证件号： 440782198905114717；姓名： 郑嘉荣；\
        性别：男；国籍： 中国；\
        住址： 广东省江门市新会区沙堆镇沙西富成北社13巷21号；\
        出生日期： 1989-05-11；初次领证日期： 2012-02-29；\
        准驾车型： C1；有效期限：6年',
      },
      { tab: '行驶证 OCR',
        key: 'xingshi',
        id: 11,
        url: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgXSZ2.jpg',
        content: '行驶证 OCR 介绍',
        result: '号牌号码：  桂N30608；车型：  重型自卸货车；\
        所有人：班国福；\
        住址：  广西壮族自治区钦州市钦南区耿州德水并坑村委会佛子场；\
        品牌型号：  红岩牌CQ3254SMHG384；使用性质：货运；\
        签证机关：  广西壮族自治区贵州市公安局交通警察支队；\
        发动机号码： 08121155944；\
        车辆识别代码（VIN）： LZFF25M4X8D004248；\
        注册登记日期：  2009-03-23；发证日期：  2009-03-23；\
        核定载质量：12760kg；准牵引总质量：；核定载客：2人；外形轮廓：8550*2500*3510；检验记录：检验有效期至2010年03月桂N(01)',
      },
      { tab: '营业执照 OCR',
        key: 'yinyezhizhao',
        id: 12,
        url: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgYYZZ2.jpg',
        content: '营业执照 OCR 介绍',
        result: '编号：S0112015026860；\
        注册号：91440101MA59B3BW4E；\
        统一社会信用码：9144010MA59B3BW4E；\
        名称：广州丰石科技有限公司；\
        类型：其他有限责任公司；\
        住所：广州市天河区五山金颖路1号金颖大厦516房(仅限办公用途)；\
        法定代表人：蓝志坚；\
        注册资本：壹仟壹佰壹拾陆万柒仟元整；\
        成立日期：2015年12月10日；\
        营业期限：2015年12月10日至长期；\
        经营范围：软件和信息技术服务业(具体经营项目请登录广州市商事主体信息公示平台查询.依法须经批准的项目,经相关部门批准后方可开展经营活动。)',
      }],
    tabs3: [
      { tab: '银行卡 OCR',
        key: 'yinhang',
        id: 13,
        url: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgYHK.jpg',
        content: '银行卡 OCR 介绍',
        result: '卡号： 4270100010003104；有效期：12/2009；发卡行：中国工商银行；卡片类型：牡丹VISA卡(单位卡)',
      },
      // { tab: '飞机票 OCR',
      //   key: 'feiji',
      //   id: 14,
      //   url: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgFJP.jpg',
      //   content: '飞机票 OCR 介绍',
      //   result: '起飞港：；到达港：；日期：；\
      //   航班号：；姓名：；机票费：；税额：；含税价额：',
      // },
      { tab: '火车票 OCR',
        key: 'huoche',
        id: 15,
        url: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgHCP2.jpg',
        content: '火车票 OCR 介绍',
        result: '车票号码： 17C060124；始发站： 南京南；目的站： 上海虹桥；车次： G5；日期：2017年12月23日10:33；票价：  134.5；席别：二等座；姓名：周周',
      },
      { tab: '出租车票 OCR',
        key: 'chuzuche',
        id: 16,
        url: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgCZCP.jpg',
        content: '出租车票 OCR 介绍',
        result: '发票号码：69938721；代码： 142011571002；\
        车号：A-X9M13；日期：2018年03月19日；时间： 13:33~15:14；金额： 199.00',
      },
      { tab: '增值税发票 OCR',
        key: 'zengzhishui',
        id: 17,
        url: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgFP.jpg',
        content: '增值税发票 OCR 介绍',
        result: '\
        发票名称：上海增值税电子普通发票；\
        发票代码： 031001600311；发票号码： No21154005；\
        开票日期： 2016年10月27日；收款人： 周逸清；复核：朱雯婕；开票人： 任思雨；\
        购买方  名称：个人；\
        购买方  纳税人识别码：；\
        购买方  地址和电话：；\
        购买方  开户行及账号：；\
        销售方  名称：索尼(中国)有限公司上海分公司；\
        销售方  纳税人识别码：91310000X07256148A；\
        销售方  地址和电话：上海市卢湾区湖滨路222号企业天地一号8楼6126121；\
        销售方  开户行和账号：花旗银行（中国）有限公司上海分行404003-1730642012；\
        货物名称： 通话耳机；\
        单位：个；数量：1；金额： ¥170.08547；税率： 17%；税额： ¥28.91；\
        金额合计：¥170.09；税额合计：¥28.91；价税合计（大写）： 壹佰玖拾玖圆整；价税合计（小写）： ¥199.00',
      },
      { tab: '定额发票 OCR',
        key: 'dinge',
        id: 18,
        url: 'https://aivisualimg.oss-cn-hangzhou.aliyuncs.com/ImgDEFP.jpg',
        content: '定额发票 OCR 介绍',
        result: '发票代码：144011590802；发票号码： 04422100；金额： 伍拾元整',
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
                      {item.content}
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
                      {item.content}
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
                      {item.content}
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
