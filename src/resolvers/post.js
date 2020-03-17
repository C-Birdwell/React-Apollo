import { gql } from 'apollo-boost'

import client from '../client'

const getPosts = gql`
  query {
    posts {
      id
      title
      body
      author {
        name
      }
    }
  }
`

const _QueryPosts = func => {
  client
    .query({
      query: getPosts,
    })
    .then(response => {
      func(response.data.posts)
      console.log(response)
    })
}

const _MutateCreatePost = (title, body, published, author, func) => {
  const createPost = (title, body, published, author) => gql`
  mutation {
    createPost(data: { 
        title: ${JSON.stringify(title)}, 
        body: ${JSON.stringify(body)}, 
        published: ${published}, 
        author: ${JSON.stringify(author)} 
      }) {
        id
        title
        body
    }
  }
`

  client
    .mutate({
      mutation: createPost(title, body, published, author),
      refetchQueries: getPosts,
    })
    .then(response => {
      console.log(response),
        client.query({ query: getPosts }).then(response => console.log(response.data.posts))
    })
    .catch(response => {
      console.log(response)
    })
}

export { _MutateCreatePost, _QueryPosts }
