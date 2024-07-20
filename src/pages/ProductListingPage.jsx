import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import fiddleLeafFig from '../images/fiddle-leaf-fig.webp';
import bambooPlam from '../images/bamboo-palm.jpg';
import ficus from '../images/ficus-audrey.jpeg';
import echeveria from '../images/green-echeveria.webp';
import snakePlant from '../images/snake-plant.jpg';
import aleoVera from '../images/aloe-vera.jpg';
import monstera from '../images/monstera.webp';
import spiderPlant from '../images/spider-plant.webp';
import peaceLily from '../images/peace-lily.jpg';
import phoenix from '../images/phoenix.jpg';
import hypoestes from '../images/hypoestes.webp';
import chrysanthemum from '../images/chrysanthemum.webp'
import ivy from'../images/ivy.jpg'
import money from'../images/money-plant.webp'
import daisy from '../images/daisy.jpg'

import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/style.css';

const products = [
  { id: 1, name: 'Fiddle Leaf Fig', price: 300, category: 'Trees', thumbnail: fiddleLeafFig },
  { id: 2, name: 'Snake Plant', price: 250, category: 'Succulents', thumbnail: snakePlant },
  { id: 3, name: 'Monstera', price: 200, category: 'Tropical', thumbnail: monstera },
  { id: 4, name: 'Spider Plant', price: 150, category: 'Air-purifying', thumbnail: spiderPlant },
  { id: 5, name: 'Aloe Vera', price: 100, category: 'Succulents', thumbnail: aleoVera },
  { id: 6, name: 'Peace Lily', price: 220, category: 'Flowering', thumbnail: peaceLily },
  { id: 7, name: 'Ficus Audrey', price: 350, category: 'Trees', thumbnail: ficus },
  { id: 8, name: 'Bamboo Palm', price: 200, category: 'Trees', thumbnail: bambooPlam },
  { id: 9, name: 'Green Echeveria', price: 170, category: 'Succulents', thumbnail: echeveria },
  { id: 10, name: 'Phoenix', price: 1700, category: 'Tropical', thumbnail: phoenix },
  { id: 11, name: 'Hypoestes', price: 700, category: 'Tropical', thumbnail: hypoestes },
  { id: 12, name: 'Chrysanthemum', price: 500, category: 'Flowering', thumbnail: chrysanthemum },
  { id: 13, name: 'English Ivy', price: 700, category: 'Air-purifying', thumbnail: ivy },
  { id: 14, name: 'Money Plant', price: 150, category: 'Air-purifying', thumbnail: money },
  { id: 15, name: 'Daisy Plant', price: 450, category: 'Flowering', thumbnail: daisy }
];

const ProductListingPage = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  const headingStyle = { color: 'green', fontWeight: 'bold' }; 

  return (
    <Container className="product-listing mt-4 mb-4" style={{paddingTop : '70px'}}>
      {['Trees', 'Succulents', 'Tropical', 'Air-purifying', 'Flowering'].map(category => (
        <div key={category} className="category mb-5">
          <h2 className="mb-4" style={headingStyle}>
            {category}
          </h2>
          <Row>
            {products.filter(product => product.category === category).map(product => (
              <Col key={product.id} md={4} className="d-flex align-items-stretch mb-4">
                <Card className="flex-fill d-flex flex-column">
                  <Card.Img 
                    variant="top" 
                    src={product.thumbnail} 
                    alt={product.name} 
                    className="card-img-top"
                    style={{ 
                      objectFit: 'cover', 
                      height: '350px',
                    }} 
                  />
                  <Card.Body className="d-flex flex-column flex-grow-1">
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text className="flex-grow-1"> &#8377; {product.price}</Card.Text>
                    <Button 
                      variant="primary" 
                      onClick={() => handleAddToCart(product)}
                      className="mt-2"
                    >
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default ProductListingPage;
