// src/components/API-11.js

import React, { useState } from 'react'
import { Card, Form, Col, Container, Button } from 'react-bootstrap'

import { wcBaseUrl, wcEndPoint } from '../utils'

const API11 = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [reading, setReading] = useState('')
  const [rows, setRows] = useState(5)
  const [apiURL, setApiURL] = useState(5)

  const wcFunction = 'gauge-grid'
  const bpW = 72 * 7.5
  const h = 11
  const w = 40

  const handleSubmit = event => {
    event.preventDefault()
    setIsLoading(true)
    setApiURL(
      `${wcBaseUrl}${wcEndPoint}${wcFunction}?reading=${reading}&rows=${rows}`
    )
    setIsLoading(false)
  }

  return (
    <Card>
      <Card.Header>Session 3, API-11) Combined Grids & Images</Card.Header>
      <Card.Body>
        <Card.Title>Grids & Images</Card.Title>
        <Card.Text>text here...</Card.Text>
        <p>
          API end-point is:
          {reading && rows
            ? ` https://.../${wcFunction}?reading=${reading}&rows=${rows}`
            : ' Enter current reading...'}
        </p>
        <hr />
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Col sm={{ span: 0, offset: 0 }}>
              <p>Enter reading</p>
            </Col>
            <Col sm={{ span: 2, offset: 0 }}>
              <Form.Control
                className='input'
                type='text'
                placeholder='reading'
                name='reading'
                size='sm'
                value={reading}
                onChange={event => setReading(event.target.value)}
              />
            </Col>
            <Col sm={{ span: 0, offset: 0 }}>
              <p>How many rows back</p>
            </Col>
            <Col sm={{ span: 2, offset: 0 }}>
              <Form.Control
                className='input'
                type='text'
                placeholder='number of...'
                name='rows'
                size='sm'
                value={rows}
                onChange={event => setRows(event.target.value)}
              />
            </Col>
            <Col sm={{ span: 2, offset: 0 }}>
              <Button type='submit' disabled={!(!isLoading && reading && rows)}>
                {isLoading ? '...calling WC...' : 'Submit'}
              </Button>
            </Col>
          </Form.Row>
        </Form>
        <Container>
          <Col sm={{ span: 2, offset: 0 }}>
            {apiURL && reading && rows ? (
              <img
                src={apiURL}
                alt='submit'
                width={bpW}
                height={bpW * (h / w)}
              />
            ) : (
              <p>Enter a reading...</p>
            )}
          </Col>
        </Container>
      </Card.Body>
    </Card>
  )
}

export default API11
