import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Login from '../components/Auth/Login';

class LoginContainer extends Component {
  state = {};

  render() {
    const { loading } = this.props;

    console.log({ loading });

    return <Login />;
  }
}

LoginContainer.propTypes = {
  loading: PropTypes.bool,
};

LoginContainer.defaultProps = {
  loading: false,
};

const mapStateToProps = (state) => ({
  auth: state.auth || {},
  loading: state.loading.global || false,
});

const mapDispatchToProps = (dispatch) => ({
  login: dispatch.auth.login,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
