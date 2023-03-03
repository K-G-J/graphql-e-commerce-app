const { gql } = require('apollo-server')
// create schema for GraphQL
exports.typeDefs = gql`
  # define query
  type Query {
    # Query name: return type
    hello: String
    products: [Product!]!
    product(id: ID!): Product # args = passed in variable with query
    categories: [Category!]!
    category(id: ID!): Category
  }
  # define object type
  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
    category: Category
  }
  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }
`
