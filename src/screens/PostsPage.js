import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { useHistory, useLocation } from 'react-router-dom'
import { _QueryPosts } from '../resolvers'
import { _getAllPosts } from '../actions'

class PostsPage extends React.Component {
  componentDidMount() {
    const { _getAllPosts, posts } = this.props
    _QueryPosts(_getAllPosts)
  }

  renderHead() {
    return (
      <Helmet>
        <title>Boilerplate - Posts Page</title>
      </Helmet>
    )
  }

  renderPost(posts) {
    return (
      <div className="grid-container grid-3" key={this.props.location.key}>
        {posts &&
          posts.map((item, index) => (
            <div key={`${index}`} className="card-container">
              <div className="card-title">
                <p>{item.title}</p>
              </div>
              <div className="card-body">
                <p>{item.body}</p>
              </div>
              <div className="card-author">
                <p>posted by:</p>
                <p>{item.author.name}</p>
              </div>
            </div>
          ))}
      </div>
    )
  }

  render() {
    const { posts } = this.props
    return (
      <div className="content">
        {this.renderHead()}
        {this.renderPost(posts)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.post.posts,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ _getAllPosts }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PostsPage)
