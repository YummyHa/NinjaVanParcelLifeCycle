import React, { Component } from "react";
import { ButtonBase, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

import './styles.scss';

class Parcel extends Component {
  render() {
    const { color, onClick, parcel } = this.props;
    return (
      this.props.visible === true ?
        <div className="parcel-container" data-test="parcelContainer">
        <ButtonBase
          style={{ backgroundColor: color }}
          className="item-box"
          onClick={onClick}
        >
          <Typography data-test="parcelId" >id: {parcel.id}</Typography>
          <Typography data-test="parcelStatus">status: {parcel.status}</Typography>
        </ButtonBase>
      </div> : null
    );
  }
}

Parcel.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
  parcel: PropTypes.shape({
    id: PropTypes.string,
    status: PropTypes.string,
    statusCode: PropTypes.number
  })
}

export default Parcel;
