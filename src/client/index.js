import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: process.env.PRISMA_ENDPOINT,
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
