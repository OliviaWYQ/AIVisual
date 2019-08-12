import React from 'react';
import axios from 'axios';

export default class GetCarPlate extends React.Component {
  state = {
    get: [],
  }

  componentDidMount() {
    return axios('http://127.0.0.1:5000/model_car_plate/car_plate_submit', {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      credentials: 'same-origin',
    }).then(res => {
      const get = res.get;
      this.setState({ get });
    });

    // axios.get('http://127.0.0.1:5000/model_car_plate/car_plate_submit')
    //   .then(res => {
    //     const get = res.get;
    //     this.setState({ get });
    //   });
  }

  render() {
    console.log('GET', this.state.get);
    return (
      <div>
        {/* <ul> Get Car Plate: { this.state.get }</ul> */}
        { this.state.get }
      </div>
    );
  }
}
