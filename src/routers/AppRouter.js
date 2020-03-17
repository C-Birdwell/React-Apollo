import React from 'react'
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

import DashboardPage from '../screens/DashboardPage'
import PostsPage from '../screens/PostsPage'
import HelpPage from '../screens/HelpPage'
import NotFoundPage from '../screens/NotFoundPage'
import ProtectedPage from '../screens/ProtectedPage'
import Header from '../components/Header'
import LoadingVisual from '../components/LoadingVisual'

class AppRouter extends React.Component {
  render() {
    const { loading, loggedUser } = this.props
    return (
      <BrowserRouter>
        <div className="grid-header">
          <Header />
        </div>
        <div className="grid-body">
          <Switch>
            <Route path="/" exact>
              {loggedUser ? <ProtectedPage /> : <DashboardPage />}
            </Route>
            <Route path="/works" />
            <Route path="/posts" component={PostsPage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
        {loading && <LoadingVisual />}
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state => ({
  loggedUser: state.user.loggedUser,
  loading: state.visualFlags.loading,
})

export default connect(mapStateToProps)(AppRouter)
