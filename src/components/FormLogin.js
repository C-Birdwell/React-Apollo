import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { _MutationLogIn } from '../resolvers'
import {
  _loginUserEmail,
  _loginUserPassword,
  _getLoggedUser,
  _loginUserClear,
  _flagLoading,
} from '../actions'

class FormLogin extends React.Component {
  render() {
    const {
      _getLoggedUser,
      _loginUserEmail,
      _loginUserPassword,
      _loginUserClear,
      _flagLoading,
      loginEmail,
      loginPassword,
    } = this.props
    return (
      <div className="form-wrapper">
        <h2>Login User</h2>
        <input
          type="text"
          value={loginEmail}
          onChange={val => _loginUserEmail(val.target.value)}
          placeholder="Email"
        />
        <input
          type="text"
          value={loginPassword}
          onChange={val => _loginUserPassword(val.target.value)}
          placeholder="Password"
        />
        <div
          className="button"
          onClick={() => {
            _flagLoading(true),
              _MutationLogIn(loginEmail, loginPassword, _getLoggedUser, _flagLoading)
          }}
        >
          Login
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loginEmail: state.login.loginEmail,
  loginPassword: state.login.loginPassword,
  loggedUser: state.user.loggedUser,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { _loginUserEmail, _loginUserPassword, _getLoggedUser, _loginUserClear, _flagLoading },
    dispatch,
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin)
