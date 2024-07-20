import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, deleteItem } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { BsCartX } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import '../styles/style.css';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <Container fluid className="cart-page" style={{ paddingTop: '70px' }}>
      <Row noGutters>
        <Col md={1}>
        </Col>
        <Col md={5} className="p-4">
          {cartItems.length === 0 ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
              <p style={{ color: 'GrayText', textAlign: 'center' }}>
                <BsCartX color='grey' size={50} /> Your cart is empty
              </p>
            </div>
          ) : (
            <div>
              <Row noGutters>
                {cartItems.map((item) => (
                  <Col md={12} key={item.id} className="mb-4 mt-4">
                    <Card className="h-100" style={{ height: '200px' }}>
                      <Row noGutters className="h-100">
                        <Col md={4} className="h-100">
                          <Card.Img src={item.thumbnail} alt={item.name} className="h-100" style={{ objectFit: 'cover' }} />
                        </Col>
                        <Col md={6} className="d-flex align-items-center">
                          <Card.Body className="d-flex flex-column justify-content-center text-center">
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>Price: &#8377; {item.price}</Card.Text>
                            <div className="d-flex justify-content-center mb-4">
                              <Button variant="warning" onClick={() => dispatch(removeItem(item.id))}>-</Button>
                              <span className="mx-2">{item.quantity}</span>
                              <Button variant="success" onClick={() => dispatch(addItem(item))}>+</Button>
                            </div>
                          </Card.Body>
                        </Col>
                        <Col md={2} className="d-flex flex-column justify-content-center align-items-center">
                          <Button variant="danger" onClick={() => dispatch(deleteItem(item.id))}><RiDeleteBin6Line size={20} /></Button>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          )}
        </Col>
        <Col md={6} className="d-flex justify-content-center align-items-center p-4">
          <Card className="text-center p-4" style={{ width: '100%', maxWidth: '400px' }}>
            <Card.Header>Total Summary</Card.Header>
            <Card.Body>
              <h5>Total Quantity: {totalQuantity}</h5>
              <h5>Total Price: &#8377; {totalPrice}</h5>
              <div className="d-flex justify-content-center mt-3">
                <Button variant="success" className="mr-3">Checkout</Button>
                <Link to="/products" className="btn btn-primary ml-3">Continue Shopping</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
