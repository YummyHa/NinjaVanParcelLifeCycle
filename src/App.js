import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from './components/header';
import Body from './components/body';

import { startOver, updateParcel } from './actions/parcel'

class App extends Component {
  render() {
    const props = this.props;
    return (
      <Fragment>
        <Header {...props} />
        <Body {...props} />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { parcel } = state.parcel;
  return { parcel };
}

const mapDispatchToProps = {
  startOver,
  updateParcel
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
