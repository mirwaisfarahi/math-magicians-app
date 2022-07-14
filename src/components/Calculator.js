import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container className="calculator">
        <Row className="display-box">
          <Col className="bg-secondary border result">0</Col>
        </Row>
        <Row>
          <Col className="light column border">AC</Col>
          <Col className="light column border">+/-</Col>
          <Col className="light column border">%</Col>
          <Col className="orange column border">/</Col>
        </Row>
        <Row>
          <Col className="light column border">7</Col>
          <Col className="light column border">8</Col>
          <Col className="light column border">9</Col>
          <Col className="orange column border">*</Col>
        </Row>
        <Row>
          <Col className="light column border">4</Col>
          <Col className="light column border">5</Col>
          <Col className="light column border">6</Col>
          <Col className="orange column border">-</Col>
        </Row>
        <Row>
          <Col className="light column border">1</Col>
          <Col className="light column border">2</Col>
          <Col className="light column border">3</Col>
          <Col className="orange column border">+</Col>
        </Row>
        <Row>
          <Col className="light column border">0</Col>
          <Col className="light">
            <Row>
              <Col className="light column border">.</Col>
              <Col className="orange column border">=</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Calculator;
