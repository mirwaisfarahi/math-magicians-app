import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
// eslint-disable-next-line
class Calculator extends Component {

  render() {
    return (
      <Container className="calculator">
        <Row className="display-box">
          <Col className="bg-secondary border result">0</Col>
        </Row>
        <Row>
          <Col className="bg-light column border">AC</Col>
          <Col className="bg-light column border">+/-</Col>
          <Col className="bg-light column border">%</Col>
          <Col className="bg-light column border">/</Col>
        </Row>
        <Row>
          <Col className="bg-light column border">7</Col>
          <Col className="bg-light column border">8</Col>
          <Col className="bg-light column border">9</Col>
          <Col className="bg-warning column border">*</Col>
        </Row>
        <Row>
          <Col className="bg-light column border">4</Col>
          <Col className="bg-light column border">5</Col>
          <Col className="bg-light column border">6</Col>
          <Col className="bg-warning column border">-</Col>
        </Row>
        <Row>
          <Col className="bg-light column border">1</Col>
          <Col className="bg-light column border">2</Col>
          <Col className="bg-light column border">3</Col>
          <Col className="bg-warning column border">+</Col>
        </Row>
        <Row>
          <Col className="bg-light column border">0</Col>
          <Col className="bg-light">
            <Row>
              <Col className="bg-light column border">.</Col>
              <Col className="bg-warning column border">=</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Calculator;
