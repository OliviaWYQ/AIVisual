import React from 'react';
import { Button, Upload } from '@alifd/next';

export default class PostFaceCompare extends React.Component {
  beforeUpload = (info) => {
    console.log('beforeUpload callback', info);
  }

  onSuccess = (info) => {
    console.log('onSuccess : ', info);
    console.log('相似度: ', info.url);
    this.props.func(info);
  }

  render() {
    return (
      <div style={{ margin: '15px 0 0' }}>
        <Upload
          action="http://192.168.108.3:31714/model/model_face_compare/compare"
          accept="image/png, image/jpg, image/jpeg"
          autoUpload
          multiple
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
              url: res.data.compare,
            };
          }}
        >
          <Button type="primary">上传图片</Button>
        </Upload>
      </div>
    );
  }
}
