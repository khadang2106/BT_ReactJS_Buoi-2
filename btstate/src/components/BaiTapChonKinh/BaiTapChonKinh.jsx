import React, { Component } from 'react';

import './style.css';
import Header from './Header';
import GlassInfo from './GlassInfo';
import DemoModel from './DemoModel';
import ItemList from './ItemList';
import glassData from '../../data/dataGlasses.json';

export default class BaiTapChonKinh extends Component {
  state = {
    glassDetail: glassData[glassData.length - 1],
  };

  getGlassDetail = (glass) => {
    this.setState({
      glassDetail: glass,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="body">
          <h3 className="p-3">As if you were there!</h3>
          <div className="container body__content my-3">
            <div className="row p-4">
              <GlassInfo glassDetail={this.state.glassDetail} />

              <DemoModel glassDetail={this.state.glassDetail} />
            </div>

            <ItemList
              glassData={glassData}
              getGlassDetail={this.getGlassDetail}
            />
          </div>
        </div>
      </div>
    );
  }
}
