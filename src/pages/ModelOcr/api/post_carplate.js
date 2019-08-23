import React from 'react';
// import { connect } from 'react-redux';
import { Button, Upload } from '@alifd/next';
// import { getCarplateData } from '../../../store/modelCarplate/action';

class PostCarPlate extends React.Component {
  beforeUpload = (info) => {
    console.log('beforeUpload callback', info);
    // this.setState({ fileToBeSent: info });
  }

  onSuccess = (info) => {
    // console.log('onSuccess : ', info);
    console.log('车牌号: ', info.url);
    console.log('pathout:', info.response.downloadURL);
    this.props.func(info);
  }

  render() {
    return (
      <div style={{ margin: '15px 0 0' }}>
        <Upload
          action="http://192.168.108.3:31714/model/model_car_plate/car_plate_submit"
          // action="http://192.168.16.175:5060/model/model_car_plate/car_plate_submit"
          accept="image/png, image/jpg, image/jpeg"
          autoUpload
          listType="image"
          useDataURL
          beforeUpload={this.beforeUpload}
          ref={this.saveUploaderRef}
          onSuccess={this.onSuccess}
          formatter={(res, file) => {
            // 函数里面根据当前服务器返回的响应数据
            // 重新拼装符合组件要求的数据格式
            return {
              success: res.status === 'success',
              url: res.data.carplate,
              imgURL: res.data.pathin,
              downloadURL: res.data.pathout,
            };
          }}
        >
          <Button type="primary">上传图片</Button>
        </Upload>
      </div>
    );
  }
}

export default PostCarPlate;
