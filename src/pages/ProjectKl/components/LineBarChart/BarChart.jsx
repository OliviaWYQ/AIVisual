import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Chart, Geom, Axis, Tooltip } from 'bizcharts';
import moment from 'moment';
import { DatePicker } from '@alifd/next';

const data = [
  {
    name: '区域1',
    value: 12,
  },
  {
    name: '区域2',
    value: 2,
  },
  {
    name: '区域3',
    value: 6,
  },
  {
    name: '区域4',
    value: 1,
  },
  {
    name: '区域5',
    value: 9,
  },
];

const cols = {
  value: {
    tickInterval: 20,
  },
};

const startValue = moment('2018-09-01', 'YYYY-MM-DD', true);
const endValue = moment('2018-09-09', 'YYYY-MM-DD', true);

export default class BarChart extends Component {
  static displayName = 'BarChart';

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
      <IceContainer title="分区统计">
        <h4>选择日期：</h4>
        <div style={{ marginTop: '20px' }}>
          <DatePicker
            locale={{ datePlaceholder: '查看日期' }}
            defaultValue={startValue}
            onChange={val => console.log(val.format('YYYY-MM-DD'))}
            dateInputAriaLabel="date input"
            inputProps={{ 'aria-label': 'date picker main' }}
            disabledDate={this.disabledDate}
          />
        </div>
        <Chart height={400} padding={[40]} data={data} scale={cols} forceFit>
          <Axis name="name" />
          <Axis name="value" />
          <Tooltip
            crosshairs={{
              type: 'y',
            }}
          />
          <Geom type="interval" position="name*value" />
        </Chart>
      </IceContainer>
    );
  }
}
