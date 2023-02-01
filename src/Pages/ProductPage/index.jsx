import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./ProductPage.css";

const ProductPage = () => {
  return (
    <Container className="my-5 text-center ">
      <h2>Our Products</h2>
      <Row
        className="justify-content-center align-items-center mx auto"
        style={{ width: "1000px", gap: "30px", margin: "0 auto" }}
      >
        <Col sm={8} md={6} lg={4} className="my-3">
          <Card className="product-card">
            <Card.Img variant="top" src="product1.jpg" alt="Product 1" />
            <Card.Body>
              <Card.Title>Product 1</Card.Title>
              <Card.Text>Description of product 1.</Card.Text>
              <Button variant="primary" href="#">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={8} md={6} lg={4} className="my-3">
          <Card className="product-card">
            <Card.Img variant="top" src="product2.jpg" alt="Product 2" />
            <Card.Body>
              <Card.Title>Product 2</Card.Title>
              <Card.Text>Description of product 2.</Card.Text>
              <Button variant="primary" href="#">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={8} md={6} lg={4} className="my-3">
          <Card className="product-card">
            <Card.Img variant="top" src="product3.jpg" alt="Product 3" />
            <Card.Body>
              <Card.Title>Product 3</Card.Title>
              <Card.Text>Description of product 3.</Card.Text>
              <Button variant="primary" href="#">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
