import React, { Component } from 'react';

export default class GlassInfo extends Component {
  render() {
    const { price, name, url, desc } = this.props.glassDetail;

    return (
      <div className="col-6 glass-info">
        <div className="card">
          <img className="card-img-top w-75 mx-auto" src={url} alt="" />
          <div className="card-body text-center">
            <h2 className="card-title">{name}</h2>
            <h4>
              Price: <span>${price}</span>
            </h4>
            <p className="card-text">{desc}</p>
          </div>
        </div>
      </div>
    );
  }
}
