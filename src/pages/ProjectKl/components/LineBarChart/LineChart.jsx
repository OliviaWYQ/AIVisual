import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip } from 'bizcharts';
import IceContainer from '@icedesign/container';
import moment from 'moment';
import { DatePicker } from '@alifd/next';

const data = [
  {
    date: '2018-09-01',
    acc: 0,
  },
  {
    date: '2018-09-02',
    acc: 20,
  },
  {
    date: '2018-09-03',
    acc: 17,
  },
  {
    date: '2018-09-04',
    acc: 20,
  },
  {
    date: '2018-09-05',
    acc: 21,
  },
  {
    date: '2018-09-06',
    acc: 20,
  },
  {
    date: '2018-09-07',
    acc: 21,
  },
  {
    date: '2018-09-08',
    acc: 16,
  },
  {
    date: '2018-09-09',
    acc: 20,
  },
];

const cols = {
  acc: {
    alias: '讨论次数',
  },
};

const { RangePicker, MonthPicker, YearPicker } = DatePicker;
const startValue = moment('2018-09-01', 'YYYY-MM-DD', true);
const endValue = moment('2018-09-09', 'YYYY-MM-DD', true);

export default class LineChart extends Component {
  static displayName = 'LineChart';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  disabledDate = function (date, view) {
    return (endValue + 1).valueOf() <= date.valueOf() || date.valueOf() <= (startValue - 1).valueOf();
  };

  render() {
    return (
      <IceContainer title="客流趋势">
        <h4>选择日期范围：</h4>
        <div style={{ marginTop: '20px' }}>
          <RangePicker
            defaultValue={[startValue, endValue]}
            disabledDate={this.disabledDate}
            onChange={val => console.log(val[0].format('YYYY-MM-DD'), val[1].format('YYYY-MM-DD'))}
          />
        </div>
        <Chart height={400} padding={[40]} data={data} scale={cols} forceFit>
          <Axis
            name="date"
            title={null}
            tickLine={null}
            line={{
              stroke: '#E6E6E6',
            }}
          />
          <Tooltip />
          <Geom
            type="line"
            position="date*acc"
            size={1}
            color="l (270) 0:rgba(255, 146, 255, 1) .5:rgba(100, 268, 255, 1) 1:rgba(215, 0, 255, 1)"
            shape="smooth"
            style={{
              shadowColor: 'l (270) 0:rgba(21, 146, 255, 0)',
              shadowBlur: 60,
              shadowOffsetY: 6,
            }}
          />
        </Chart>
      </IceContainer>
    );
  }
}
