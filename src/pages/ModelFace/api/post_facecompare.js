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

  saveUploaderRef = (ref) => {
    this.uploaderRef = ref.getInstance();
  };

  onSubmit = () => {
    this.uploaderRef.startUpload();
  }

  onChange(file) {
    console.log('onChange callback : ', file);
  }

  render() {
    return (
      <div style={{ margin: '15px 0 0' }}>
        <Upload
          // action="http://192.168.108.3:31714/model/model_face_compare/compare"
          action="http://192.168.16.175:5060/model/model_face_compare/compare"
          accept="image/png, image/jpg, image/jpeg"
          autoUpload={false}
          onChange={this.onChange}
          multiple
          // limit={2}
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
              imgURL1: res.data.path1,
              imgURL2: res.data.path2,
            };
          }}
        >
          <Button type="primary">选择图片</Button>
        </Upload>
        <br />
        <Button type="primary" onClick={this.onSubmit}>确认上传</Button>
      </div>
    );
  }
}
