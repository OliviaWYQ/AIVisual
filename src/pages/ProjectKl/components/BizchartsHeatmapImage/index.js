import React from 'react';
import moment from 'moment';
import { Chart, Geom, Tooltip, Legend, Guide } from 'bizcharts';
import IceContainer from '@icedesign/container';
import data from './mock.json';

const startValue = moment('2018-09-01', 'YYYY-MM-DD', true);
const endValue = moment('2018-09-09', 'YYYY-MM-DD', true);

class Image extends React.Component {
  // eslint-disable-next-line no-unused-vars
  disabledDate = function (date, view) {
    return (endValue + 1).valueOf() <= date.valueOf() || date.valueOf() <= (startValue - 1).valueOf();
  };

  render() {
    // eslint-disable-next-line no-shadow
    const { Image } = Guide;
    return (
      <IceContainer title="客流热力图">
        <br />
        <Chart
          height={window.innerHeight}
          padding={[0, 30, 60, 30]}
          data={data}
          forceFit
        >
          <Tooltip showTitle={false} />
          <Legend offset={10} />
          <Geom
            type="heatmap"
            position="g*l"
            color={[
              'tmp',
              '#F51D27-#FA541C-#FF8C12-#FFC838-#FAFFA8-#80FF73-#12CCCC-#1890FF-#6E32C2',
            ]}
          />
          <Guide>
            <Image
              start={['min', 'max']}
              end={['max', 'min']}
              src="https://gw.alipayobjects.com/zos/rmsportal/NeUTMwKtPcPxIFNTWZOZ.png"
            />
          </Guide>
        </Chart>
      </IceContainer>
    );
  }
}

export default Image;
