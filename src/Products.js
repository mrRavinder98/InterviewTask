import { useState, useEffect } from 'react'

const Products = (props) => {

    const [products, setProducts] = useState([
        { id: 1, name: 'Product-1', price: 100, quantity : 0 },
        { id: 2, name: 'Product-2', price: 200, quantity : 0 },
        { id: 3, name: 'Product-3', price: 300, quantity : 0 },
    ])

    const [quantityCounter, setQuantityCounter] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
    }, [quantityCounter])

    const updateQuantity = (type, id) => {
        let cartTotalTemp = 0
        const productsLength = products.length
        const updatableProducts = products
        for (let index = 0; index < productsLength; index++) {
            if (updatableProducts[index].id === id) {
                if (type === '-') {
                    if (updatableProducts[index].quantity < 1) {
                        alert('error')
                    } else {
                        updatableProducts[index].quantity -= 1
                        cartTotalTemp = cartTotal - updatableProducts[index].price
                        setCartTotal(cartTotalTemp)
                    }
                } else {
                    updatableProducts[index].quantity += 1
                    cartTotalTemp = cartTotal + updatableProducts[index].price
                    setCartTotal(cartTotalTemp)
                }
            }
        }
        setQuantityCounter(quantityCounter+1)
        setProducts(updatableProducts)
        passtoParent(cartTotalTemp)
    }

    const passtoParent = (cartTotal) => {
        props.getProductsInParent(products, quantityCounter, cartTotal)
    }

    return (
        <div className='product-model'>
            <h3>Products</h3>
            {
                products.length > 0 ? products.map(product => {
                    return (
                        
                        <div className='product'>
                            <div className='product-detail'>{ product.name }</div>
                            <div>{ product.price }</div>
                            <div className='incButton'>
                                <button onClick={updateQuantity.bind(this, '-', product.id)}>-</button>
                                <input type="text" name='quantity' readOnly value={product.quantity} />
                                <button onClick={updateQuantity.bind(this, '+', product.id)}>+</button>
                            </div>
                        </div>
                        
                    )
                }) : ''
            }
        </div>
    );
}

export default Products;
