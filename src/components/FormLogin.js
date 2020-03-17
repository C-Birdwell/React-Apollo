import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Button, InputText } from './subcomponents'
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
        <div className="col-1">
          <h2>Login User</h2>
        </div>
        <div className="col-7 center">
          <InputText value={loginEmail} onChange={_loginUserEmail} placeholder="Email" />
          <InputText
            value={loginPassword}
            onChange={_loginUserPassword}
            placeholder="Password"
            secure
          />
        </div>
        <div className="col-2">
          <Button
            onClick={() => {
              _flagLoading(true),
                _MutationLogIn(loginEmail, loginPassword, _getLoggedUser, _flagLoading)
            }}
            text="Login"
          />
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
