import { ApolloServer, gql } from 'apollo-server'

// create schema for GraphQL
const typeDefs = gql`
  # define query
  type Query {
    # Query name: return type
    hello: String # scalar type
  }
`
// define resolves for queries and mutations
const resolvers = {
  // type
  Query: {
    // name and resolver method
    hello: () => {
      return "World!!!!!"
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
