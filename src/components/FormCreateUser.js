import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Button, InputText } from './subcomponents'
import {
  _createUserUsername,
  _createUserPassword,
  _createUserEmail,
  _getLoggedUser,
} from '../actions'
import { _MutateCreateUser } from '../resolvers'

class FormCreateUser extends React.Component {
  render() {
    const {
      _createUserUsername,
      _createUserPassword,
      _createUserEmail,
      _getLoggedUser,
      createUserUsername,
      createUserPassword,
      createUserEmail,
    } = this.props
    return (
      <div className="form-wrapper">
        <div className="col-1">
          <h2>Create User</h2>
        </div>
        <div className="col-7 center">
          <InputText
            value={createUserUsername}
            onChange={_createUserUsername}
            placeholder="User Name"
          />
          <InputText
            value={createUserPassword}
            onChange={_createUserPassword}
            placeholder="Password"
            secure
          />
          <InputText value={createUserEmail} onChange={_createUserEmail} placeholder="Email" />
        </div>
        <div className="col-2">
          <Button
            onClick={() =>
              _MutateCreateUser(
                createUserUsername,
                createUserEmail,
                createUserPassword,
                _getLoggedUser,
              )
            }
            text="Create New User"
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userID: state.user.userID,
  createUserUsername: state.user.createUserUsername,
  createUserPassword: state.user.createUserPassword,
  createUserEmail: state.user.createUserEmail,
  loggedUser: state.user.loggedUser,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { _createUserUsername, _createUserPassword, _createUserEmail, _getLoggedUser },
    dispatch,
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(FormCreateUser)
