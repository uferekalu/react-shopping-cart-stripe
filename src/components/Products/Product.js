import React from 'react';
import './Product.css';
import { Row, Col, Button, Badge } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Product({ onAddToCartClick, price, category, image, product }) {
    return (
        <Col xs={6} md={4} lg={3} className="product-list">
            <Col xs={12} md={12} className="product-img">
            <Link to={`/product/${product.id}`}>
                <img
                    src={image}
                    alt={category}
                    className="img-fluid prod-img d-block"
                    style={{margin: "0 auto"}}
                    width="150px"
                    height="150px"
                />
            </Link>
            </Col>
            <Row className="other-product-detail">
                <Col xs={6} md={6}>
                    <h3>{category}</h3>
                </Col>
                <Col xs={6} md={6}>
                    <h3><Badge color="success">PRICE:</Badge> ${price}</h3>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12}>
                    <Button
                        onClick={onAddToCartClick}
                        className="cart-button"
                    >
                    ADD TO CART    
                    </Button>
                </Col>
            </Row>
        </Col>
    )
}

export default Product;