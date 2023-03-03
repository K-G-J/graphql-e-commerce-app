const { ApolloServer } = require('apollo-server')
const { typeDefs } = require('./schema')
const { Query } = require('./resolvers/Query')
const { Mutation } = require('./resolvers/Mutation')
const { Category } = require('./resolvers/Category')
const { Product } = require('./resolvers/Product')
const { db } = require('./db')

// create GraphQL server
const server = new ApolloServer({
  // must add schema
  typeDefs,
  resolvers: {
    // specify resolves
    Query,
    Mutation,
    Category,
    Product,
  },
  context: {
    db
  },
})

server.listen().then(({ url }) => {
  console.log(`Server is ready at ${url}`)
})
