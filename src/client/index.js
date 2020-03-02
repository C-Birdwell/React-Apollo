import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'https://boilerplate-apollo.herokuapp.com',
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

export { client as default }
