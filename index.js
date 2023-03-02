import { ApolloServer, gql } from 'apollo-server'

// scalar types: String, Int, Float, Boolean, ID!

// create schema for GraphQL
const typeDefs = gql`
  # define query
  type Query {
    # Query name: return type
    hello: String! # use ! make non-nullable
    numberOfAnimals: Int
    price: Float
    isCool: Boolean
  }
`
// define resolves for queries and mutations
const resolvers = {
  // type
  Query: {
    // name and resolver method
    hello: () => {
      return "World!!!!!"
    },
    numberOfAnimals: () => {
      return 55
    },
    price: () => {
      return 234234.21312
    },
    isCool: () => {
      return false
    }
  }
}


// create GraphQL server
const server = new ApolloServer({
  // must add schema
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`Server is ready at ${url}`)
})
