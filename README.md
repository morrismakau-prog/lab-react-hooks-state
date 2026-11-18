# Shopping App

A grocery shopping app built with React and the `useState` hook to practice
managing state and handling events. It has a dark mode toggle, a category
filter, and an add-to-cart feature.

## Features

- **Dark mode toggle:** a button that switches between light and dark mode.
  The button text changes between "Toggle Dark Mode" and "Toggle Light Mode".
- **Category filter:** a dropdown that shows only products in the selected
  category. If no products match, "No products available." is shown.
- **Add to cart:** each product has an "Add to Cart" button. Added items appear
  in the cart as, for example, "Apple is in your cart."
- **Cart total (bonus):** the cart shows how many items have been added.

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the URL shown in the terminal (usually http://localhost:5173).

To run the tests:

```bash
npm test
```

## Component Tree

```
App
├── DarkModeToggle
├── ProductList
│   └── ProductCard (one per visible product)
└── Cart
```

## Components

| Component | Description | Props | State | Connected to |
|-----------|-------------|-------|-------|--------------|
| **App** | Root component. Holds the cart and selected category, renders the category dropdown, and passes data and handlers to its children. | none | `cart`, `selectedCategory` | Renders DarkModeToggle, ProductList and Cart |
| **DarkModeToggle** | Button that switches between light and dark mode by adding or removing a `dark` class on the page. | none | `isDarkMode` | Child of App |
| **ProductList** | Filters the sample products by the selected category and renders a ProductCard for each. Shows "No products available." when nothing matches. | `selectedCategory`, `onAddToCart` | none | Child of App; parent of ProductCard |
| **ProductCard** | Displays one product's name, price and stock status, with an "Add to Cart" button. | `product`, `onAddToCart` | none | Child of ProductList |
| **Cart** | Lists the items in the cart and the cart total. | `items` | none | Child of App |

## Data Flow

- `App` owns the `cart` and `selectedCategory` state.
- The dropdown in `App` updates `selectedCategory`, which is passed to `ProductList`.
- Clicking "Add to Cart" in a `ProductCard` calls `onAddToCart`, which was passed
  down from `App` through `ProductList`, and updates `cart`.
- `App` passes `cart` to `Cart` as the `items` prop.

## Built With

- React (`useState`, `useEffect`)
- Vite
- Jest and React Testing Library