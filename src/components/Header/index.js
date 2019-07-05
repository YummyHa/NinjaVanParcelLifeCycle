import React, { Component } from "react";
import { connect } from 'react-redux';
import { AppBar, Toolbar, Button } from '@material-ui/core';

import './styles.scss';
import logo from '../../logo.png';

import { startOver } from '../../actions/parcel'

class Header extends Component {
  render() {
    return (
      <AppBar position="static" color="default">
        <Toolbar classes={{ root: 'toolbar' }}>
          <img className="logo" alt="" src={logo} />
          {this.props.parcel !== null ?
          <Button
            color="secondary"
            classes={{ label: 'start-over-button' }}
            onClick={this.props.startOver}
          >
            Start Over
          </Button> : null}
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = (state) => {
  const { parcel } = state.parcel;
  return { parcel };
}

const mapDispatchToProps = {
  startOver
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
