import React, { useState, useEffect } from 'react';
import Product from './Product';
import './Product.css';
import { Container, Row } from 'react-bootstrap';
import Cart from '../Cart/Cart';

function ProductList () {
    const [product, setProduct] = useState([]);
    const [itemsInCart, setItemsInCart] = useState([]);

    useEffect(() => {
        let mounted = true;
        fetch('https://fakestoreapi.com/products/')
            .then(response => response.json())
            .then(response => {
                if(mounted) {
                    setProduct(response)
                }
            })
            return () => mounted = false;
    }, []);

    const handleAddToCartClick = id => {
        setItemsInCart(itemsInCart => {
          const itemInCart = itemsInCart.find(item => item.id === id);
    
          // if item is already in cart, update the quantity
          if (itemInCart) {
            return itemsInCart.map(item => {
              if (item.id !== id) return item;
              return { ...itemInCart, quantity: item.quantity + 1 };
            });
          }
    
          // otherwise, add new item to cart
          const item = product.find(item => item.id === id);
          return [...itemsInCart, { ...item, quantity: 1 }];
        });
      };
    
      const totalCost = itemsInCart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    

    return (
        <Container className="product">
            <Cart itemsInCart={itemsInCart} totalCost={totalCost} />

            <h3 className="product-list-caption mt-5">Product List</h3>
            <h4 className="product-list-text">There are {product.length} Products</h4>
            <Row className="product-detail">
                {product.map(product => (
                    <Product 
                        key={product.id}
                        image={product.image}
                        price={product.price}
                        category={product.category}
                        product={product}
                        onAddToCartClick={() => handleAddToCartClick(product.id)}
                    />
                    ))
                }
            </Row>
        </Container>
    )
}

export default ProductList;