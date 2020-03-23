import React from 'react'
import FormPost from '../components/FormPost'
import CardPost from '../components/CardPost'

const ProtectedPage = () => (
  <div className="content">
    <div className="row">
      <div className="col-3">
        <FormPost />
      </div>
    </div>
  </div>
)

export default ProtectedPage
