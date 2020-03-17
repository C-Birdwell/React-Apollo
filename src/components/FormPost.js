import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Button, InputText, InputTextArea } from './subcomponents'
import { _MutateCreatePost, _QueryPosts } from '../resolvers'

import {
  _createPostTitle,
  _createPostBody,
  _createPostPublished,
  _createPostAuthor,
  _createPostClear,
  _getAllPosts,
} from '../actions'

class FormPost extends React.Component {
  render() {
    const {
      _createPostTitle,
      _createPostBody,
      _createPostPublished,
      _createPostAuthor,
      _createPostClear,
      _getAllPosts,
      createPostTitle,
      createPostBody,
      createPostPublished,
      loggedUser,
    } = this.props
    return (
      <div className="form-wrapper">
        <div className="col-1">
          <p>Welcome back {loggedUser.name}!</p>
          <h2>Create Post</h2>
        </div>
        <div className="col-7">
          <InputText value={createPostTitle} onChange={_createPostTitle} placeholder="Title" />

          <InputTextArea
            value={createPostBody}
            onChange={_createPostBody}
            placeholder="Body Content"
          />
        </div>
        <div className="col-2">
          <div
            className={`button-toggle${createPostPublished ? '-on' : ''}`}
            onClick={() => {
              _createPostPublished(!createPostPublished)
            }}
          >
            Publish
          </div>
          <Button
            text="Create Post"
            onClick={() =>
              _MutateCreatePost(
                createPostTitle,
                createPostBody,
                createPostPublished,
                loggedUser.id,
                _getAllPosts,
              )
            }
          />
          <Button text="Get All" onClick={() => _QueryPosts(_getAllPosts)} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  createPostTitle: state.post.createPostTitle,
  createPostBody: state.post.createPostBody,
  createPostAuthor: state.post.createPostAuthor,
  createPostPublished: state.post.createPostPublished,
  loggedUser: state.user.loggedUser,
  posts: state.post.posts,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      _createPostTitle,
      _createPostBody,
      _createPostPublished,
      _createPostAuthor,
      _createPostClear,
      _getAllPosts,
    },
    dispatch,
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPost)
