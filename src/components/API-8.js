// src/components/API-8.js

import React, { useState } from 'react'
import { Card, Form, Col, Container } from 'react-bootstrap'

import { wcBaseUrl, wcEndPoint } from '../utils'

const API8 = () => {
  const [a, setA] = useState(-5)
  const [b, setB] = useState(5)

  const wcFunction = 'sin-png'

  return (
    <Card>
      <Card.Header>Session 2, API-8) Images - basics</Card.Header>
      <Card.Body>
        <Card.Title>Working with Images and SVG</Card.Title>
        <Card.Text>
          Enter integers to establish the min and max of the sampling range, a
          and b. Click to resample.
        </Card.Text>
        <p>
          API end-point is:
          {a && b
            ? ` https://.../${wcFunction}?a=${a}&b=${b}`
            : ' Enter 2 integers. Any order.'}
        </p>
        <hr />
        <Form>
          <Form.Row>
            <Col xs='auto'>
              <p>From</p>
            </Col>
            <Col sm={{ span: 2, offset: 0 }}>
              <Form.Control
                className='input'
                type='text'
                placeholder='min'
                name='a'
                size='sm'
                value={a}
                onChange={event => setA(event.target.value)}
              />
            </Col>
            <Col sm={{ span: 0, offset: 0 }}>
              <p> to </p>
            </Col>
            <Col sm={{ span: 2, offset: 0 }}>
              <Form.Control
                className='input'
                type='text'
                placeholder='max'
                name='b'
                size='sm'
                value={b}
                onChange={event => setB(event.target.value)}
              />
            </Col>
            <Container>
              <Col sm={{ span: 2, offset: 0 }}>
                <img
                  src={
                    a && b
                      ? `${wcBaseUrl}${wcEndPoint}${wcFunction}?a=${a}&b=${b}`
                      : null
                  }
                  alt='sin[]'
                />
              </Col>
              <Col sm={{ span: 2, offset: 0 }}>
                <img
                  src={
                    a && b
                      ? `${wcBaseUrl}${wcEndPoint}${'sin-jpg'}?a=${a}&b=${b}`
                      : null
                  }
                  alt='sin[]'
                />
              </Col>

              <Col sm={{ span: 2, offset: 0 }}>
                <img
                  src={
                    a && b
                      ? `${wcBaseUrl}${wcEndPoint}${'sin-gif'}?a=${a}&b=${b}`
                      : null
                  }
                  alt='sin[]'
                />
              </Col>
              <Col sm={{ span: 2, offset: 0 }}>
                <img
                  src={
                    a && b
                      ? `${wcBaseUrl}${wcEndPoint}${'sin-svg'}?a=${a}&b=${b}`
                      : null
                  }
                  alt='sin[]'
                />
              </Col>
            </Container>
          </Form.Row>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default API8
