import React, { Component } from "react";
import { ButtonBase, Typography } from '@material-ui/core';

import './styles.scss';

export default class Parcel extends Component {
  render() {
    return (
      <div className="paper-body">
        {this.props.visible === true ? <ButtonBase
          style={{ backgroundColor: this.props.color }}
          className="item-box"
          onClick={this.props.onClick}
        >
          <Typography>id: {this.props.parcel.id}</Typography>
          <Typography>status: {this.props.parcel.status}</Typography>
        </ButtonBase> : ''}
      </div>
    );
  }
}
