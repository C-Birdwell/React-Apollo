import ApolloClient from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'

const cache = new InMemoryCache()

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

const client = new ApolloClient({
  uri: 'https://boilerplate-project-895f882f83.herokuapp.com/',
  request: operation => {
    const token = localStorage.getItem('token')
    operation.setContext({
      headers: token
        ? {
            Authorization: `Bearer ${JSON.parse(token)}`,
          }
        : null,
    })
  },
})

// client.defaultOptions.query = {
//   fetchPolicy: 'no-cache',
// }

export { client as default }
