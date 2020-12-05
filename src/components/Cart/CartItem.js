import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function CartItem ({ title, image, cost, quantity, onDecrease, onIncrease, onRemoveProduct,  }) {
    return (
        <>
                <Col xs={6} md={6} className="mb-5">
                    <img 
                        src={image} 
                        alt={title}
                        style={{maxHeight: "200px", maxWidth: "200px"}} 
                        className="img-fluid d-block cart-image"
                    />
            
                </Col>
                <Col xs={6} md={6} className="mb-5">
                    <h3 className="cart-items-title">{title}</h3>
                    <h3 className="cart-items-price">${cost.toFixed(2)}</h3>
                    <Button
                        onClick={onDecrease}
                        className="cart-items-decrease" 
                    > - 
                    </Button> 
                    <span className="cart-items-quantity">{quantity} </span>
                    <Button
                        onClick={onIncrease}
                        className="cart-items-increase"
                    > + 
                    </Button>
                    <Button
                        onClick={onRemoveProduct}
                        className="thrash"
                    >
                        <i className="fas fa-trash-alt mt-1"></i>
                    </Button>      
                </Col>

</>
    )
}

export default CartItem;