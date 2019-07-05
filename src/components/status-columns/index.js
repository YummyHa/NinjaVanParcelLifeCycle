import React, { Component } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import Parcel from '../parcel';

import './styles.scss';

class StatusColumns extends Component {
  render() {
    const { parcel, onParcelClick } = this.props;
    return <Grid container className="grid-container" data-test="gridContainer">
      <Grid item sm>
        <Paper className="grid-paper" data-test="gridPaper">
          <Typography className="grid-item-head">Order Created</Typography>
          <Parcel
            visible={parcel !== null && parcel.statusCode === 0}
            parcel={parcel}
            onClick={onParcelClick}
          />
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper className="grid-paper" data-test="gridPaper">
          <Typography className="grid-item-head">Collected</Typography>
          <Parcel
            visible={parcel !== null && parcel.statusCode === 1}
            parcel={parcel}
            onClick={onParcelClick}
          />
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper className="grid-paper" data-test="gridPaper">
          <Typography className="grid-item-head">Warehouse</Typography>
          <Parcel
            visible={parcel !== null && parcel.statusCode === 2}
            parcel={parcel}
            onClick={onParcelClick}
          />
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper className="grid-paper" data-test="gridPaper">
          <Typography className="grid-item-head">Delivered</Typography>
          <Parcel
            visible={parcel !== null && parcel.statusCode === 3}
            parcel={parcel}
            onClick={onParcelClick}
          />
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper className="grid-paper" data-test="gridPaper">
          <Typography className="grid-item-head">Canceled</Typography>
          <Parcel
            visible={parcel !== null && parcel.statusCode === 4}
            parcel={parcel}
            onClick={onParcelClick}
            color="#FF5F58"
          />
        </Paper>
      </Grid>
    </Grid>
  }
}

StatusColumns.propTypes = {
  parcel: PropTypes.shape({
    id: PropTypes.string,
    status: PropTypes.string,
    statusCode: PropTypes.number
  }),
  onParcelClick: PropTypes.func,
}

export default StatusColumns;