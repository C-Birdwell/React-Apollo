import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import { _flagNewUser } from '../actions'
import FormLogin from '../components/FormLogin'
import FormCreateUser from '../components/FormCreateUser'
import { Button } from '../components/subcomponents'

class DashboardPage extends React.Component {
  renderHead() {
    return (
      <Helmet>
        <title>Boilerplate - Dashboard Page</title>
      </Helmet>
    )
  }

  renderForm(flag) {
    return <div className="col-3">{!flag ? <FormLogin /> : <FormCreateUser />}</div>
  }

  render() {
    const { _flagNewUser, flagNewUser } = this.props
    return (
      <div className="content">
        {this.renderHead()}
        <div className="row col-4">
          <div className="col-1" />
          {this.renderForm(flagNewUser)}
          <div className="col-1" />
        </div>
        <div className="row col-1">
          <div className="col-1">
            <Button
              onClick={() => _flagNewUser(!flagNewUser)}
              text={flagNewUser ? 'Back to Login' : 'New User?'}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  flagNewUser: state.visualFlags.flagNewUser,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ _flagNewUser }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)
