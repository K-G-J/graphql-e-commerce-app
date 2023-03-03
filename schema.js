const { gql } = require('apollo-server')
// create schema for GraphQL
exports.typeDefs = gql`
  # define query
  type Query {
    # Query name: return type
    hello: String
    products(filter: ProductsFilterInput): [Product!]!
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
    reviews: [Review!]!
  }
  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilterInput): [Product!]!
  }
  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }
  input ProductsFilterInput {
    onSale: Boolean
  }
`
