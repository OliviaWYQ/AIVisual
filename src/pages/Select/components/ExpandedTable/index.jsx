import React, { Component } from 'react';
import { Table, Button, Pagination } from '@alifd/next';
import IceContainer from '@icedesign/container';
import { FormattedMessage } from 'react-intl';

const generatorData = (input) => {
  return Array.from(input).map((item, index) => {
    // console.log('input:', input, 'index', index);
    return {
      key: index + 1,
      name: item.name,
      type: item.type,
      size: item.size,
      user: item.user,
      time: item.time,
      desc: item.desc,
    };
  });
};

export default class ExpandedTable extends Component {
  static displayName = 'ExpandedTable';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      current: 1,
    };
  }

  handlePaginationChange = (current) => {
    this.setState({
      current,
    });
  };

  handleRowSelection = (selectedRowKeys, records) => {
    console.log('selectedRowKeys:', selectedRowKeys);
    console.log('records:', records);
  };

  renderOper = () => {
    return (
      <div>
        <Button
          type="primary"
          style={{ marginRight: '5px' }}
          onClick={this.handleDetail}
        >
          <FormattedMessage id="app.btn.detail" />
        </Button>
        <Button type="normal" warning onClick={this.handleDelete}>
          <FormattedMessage id="app.btn.delete" />
        </Button>
      </div>
    );
  };

  render() {
    
    const input = {
      img: [
        {
          name: '图片1',
          type: '.jpg',
          size: '1M',
          user: '管理员',
          time: '2019-03-06',
          desc:
            '测试图片',
        },
        {
          name: '图片2',
          type: '.jpg',
          size: '1M',
          user: '管理员',
          time: '2019-03-06',
          desc:
            '测试图片',
        },
        {
          name: '视频1',
          type: '.avi',
          size: '20M',
          user: '管理员',
          time: '2019-01-05',
          desc:
            '测试视频',
        },
        {
          name: '视频2',
          type: '.mp4',
          size: '12M',
          user: '管理员',
          time: '2019-01-12',
          desc:
            '测试视频',
        },
        {
          name: '声音1',
          type: '.csv',
          size: '2M',
          user: '管理员',
          time: '2018-12-07',
          desc:
            '测试声音',
        },
      ],
    }

    const data = generatorData(input.img);
    const rowSelection = {
      onChange: this.handleRowSelection,
      mode: 'multiple',
    };
    return (
      <IceContainer>
        <Table
          hasBorder={false}
          dataSource={data}
          primaryKey="key"
          expandedRowRender={(record) => record.desc}
          rowSelection={rowSelection}
        >
          <Table.Column title="Key" dataIndex="key" />
          <Table.Column title="名称" dataIndex="name" />
          <Table.Column title="类型" dataIndex="type" />
          <Table.Column title="大小" dataIndex="size" />
          <Table.Column title="上传者" dataIndex="user" />
          <Table.Column title="上传时间" dataIndex="time" />
          <Table.Column
              title="操作"
              width={200}
              dataIndex="oper"
              cell={this.renderOper}
            />
        </Table>
        <Pagination
          style={{ marginTop: '20px', textAlign: 'right' }}
          current={this.state.current}
          onChange={this.handlePaginationChange}
        />
      </IceContainer>
    );
  }
}