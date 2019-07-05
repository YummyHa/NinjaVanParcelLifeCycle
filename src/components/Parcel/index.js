import React, { Component } from "react";
import { ButtonBase, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

import './styles.scss';

class Parcel extends Component {
  render() {
    const { visible, color, onClick, parcel } = this.props;
    return (
      visible ? <div className='parcel-container fade-in' data-test="parcelContainer">
        <ButtonBase
          style={{ backgroundColor: color }}
          className="item-box"
          onClick={onClick}
        >
          <Typography data-test="parcelId" >id: {parcel !== null ? parcel.id : null}</Typography>
          <Typography data-test="parcelStatus">status: {parcel !== null ? parcel.status : null}</Typography>
        </ButtonBase>
      </div> : null
    );
  }
}

Parcel.propTypes = {
  visible: PropTypes.bool,
  color: PropTypes.string,
  onClick: PropTypes.func,
  parcel: PropTypes.shape({
    id: PropTypes.string,
    status: PropTypes.string,
    statusCode: PropTypes.number
  })
}

export default Parcel;
