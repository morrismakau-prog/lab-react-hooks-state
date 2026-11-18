import React, { useState } from 'react'
import ProductCard from './ProductCard'

export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(sampleProducts.map((p) => p.category))]

  const visibleProducts = sampleProducts.filter(
    (product) =>
      selectedCategory === 'All' || product.category === selectedCategory
  )

  return (
    <div>
      <h2>Available Products</h2>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {visibleProducts.length === 0 ? (
        <p>No products available.</p>
      ) : (
        visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  )
}

export default ProductList