import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { _QueryPosts } from '../resolvers'
import { _getAllPosts, _reversePostOrder } from '../actions'

import { Button } from './subcomponents'

// Takes a grid prop for columns
class CardPost extends React.Component {
  componentDidMount() {
    const { _getAllPosts } = this.props
    _QueryPosts(_getAllPosts)
  }

  renderButton() {
    const { _reversePostOrder, posts } = this.props

    return (
      <div className="card-order-button">
        <Button onClick={() => _reversePostOrder(posts)} text="Order" />
      </div>
    )
  }

  renderCards() {
    const { posts, grid } = this.props

    return (
      <div className={`grid-container grid-${grid}`}>
        {posts.map((item, index) => (
          <div key={`${index}-${item.id}`} className="card-container">
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

    if (!posts.length > 0) {
      return null
    } else {
      return (
        <div>
          {this.renderButton()}
          {this.renderCards()}
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  posts: state.post.posts,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ _getAllPosts, _reversePostOrder }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CardPost)
