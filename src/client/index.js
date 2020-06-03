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
  uri: `https://boilerplate-project-895f882f83.herokuapp.com/`,
  request: operation => {
    console.log(process.env.CLIENT_URL)
    const getToken = localStorage.getItem('token')
    const bearerToken =
      getToken !== null ? { Authorization: `Bearer ${JSON.parse(getToken).token}` } : null
    operation.setContext({
      headers: bearerToken,
    })
  },
})

// client.defaultOptions.query = {
//   fetchPolicy: 'no-cache',
// }

export { client as default }
