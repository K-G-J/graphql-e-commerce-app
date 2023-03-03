const { v4: uuid } = require('uuid')

exports.Mutation = {
  // Adding
  addCategory: (parent, { input }, { db }) => {
    const { name } = input
    const newCategory = {
      id: uuid(),
      name,
    }
    db.categories.push(newCategory)

    return newCategory
  },
  addProduct: (parent, { input }, { db }) => {
    const {
      name,
      image,
      price,
      onSale,
      quantity,
      categoryId,
      description,
    } = input
    const newProduct = {
      id: uuid(),
      name,
      image,
      price,
      onSale,
      quantity,
      categoryId,
      description,
    }
    db.products.push(newProduct)

    return newProduct
  },
  addReview: (parent, { input }, { db }) => {
    const { date, title, comment, rating, productId } = input
    const newReview = {
      id: uuid(),
      date,
      title,
      comment,
      rating,
      productId,
    }
    db.reviews.push(newReview)

    return newReview
  },
  // Deleting
  deleteCategory: (parent, { id }, { db }) => {
    const categoryIds = db.categories.map((category) => {
      return category.id
    })
    // return false is category not in db
    if (!categoryIds.includes(id)) return false
    db.categories = db.categories.filter((category) => category.id !== id)
    // change categoryId of deleted cateogry in products to null
    db.products = db.products.map((product) => {
      if (product.categoryId == id)
        return {
          ...product,
          categoryId: null,
        }
      else return product
    })
    return true
  },
  deleteProduct: (parent, { id }, { db }) => {
    const productIds = db.products.map((product) => {
      return product.id
    })
    // return false is product not in db
    if (!productIds.includes(id)) return false
    db.products = db.products.filter((product) => product.id !== id)
    // cascade deletion to reviews
    db.reviews = db.reviews.filter((review) => review.productId !== id)
    return true
  },
  deleteReview: (parent, { id }, { db }) => {
    const reviewIds = db.reviews.map((review) => {
      return review.id
    })
    // return false is review not in db
    if (!reviewIds.includes(id)) return false
    db.reviews = db.reviews.filter((review) => review.id !== id)
    return true
  },
  // Updating
  updateCategory: (parent, { id, input }, { db }) => {
    const index = db.categories.findIndex((category) => category.id === id)
    //return null if id is not in db
    if(index === -1) return null
    db.categories[index] = {
      ...db.categories[index],
      ...input,
    }
    return db.categories[index]
  },
  updateProduct: (parent, { id, input }, { db }) => {
    const index = db.products.findIndex((product) => product.id === id)
    if(index === -1) return null
    db.products[index] = {
      ...db.products[index],
      ...input,
    }
    return db.products[index]
  },
  updateReview: (parent, { id, input }, { db }) => {
    const index = db.reviews.findIndex((review) => review.id === id)
    if(index === -1) return null
    db.reviews[index] = {
      ...db.reviews[index],
      ...input,
    }
    return db.reviews[index]
  },
}
