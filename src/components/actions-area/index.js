import React, { Component } from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";

import './styles.scss';

class ActionsArea extends Component {
  render() {
    const { visible, statusCode, onUpdateParcel, onCancelParcel } = this.props;
    return visible ? <div className="control-container" data-test="controlContainer">
      <span className="control-buttons-label">Actions</span>
      <div className="control-buttons-container">
        <Button
          variant="contained"
          classes={{ root: 'ctr-btn', label: 'ctr-btn-label' }}
          onClick={onUpdateParcel}
          data-test="actionButton"
        >
          { statusCode === 0 ? 'Collect Parcel' :
            statusCode === 1 ? 'Send to Warehouse' :
            statusCode === 2 ? 'Deliver' : '' }
        </Button>
        { statusCode === 1 || statusCode === 2 ?
        <Button
          variant="contained"
          classes={{ root: 'ctr-btn-cancel', label: 'ctr-btn-label' }}
          onClick={onCancelParcel}
          data-test="cancelButton"
        >
          Cancel Order
        </Button> : null }
      </div>
    </div> : null
  }
}

ActionsArea.propTypes = {
  visible: PropTypes.bool,
  statusCode: PropTypes.number,
  onUpdateParcel: PropTypes.func,
  onCancelParcel: PropTypes.func
}

export default ActionsArea;
