import React from 'react';
import { Button, Upload } from '@alifd/next';

class PostSound extends React.Component {
  beforeUpload = (info) => {
    console.log('beforeUpload callback', info);
    // this.setState({ fileToBeSent: info });
  }

  onSuccess = (info) => {
    // console.log('onSuccess : ', info);
    console.log('声音故障检测结果: ', info.url);
    this.props.func(info);
  }

  render() {
    return (
      <div style={{ margin: '15px 0 0' }}>
        <Upload
          action="http://192.168.108.3:31714/model/model_sound_recognition/sound_recognition_submit"
          // action="http://192.168.16.175:5060/model/model_sound_recognition/sound_recognition_submit"
          accept="audio/wav"
          autoUpload
          listType="text"
          useDataURL
          beforeUpload={this.beforeUpload}
          ref={this.saveUploaderRef}
          onSuccess={this.onSuccess}
          formatter={(res, file) => {
            // 函数里面根据当前服务器返回的响应数据
            // 重新拼装符合组件要求的数据格式
            return {
              success: res.status === 'success',
              url: res.data.recognition,
            };
          }}
        >
          <Button type="primary">上传声音</Button>
        </Upload>
      </div>
    );
  }
}

export default PostSound;
