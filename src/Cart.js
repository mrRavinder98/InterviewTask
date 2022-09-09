import { useState, useEffect } from 'react'

const Cart = ({ products, counter, cartTotal }) => {

    useEffect(() => {

    }, [counter])



    return (
        <div className='cart-model'>
              <h3>Cart</h3>
            {
                products.length > 0 ? products.map(product => {
                    return (
                        <div className={product.quantity > 0 ? "cart" : ""}>
                            {
                                product.quantity > 0 ?
                                <div>
                                    { product.name } { product.quantity } { (parseInt(product.price)*parseInt(product.quantity)) }
                                </div> : ''
                            }
                        </div>
                    )
                }) : ''
            }
            <div className='cart'>Cart Total : Rs.{cartTotal}</div>
        </div>
    );
}

export default Cart;
