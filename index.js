const { ApolloServer } = require('apollo-server')
const { typeDefs } = require('./schema')
const { Query } = require('./resolvers/Query')
const { Category } = require('./resolvers/Category')
const { Product } = require('./resolvers/Product')

// create GraphQL server
const server = new ApolloServer({
  // must add schema
  typeDefs,
  resolvers: {
    // specify resolves
    Query,
    Category,
    Product
  },
})

server.listen().then(({ url }) => {
  console.log(`Server is ready at ${url}`)
})
