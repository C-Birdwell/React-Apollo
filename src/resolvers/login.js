import { gql } from 'apollo-boost'
import { timeStamp, hashPassword } from '../utils'

import client from '../client'

const _MutationLogIn = (email, password, func, loadStatus) => {
  const loginUser = (email, password) => gql`
    mutation {
      login(data: {email: ${JSON.stringify(email).toLowerCase()}, password: ${JSON.stringify(
    password,
  )}}) {
        token
        user {
          id
          name
          email
        }
      }
    }
  `

  client
    .mutate({
      mutation: loginUser(email, password),
    })
    .then(response => {
      timeStamp(response)
      func(response.data.login.user)
      loadStatus(false)
    })
    .catch(response => {
      loadStatus(false)
    })
}

export { _MutationLogIn }
