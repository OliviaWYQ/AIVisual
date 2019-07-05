import React, { Component } from 'react';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import { Overlay, Button } from '@alifd/next';
import styles from './index.module.scss';

class CameraAPI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  }

  // eslint-disable-next-line no-unused-vars,class-methods-use-this
  onTakePhoto(dataUri) {
    // Do stuff with the dataUri photo...
    console.log('takePhoto');
  }

  // eslint-disable-next-line class-methods-use-this
  onCameraError(error) {
    console.error('onCameraError', error);
  }

  // eslint-disable-next-line no-unused-vars,class-methods-use-this
  onCameraStart(stream) {
    console.log('onCameraStart');
  }

  // eslint-disable-next-line class-methods-use-this
  onCameraStop() {
    console.log('onCameraStop');
  }

  onClick = () => {
    this.setState({
      visible: !this.state.visible,
    });
  }

  onClose = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div className="CameraAPI">
        <div>
          <Button type="primary"
            onClick={this.onClick}
            ref={ref => {
                this.btn = ref;
            }}
          >
                拍摄照片
          </Button>
          <Overlay visible={this.state.visible}
            safeNode={() => this.btn}
            align="cc cc"
            hasMask
            disableScroll
            onRequestClose={this.onClose}
          >
            <span className={styles.overlay}>
              <Camera
                onTakePhoto={(dataUri) => { this.onTakePhoto(dataUri); }}
                  // onCameraError = { (error) => { this.onCameraError(error); } }
                idealResolution={{ width: 640, height: 480 }}
                idealFacingMode={FACING_MODES.ENVIRONMENT}
                imageType={IMAGE_TYPES.JPG}
                imageCompression={0.97}
                isMaxResolution={false}
                isImageMirror={false}
                isSilentMode
                  // isDisplayStartCameraError = {true}
                isFullscreen={false}
                sizeFactor={1}
                onCameraStart={(stream) => { this.onCameraStart(stream); }}
                onCameraStop={() => { this.onCameraStop(); }}
              />
            </span>
          </Overlay>
        </div>
      </div>
    );
  }
}

export default CameraAPI;
