import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: '',
    next: null,
    operation: null,
  });

  const operationHandler = (e) => {
    const pressedBtn = e.target.innerText;
    const newState = calculate(state, pressedBtn);
    setState(newState);
  };

  const { next, total, operation } = state;

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
        <Col className="light column border" onClick={operationHandler}>AC</Col>
        <Col className="light column border" onClick={operationHandler}>+/-</Col>
        <Col className="light column border" onClick={operationHandler}>%</Col>
        <Col className="orange column border" onClick={operationHandler}>÷</Col>
      </Row>
      <Row>
        <Col className="light column border" onClick={operationHandler}>7</Col>
        <Col className="light column border" onClick={operationHandler}>8</Col>
        <Col className="light column border" onClick={operationHandler}>9</Col>
        <Col className="orange column border" onClick={operationHandler}>x</Col>
      </Row>
      <Row>
        <Col className="light column border" onClick={operationHandler}>4</Col>
        <Col className="light column border" onClick={operationHandler}>5</Col>
        <Col className="light column border" onClick={operationHandler}>6</Col>
        <Col className="orange column border" onClick={operationHandler}>-</Col>
      </Row>
      <Row>
        <Col className="light column border" onClick={operationHandler}>1</Col>
        <Col className="light column border" onClick={operationHandler}>2</Col>
        <Col className="light column border" onClick={operationHandler}>3</Col>
        <Col className="orange column border" onClick={operationHandler}>+</Col>
      </Row>
      <Row>
        <Col className="light column border" onClick={operationHandler}>0</Col>
        <Col className="light">
          <Row>
            <Col className="light column border" onClick={operationHandler}>.</Col>
            <Col className="orange column border" onClick={operationHandler}>=</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Calculator;
