import React, { Component } from "react";
import { AppBar, Toolbar, Button } from '@material-ui/core';
import PropTypes from 'prop-types';

import './styles.scss';
import logo from '../../assets/logo.png';

class Header extends Component {
  render() {
    const { parcel, startOver } = this.props;
    return (
      <AppBar position="static" color="default" data-test="appBar">
        <Toolbar classes={{ root: 'toolbar' }}>
          <img className="logo" alt="" src={logo} />
          {parcel !== null ?
          <Button
            color="secondary"
            classes={{ label: 'start-over-button' }}
            onClick={startOver}
            data-test="startOverBtn"
          >
            Start Over
          </Button> : null}
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  parcel: PropTypes.shape({
    id: PropTypes.string,
    status: PropTypes.string,
    statusCode: PropTypes.number
  }),
  startOver: PropTypes.func
}

export default Header;
