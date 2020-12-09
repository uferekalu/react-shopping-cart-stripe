import React from 'react';
import CartItem from './CartItem';
import './Cart.css';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';

function Cart ({  itemsInCart, totalCost, onClearCartClick, onHandleCheckout, onRemoveProduct }) {
    
    return (
        <Container className="product">
            <Row className="cart-heading-row">
                <Col xs={6} md={6} className="cart-heading">
                    <h3 className="cart-heading-text">My Bag</h3>
                </Col>
                <Col xs={6} md={6} className="cart-heading">
                    <h3 className="cart-heading-text">Total: {itemsInCart.length} items</h3>
                </Col>
            </Row>
            {itemsInCart.length > 0 ? (
                <Row className="cart-items">
                    {itemsInCart.map(item => (
                        <CartItem
                            key={item.id}
                            title={item.title}
                            image={item.image}
                            cost={item.price * item.quantity}
                            quantity={item.quantity}
                            onIncrease={() => (item.quantity++)}
                            onDecrease={() => (item.quantity > 1 ? item.quantity-- : item.quantity)}
                            onRemoveProduct={onRemoveProduct}
                        />
                    ))}
                        <Col xs={6} md={6}>
                            <h3 className="cart-total">TOTAL</h3>
                        </Col>
                        <Col xs={6} md={6}>
                            <h3 className="cart-total">${totalCost.toFixed(2)}</h3>
                        </Col>
                        <Col xs={6} md={6}>
                            <button type="button" className="btn btn-danger mb-2 mt-2 btn-sm clear" onClick={onClearCartClick}>CLEAR</button>
                        </Col>
                        <Col xs={6} md={6}>
                            <button type="button" className="btn btn-primary mb-2 mt-2 checkout" onClick={onHandleCheckout}>CHECKOUT</button>
                        </Col>
                </Row>
                ) : (
                    <div>Your cart is empty</div>
                )
            }
        </Container>

    )
}

export default Cart;