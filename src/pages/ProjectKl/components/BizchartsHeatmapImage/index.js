import React from "react";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";
import IceContainer from '@icedesign/container';
import data from "./mock.json";
import styles from './index.module.scss';
import moment from 'moment';
import { DatePicker } from '@alifd/next';

const startValue = moment('2018-09-01', 'YYYY-MM-DD', true);
const endValue = moment('2018-09-09', 'YYYY-MM-DD', true);

class Image extends React.Component {
  
  disabledDate = function (date, view) {
    return (endValue+1).valueOf() <= date.valueOf() || date.valueOf() <= (startValue-1).valueOf();
};

  render() {
    const { Image } = Guide;
    return (
      <IceContainer title='客流热力图'>
        {/* <h4>日期：2018-09-06</h4> */}
        {/* <h4>选择日期：</h4>
          <div style={{marginTop: '20px', marginBottom: '10px'}}>
           <DatePicker
            locale={{ datePlaceholder: '查看日期' }}
            defaultValue={startValue} 
            onChange={val => console.log(val.format('YYYY-MM-DD'))}
            dateInputAriaLabel="date input" 
            inputProps={{"aria-label": "date picker main"}}
            disabledDate={this.disabledDate}
            />
          </div> */}

        {/* <h4 align='center' style={{color: 'rgb(51, 51, 51)'}} className={styles.custometitle}>客流热力图</h4> */}
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
              "tmp",
              "#F51D27-#FA541C-#FF8C12-#FFC838-#FAFFA8-#80FF73-#12CCCC-#1890FF-#6E32C2"
            ]}
          />
          <Guide>
            <Image
              start={["min", "max"]}
              end={["max", "min"]}
              src="https://gw.alipayobjects.com/zos/rmsportal/NeUTMwKtPcPxIFNTWZOZ.png"
            />
          </Guide>
        </Chart>
      </IceContainer>
    );
  }
}

export default Image;
