import { gql } from 'apollo-boost'

import client from '../client'

const _MutateCreatePost = (title, body, published, author) => {
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
    })
    .then(response => {
      console.log(response)
    })
    .catch(response => {
      console.log(response)
    })
}

const _QueryUsers = func => {
  const getUsers = gql`
    query {
      users {
        id
        name
      }
    }
  `

  client
    .query({
      query: getUsers,
    })
    .then(response => {
      func(response.data.users)
    })
}

export { _MutateCreatePost }
