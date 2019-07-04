import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

const frameworkIcon = require('./images/framework_icon.png');
const componentIcon = require('./images/component_icon.png');
const apiIcon = require('./images/api_icon.png');

const abilities = [
  {
    icon: frameworkIcon,
    title: '多场景应用',
    content: '高效便捷满足多种需求',
    link: '/#/ModelOCR',
  },
  {
    icon: componentIcon,
    title: '算法模块化',
    content: '定制个性化数据分析流程',
    link: '/#/ProjectKL',
  },
  {
    icon: apiIcon,
    title: 'API',
    content: '调用算法的支持和保障',
    link: '#',
  },
];

export default class Index extends Component {
  renderAblities = () => {
    return abilities.map(({ icon, title, content, link }, idx) => {
      return (
        <Col xxs="24" l="8" className={styles.item} key={idx}>
          <img src={icon} className={styles.icon} alt="" />
          <div className={styles.icon_title}>
            {title}
          </div>
          <div
            className={styles.content}
          >
            {content}
          </div>
          <a href={link} className={styles.link}>
            了解更多
            <div
              className={styles.linkOne}
            >
              <div
                className={styles.linkTwo}
              />
            </div>
          </a>
        </Col>
      );
    });
  };
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.title}> AI 可视化分析平台</div>
        <hr style={{ width: '50%', height: '10px' }} />
        <div className={styles.subtitle}> 让算法触手可及 </div>
        <Row wrap className={styles.group}>
          {this.renderAblities()}
        </Row>
      </div>
    );
  }
}


