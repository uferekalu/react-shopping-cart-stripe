import React, { useState, useEffect } from 'react';
import Product from './Product';
import './Product.css';
import { Container, Row } from 'react-bootstrap';

function ProductList () {
    const [product, setProduct] = useState([]);

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

    return (
        <Container className="product">
            <h3 className="product-list-caption">Product List</h3>
            <h4 className="product-list-text">There are {product.length} Products</h4>
            <Row className="product-detail">
                {product.map(product => (
                    <Product 
                        key={product.id}
                        image={product.image}
                        price={product.price}
                        category={product.category}
                        product={product}
                    />
                    ))
                }
            </Row>
        </Container>
    )
}

export default ProductList;