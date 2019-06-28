import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import BarChart from './BarChart';
import LineChart from './LineChart';
import Image from '../BizchartsHeatmapImage/index';

const { Row, Col } = Grid;

export default class LineBarChart extends Component {
  static displayName = 'LineBarChart';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Row gutter="20" wrap>
          <Col l="12">
            <LineChart />
          </Col>
          <Col l="12">
            <BarChart />
          </Col>
        </Row>
        {/* 热力图 */}
        <Image />
      </div>
    );
  }
}
