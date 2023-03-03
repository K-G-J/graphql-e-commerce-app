const { categories, products } = require('../db')

exports.Query = {
  // name and resolver method
  hello: (parent, args, context) => 'World',
  products: (parent, args, context) => products,
  product: (parent, args, context) => {
    const { id } = args // args = variables passed with query
    return products.find((product) => product.id === id)
  },
  categories: (parent, args, context) => categories,
  category: (parent, args, context) => {
    const { id } = args
    return categories.find((category) => category.id === id)
  },
}
