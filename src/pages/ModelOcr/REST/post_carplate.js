import React from 'react';
import { Button, Dialog, Upload } from '@alifd/next';

export default class PostCarPlate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileToBeSent: null,
      myResult: {},
    };
    this.onChange = this.onChange.bind(this);
    this.resetFile = this.resetFile.bind(this);
  }

  onChange(event) {
    this.setState({
      fileToBeSent: URL.createObjectURL(event.target.files[0]),
    });
  }

  resetFile(event) {
    event.preventDefault();
    this.setState({ fileToBeSent: null });
  }

  saveUploaderRef = (ref) => {
    this.uploaderRef = ref.getInstance();
    console.log('saveUploaderRef', this.uploaderRef);
  };

  onSubmit = () => {
    this.uploaderRef.startUpload();
    // console.log('onSubmit');
  }

  beforeUpload = (info) => {
    console.log('beforeUpload callback', info);
    this.setState({ fileToBeSent: info });
  }

  onSelect() {
    const currentFile = this.state.fileToBeSent;
    if (!currentFile) {
      this.setState({ fileToBeSent: 'file' });
    }
  }

  onOpen = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onClick() {
    // e.preventDefault();
    console.log(this.state);
    if (this.state.fileToBeSent && this.state.fileToBeSent !== 'file') {
      return (
        <Dialog
          title="Empty File Error"
          visible={this.state.visible}
          onOpen
          onOk={this.onClose.bind(this, 'okClick')}
          onCancel={this.onClose.bind(this, 'cancelClick')}
          onClose={this.onClose}
        >
          You need to select a file before upload
        </Dialog>
      );
    }
  }

  render() {
    return (
      <div style={{ margin: '15px 0 0' }}>
        <Upload
          action="http://192.168.108.3:31714/model/model_car_plate/car_plate_submit"
          accept="image/png, image/jpg, image/jpeg"
          autoUpload
          listType="image"
          useDataURL
          beforeUpload={this.beforeUpload}
          ref={this.saveUploaderRef}
        >
          <Button type="primary">上传图片</Button>
        </Upload>

        {/* <div> */}
        {/*  <form target="showResult" onChange={this.onChange} action="http://192.168.108.3:31714/model/model_car_plate/car_plate_submit" method="post" encType="multipart/form-data"> */}
        {/*    <Button type="primary">选择图片</Button> */}
        {/*    {this.state.fileToBeSent && (<Button style={{ position: 'relative', marginLeft: '-82px'}} onClick={this.resetFile}>重新选择</Button>)} */}
        {/*    <input onClick={this.onSelect.bind(this)} style={{ position: 'relative', marginLeft: '-82px', opacity: 0, width: '82px' }} className="next-btn next-medium next-btn-primary" type="file" name="data_path" /> */}
        {/*    <input onClick={this.onClick.bind(this)} style={{ marginLeft: '13px' }} className="next-btn next-medium next-btn-primary" type="submit" value="上传图片" /> */}
        {/*  </form> */}
        {/* </div> */}
        {/* <img alt="img" style={{ width: '300px' }} src={this.state.fileToBeSent} /> */}
      </div>
    );
  }
}
