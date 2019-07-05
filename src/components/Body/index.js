import React, { Component } from "react";
import { connect } from 'react-redux';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import Parcel from "../Parcel";

import './styles.scss';

import { updateParcel } from '../../actions/parcel'

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
    return (
      <div className="body-container">
        <div className="buttons-container">
          <Button variant="contained" color="secondary" onClick={this.createOrder}>Create Order</Button>
          {this.state.actionsVisible ? <div className="control-container">
            <span className="control-buttons-label">Actions</span>
            <div className="control-buttons-container">
              <Button
                variant="contained"
                classes={{ root: 'ctr-btn', label: 'ctr-btn-label' }}
                onClick={this.onUpdateParcel}
              >
                {this.props.parcel.statusCode === 0 ? 'Collect Parcel' :
                  this.props.parcel.statusCode === 1 ? 'Send to Warehouse' :
                    this.props.parcel.statusCode === 2 ? 'Deliver' : null}
              </Button>
              {this.props.parcel.statusCode === 1 || this.props.parcel.statusCode === 2 ?
                <Button
                  variant="contained"
                  classes={{ root: 'ctr-btn-cancel', label: 'ctr-btn-label' }}
                  onClick={this.onCancelParcel}
                >
                  Cancel Order
              </Button> : null}
            </div>
          </div> : null}
        </div>
        <Grid container className="grid-container">
          <Grid item sm>
            <Paper className="grid-paper">
              <Typography className="grid-item-head">Order Created</Typography>
              <Parcel
                visible={this.props.parcel !== null && this.props.parcel.statusCode === 0}
                parcel={this.props.parcel}
                onClick={this.onParcelClick}
              />
            </Paper>
          </Grid>
          <Grid item sm>
            <Paper className="grid-paper">
              <Typography className="grid-item-head">Collected</Typography>
              <Parcel
                visible={this.props.parcel !== null && this.props.parcel.statusCode === 1}
                parcel={this.props.parcel}
                onClick={this.onParcelClick}
              />
            </Paper>
          </Grid>
          <Grid item sm>
            <Paper className="grid-paper">
              <Typography className="grid-item-head">Warehouse</Typography>
              <Parcel
                visible={this.props.parcel !== null && this.props.parcel.statusCode === 2}
                parcel={this.props.parcel}
                onClick={this.onParcelClick}
              />
            </Paper>
          </Grid>
          <Grid item sm>
            <Paper className="grid-paper">
              <Typography className="grid-item-head">Delivered</Typography>
              <Parcel
                visible={this.props.parcel !== null && this.props.parcel.statusCode === 3}
                parcel={this.props.parcel}
                onClick={this.onParcelClick}
              />
            </Paper>
          </Grid>
          <Grid item sm>
            <Paper className="grid-paper">
              <Typography className="grid-item-head">Canceled</Typography>
              <Parcel
                visible={this.props.parcel !== null && this.props.parcel.statusCode === 4}
                parcel={this.props.parcel}
                onClick={this.onParcelClick}
                color="#FF5F58"
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { parcel } = state.parcel;
  return { parcel };
}

const mapDispatchToProps = {
  updateParcel
}

export default connect(mapStateToProps, mapDispatchToProps)(Body)
