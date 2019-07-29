// src/components/API-10.js

import React, { useState } from 'react'
import { Card, Form, Col, Container } from 'react-bootstrap'

import { wcBaseUrl, wcEndPoint } from '../utils'

const API10 = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [gaugeIn, setGaugeIn] = useState('')

  const wcFunction = 'gauge1'

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <Card>
      <Card.Header>Session 2, API-10) Gauge image part 1</Card.Header>
      <Card.Body>
        <Card.Title>Gauge Image</Card.Title>
        <Card.Text>Enter an integer between 0 and 100.</Card.Text>
        <p>
          API end-point is:
          {gaugeIn
            ? `https://.../${wcFunction}?gaugeIn=${gaugeIn}`
            : 'Make selection.'}
        </p>
        <hr />
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Col xs='auto'>
              <p>Input</p>
            </Col>
            <Col sm={{ span: 2, offset: 0 }}>
              <Form.Control
                className='input'
                type='text'
                placeholder='enter integer'
                name='gaugeIn'
                size='sm'
                value={gaugeIn}
                onChange={event => setGaugeIn(event.target.value)}
              />
            </Col>

            <Container>
              <Col sm={{ span: 2, offset: 0 }}>
                <img
                  src={
                    gaugeIn
                      ? `${wcBaseUrl}${wcEndPoint}${wcFunction}?gaugeIn=${gaugeIn}`
                      : null
                  }
                  alt='gaugeimage'
                />
              </Col>
            </Container>
          </Form.Row>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default API10
