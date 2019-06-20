import React, { Component } from 'react';
import SimpleStep from './components/SimpleStep';
import StepForm from './components/StepForm';

export default class Step extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="step-page">
        <SimpleStep />

        <StepForm />
      </div>
    );
  }
}
