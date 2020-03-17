import React from 'react'
import FormPost from '../components/FormPost'

const ProtectedPage = () => (
  <div className="content">
    <div className="row">
      <div className="col-1" />
      <div className="col-3 center">
        <FormPost />
      </div>
      <div className="col-1" />
    </div>
  </div>
)

export default ProtectedPage
