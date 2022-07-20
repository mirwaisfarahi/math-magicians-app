import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: null,
      operation: null,

    };
  }

  operationHandler = (x) => {
    this.setState((s) => calculate(s, x));
  };

  render() {
    const { total, operation, next } = this.state;

    return (
      <Container className="calculator">
        <Row className="display-box">
          <Col className="bg-secondary border result">
            <span>
              {' '}
              {total}
              {' '}
            </span>
            <span>
              {' '}
              {operation}
              {' '}
            </span>
            <span>
              {' '}
              {next}
              {' '}
            </span>
          </Col>
        </Row>
        <Row>
          <Col className="light column border" onClick={() => this.operationHandler('AC')}>AC</Col>
          <Col className="light column border" onClick={() => this.operationHandler('+/-')}>+/-</Col>
          <Col className="light column border" onClick={() => this.operationHandler('%')}>%</Col>
          <Col className="orange column border" onClick={() => this.operationHandler('÷')}>÷</Col>
        </Row>
        <Row>
          <Col className="light column border" onClick={() => this.operationHandler('7')}>7</Col>
          <Col className="light column border" onClick={() => this.operationHandler('8')}>8</Col>
          <Col className="light column border" onClick={() => this.operationHandler('9')}>9</Col>
          <Col className="orange column border" onClick={() => this.operationHandler('x')}>x</Col>
        </Row>
        <Row>
          <Col className="light column border" onClick={() => this.operationHandler('4')}>4</Col>
          <Col className="light column border" onClick={() => this.operationHandler('5')}>5</Col>
          <Col className="light column border" onClick={() => this.operationHandler('6')}>6</Col>
          <Col className="orange column border" onClick={() => this.operationHandler('-')}>-</Col>
        </Row>
        <Row>
          <Col className="light column border" onClick={() => this.operationHandler('1')}>1</Col>
          <Col className="light column border" onClick={() => this.operationHandler('2')}>2</Col>
          <Col className="light column border" onClick={() => this.operationHandler('3')}>3</Col>
          <Col className="orange column border" onClick={() => this.operationHandler('+')}>+</Col>
        </Row>
        <Row>
          <Col className="light column border" onClick={() => this.operationHandler('0')}>0</Col>
          <Col className="light">
            <Row>
              <Col className="light column border" onClick={() => this.operationHandler('.')}>.</Col>
              <Col className="orange column border" onClick={() => this.operationHandler('=')}>=</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Calculator;
