import { useState } from 'react'
import Products from './Products'
import Cart from './Cart'

function App() {

  const [ products, setProducts ] = useState([])
  const [ counter, setCounter] = useState(0)
  const [ cartTotal, setCartTotal] = useState(0)

  const getProductsInParent = (products, counter, cartTotal) => {
    setProducts(products)    
    setCounter(counter)
    setCartTotal(cartTotal)
  }

  return (
    <div className='model'>
      <Products getProductsInParent={getProductsInParent} />
      <Cart products={products} counter={counter} cartTotal={cartTotal} />
    </div>
  );
}

export default App;
