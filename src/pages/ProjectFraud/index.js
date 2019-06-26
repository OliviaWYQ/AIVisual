import React, { Component } from 'react';
import SimpleFluencyForm from './components/SimpleFluencyForm';

export default class ProjectFraud extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="project-fraud-page">
        {/* SimpleFluencyForm */}
        <SimpleFluencyForm />
      </div>
    );
  }
}
