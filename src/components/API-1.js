// src/components/API-1.js

import React, { useState } from 'react'
import axios from 'axios'
import { Card, Form, Col, Button, Badge } from 'react-bootstrap'

import { wcBaseUrl, wcEndPoint } from '../utils'

const API1 = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [x, setX] = useState('')
  const [y, setY] = useState('')

  const wcFunction = 'random-integer-range'

  const fetchData = async () => {
    setIsError(false)
    setIsLoading(true)
    if (x && y) {
      try {
        const result = await axios(
          `${wcBaseUrl}${wcEndPoint}${wcFunction}?x=${x}&y=${y}`
        )
        setData(result.data)
      } catch (error) {
        console.log('>>>-RandomInteger-fetchData-error->', error)
        setIsError(true)
      }
    } else {
      setIsError(false)
      setIsLoading(false)
      return
    }
    setIsLoading(false)
  }

  const handleSubmit = event => {
    event.preventDefault()
    fetchData()
  }

  return (
    <Card>
      <Card.Header>Session 1, API-1) A random integer</Card.Header>
      <Card.Body>
        <Card.Title>Single Random Integer Value</Card.Title>
        <Card.Text>
          Enter integers to establish the min and max of the sampling range, x
          and y. Click to resample.
        </Card.Text>
        <p>
          API end-point is:
          {x && y
            ? ` https://.../${wcFunction}?x=${x}&y=${y}`
            : ' Enter 2 integers. Any order.'}
        </p>
        <hr />
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Col xs='auto'>
              <p>From</p>
            </Col>
            <Col sm={{ span: 2, offset: 0 }}>
              <Form.Control
                className='input'
                type='text'
                placeholder='min'
                name='x'
                size='sm'
                value={x}
                onChange={event => setX(event.target.value)}
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
                name='y'
                size='sm'
                value={y}
                onChange={event => setY(event.target.value)}
              />
            </Col>
            <Col sm={{ span: 4, offset: 0 }}>
              <Button type='submit' disabled={isLoading}>
                {isLoading ? '...calling WC...' : 'Get Random Integer'}
              </Button>
            </Col>
            <Col sm={{ span: 2, offset: 0 }}>
              {isError && !x && !y ? (
                <p>Enter Values...</p>
              ) : (
                <h4>
                  Result <Badge variant='secondary'>{data}</Badge>
                </h4>
              )}
            </Col>
          </Form.Row>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default API1
