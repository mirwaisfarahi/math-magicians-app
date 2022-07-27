import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import math from '../images/math.png';

const Home = () => (
  <div className="home">
    <h3 className="heading">Welcome to our Page!</h3>
    <Container>
      <Row>
        <Col xs="8">
          <p>
            &quot;Mathematics is the Queen and the Servant of the Sciences.&quot; I think this is
            a great way to think of the scope and power of mathematical thinking.
            To me, mathematics underlies the sciences, and that statement is
            only becoming more true as time passes.
          </p>
        </Col>
        <Col className="img">
          <img width="90%" xs="4" src={math} alt="Math" />
        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;
