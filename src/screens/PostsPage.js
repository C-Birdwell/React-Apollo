import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
// import { useHistory, useLocation } from 'react-router-dom'
// key={this.props.location.key}
import { _QueryPosts } from '../resolvers'
import { _getAllPosts } from '../actions'
import CardPost from '../components/CardPost'

class PostsPage extends React.Component {
  renderHead() {
    return (
      <Helmet>
        <title>Boilerplate - Posts Page</title>
      </Helmet>
    )
  }

  render() {
    const { posts } = this.props
    return (
      <div className="content">
        {this.renderHead()}
        <CardPost grid={3} />
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
