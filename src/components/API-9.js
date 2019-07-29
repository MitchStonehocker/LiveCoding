// src/components/API-9.js

import React from 'react'
import { Card, Form, Col, Container } from 'react-bootstrap'

import { wcBaseUrl, wcEndPoint } from '../utils'

const API9 = () => {
  const wcFunction = 'equation'

  return (
    <Card>
      <Card.Header>Session 2, API-9) Rasterize an Equation</Card.Header>
      <Card.Body>
        <Card.Title>Gauge Image</Card.Title>
        <Card.Text>Enter an integer between 0 and 100.</Card.Text>
        <p>
          API end-point is:
          {true ? `https://.../${wcFunction}` : 'Make selection.'}
        </p>
        <hr />
        <Form>
          <Form.Row>
            <Col xs='auto'>
              <p>Equation Image</p>
            </Col>

            <Container>
              <Col sm={{ span: 2, offset: 0 }}>
                <img
                  src={true ? `${wcBaseUrl}${wcEndPoint}${wcFunction}` : null}
                  alt='equation'
                />
              </Col>
            </Container>
          </Form.Row>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default API9
