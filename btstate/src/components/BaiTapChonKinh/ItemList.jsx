import React, { Component } from 'react';

export default class ItemList extends Component {
  renderGlassList = () => {
    return this.props.glassData.map((element, index) => {
      return (
        <div key={index} className="col-2">
          <button
            onClick={() => this.props.getGlassDetail(element)}
            className="btn w-100"
          >
            {element.id === 10 ? (
              <p
                className="btn btn-primary
               px-4 m-0"
              >
                Off
              </p>
            ) : (
              <img className="img-fluid" src={element.url} alt="" />
            )}
          </button>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="item-list p-4">
        <div className="row">{this.renderGlassList()}</div>
      </div>
    );
  }
}
