import React, { Component } from 'react';
import OverviewChartCard from './components/OverviewChartCard';
import TabChart from './components/TabChart';
import ProjectStatus from './components/ProjectStatus';
import OrderStatusChart from './components/OrderStatusChart';
import DownloadCard from './components/DownloadCard';
import SimpleVideoPlayer from './components/SimpleVideoPlayer';
// import Bubble from './components/BizchartsOtherBubble';
import  LineBarChart from './components/LineBarChart';

export default class Charts extends Component {
  static displayName = 'Charts';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="charts-page">
        {/* <OverviewChartCard /> */}
        {/* <ProjectStatus /> */}
        <SimpleVideoPlayer />
        <TabChart />
        {/* <Bubble /> */}
        <LineBarChart />
        {/* <OrderStatusChart /> */}
        <DownloadCard />
      </div>
    );
  }
}
