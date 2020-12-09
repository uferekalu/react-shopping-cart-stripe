import React, { useState, useEffect } from 'react';
import Product from './Product';
import './Product.css';
import { Container, Row } from 'react-bootstrap';
import Cart from '../Cart/Cart';

function ProductList () {
    const [product, setProduct] = useState([]);
    const [itemsInCart, setItemsInCart] = useState([]);

    // let localCart = localStorage.getItem("itemsInCart");

    useEffect(() => {
        // localCart = JSON.parse(localCart);
        // if (localCart) setItemsInCart(localCart)

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

    

    // const handleAddToCartClick = (item) => {
    //     //create a copy of our cart state, avoid overwriting existing state
    //     let cartCopy = [...itemsInCart];

    //     //assuming we have an ID field in our item
    //     let {ID} = item;

    //     //look for item in cart array
    //     let existingItem = cartCopy.find(cartItem => cartItem.ID === ID);

    //     //if item already exists
    //     if(existingItem) {
    //         existingItem.quantity += item.quantity //update item
    //     } else {
    //         //if item doesn't exist, simply add it
    //         cartCopy.push(item)
    //     }

    //     //update app state
    //     setItemsInCart(cartCopy)

    //     //make cart a string and store in local space
    //     let stringCart = JSON.stringify(cartCopy);
    //     localStorage.setItem("itemsInCart", stringCart)
    // }

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

        let stringCart = JSON.stringify(itemsInCart);
        localStorage.setItem("itemsInCart", stringCart)
      };


      const totalCost = itemsInCart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      
      const itemCount = itemsInCart.reduce(
        (acc, item) => acc + item.quantity,
        0
      );

    const handleRemoveItem = id => {
        console.log("you clicked me");
        let cartCopy = [...itemsInCart]

        cartCopy = cartCopy.filter(item => item.id !== id)

        setItemsInCart(cartCopy);
    }

    return (
        <Container className="product">
            <Cart 
                itemsInCart={itemsInCart} 
                totalCost={totalCost} 
                itemCount={itemCount}
                onRemoveProduct={() => handleRemoveItem(itemsInCart.map(item => item.id))}
            />

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