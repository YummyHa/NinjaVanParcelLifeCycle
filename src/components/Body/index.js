import React, { Component } from "react";
import { Button } from "@material-ui/core";
import PropTypes from 'prop-types';
import ActionsArea from '../actions-area';
import StatusColumns from '../status-columns';

import './styles.scss';

class Body extends Component {
  state = {
    actionsVisible: false
  }

  createOrder = () => {
    if (this.props.parcel === null) {
      this.props.updateParcel({
        id: '1',
        status: 'Pending Pickup',
        statusCode: 0
      });
    }
  }

  onParcelClick = () => {
    if (this.props.parcel.statusCode === 3 || this.props.parcel.statusCode === 4) {
      return;
    }
    this.setState({ actionsVisible: true });
  }

  onUpdateParcel = () => {
    this.setState({ actionsVisible: false });
    if (this.props.parcel.statusCode === 0) {
      this.props.updateParcel({
        id: '1',
        status: 'Collected',
        statusCode: 1
      });
    } else if (this.props.parcel.statusCode === 1) {
      this.props.updateParcel({
        id: '1',
        status: 'Inbounded',
        statusCode: 2
      });
    } else if (this.props.parcel.statusCode === 2) {
      this.props.updateParcel({
        id: '1',
        status: 'Delivered',
        statusCode: 3
      });
    }
  }

  onCancelParcel = () => {
    this.setState({ actionsVisible: false });
    this.props.updateParcel({
      id: '1',
      status: 'Cancelled',
      statusCode: 4
    });
  }

  render() {
    const { parcel } = this.props;
    return (
      <div className="body-container" data-test="bodyContainer">
        <div className="buttons-container" data-test="buttonContainer">
          <Button variant="contained" color="secondary" onClick={this.createOrder}>Create Order</Button>
          <ActionsArea
            visible={this.state.actionsVisible}
            statusCode={parcel !== null ? parcel.statusCode : null}
            onUpdateParcel={this.onUpdateParcel}
            onCancelParcel={this.onCancelParcel}
          />
        </div>
        <StatusColumns
          data-test="statusColumnsContainer"
          parcel={parcel}
          onParcelClick={this.onParcelClick}
        />
      </div>
    );
  }
}

Body.propTypes = {
  updateParcel: PropTypes.func,
  parcel: PropTypes.shape({
    id: PropTypes.string,
    status: PropTypes.string,
    statusCode: PropTypes.number
  })
}

export default Body;
