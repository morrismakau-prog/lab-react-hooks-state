import React from 'react'
import ProductCard from './ProductCard'

export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({ selectedCategory = 'all', onAddToCart }) => {

  const visibleProducts = sampleProducts.filter(
    (product) =>
      selectedCategory === 'all' || product.category === selectedCategory
  )

  return (
    <div>
      <h2>Available Products</h2>

      {visibleProducts.length === 0 ? (
        <p>No products available.</p>
      ) : (
        visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))
      )}
    </div>
  )
}

export default ProductList