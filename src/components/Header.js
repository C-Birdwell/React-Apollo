import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <div className="row">
      <div className="col-2">
        <h1>React GraphQL PostgresSQL</h1>
      </div>
      <div className="col-3">
        <div className="row nav">
          <NavLink to="/" activeClassName="is-active" exact={true} className="nav-link">
            <div className="nav-item">
              <p>Dashboard</p>
            </div>
          </NavLink>
          <NavLink to="/posts" activeClassName="is-active" className="nav-link">
            <div className="nav-item">
              <p>Posts</p>
            </div>
          </NavLink>
          <NavLink to="/help" activeClassName="is-active" className="nav-link">
            <div className="nav-item">
              <p>Help Page</p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  </header>
)

export default Header
