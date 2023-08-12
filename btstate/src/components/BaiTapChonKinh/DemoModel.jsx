import React, { Component } from 'react';

export default class DemoModel extends Component {
  render() {
    return (
      <div className="col-6 demo-model text-center">
        <img className="img-fluid w-50" src="./glassesImage/model.jpg" alt="" />
        <img
          className="img-fluid w-25 demo-glasses"
          src={this.props.glassDetail.url}
          alt=""
        />
      </div>
    );
  }
}
