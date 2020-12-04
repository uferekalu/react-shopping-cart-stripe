import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

function DetailPage ({ onAddToCartClick, title, image, category, description, price }) {

    return (
        <Container className="product">
            <Link to={`/`}>Go back to product list</Link>
            <div className="Home">
                <div className="lander">
                    <p className="detail-title">{title}</p>
                    <img 
                        src={image} 
                        className="img-fluid" 
                        alt={category} 
                        width="300px"
                        height="300px"
                        className="detail-img"
                    />
                    <hr />

                    <p className="detail-desc">{description}</p>
                    <div>
                        <p><button className="price">PRICE:</button> ${price}</p>
                    </div>
                    <div>
                        <button 
                            onClick={onAddToCartClick}
                            className="cart-button-detail"
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    )
        
    
}

export default DetailPage;