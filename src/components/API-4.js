// src/components/API-4.js

import React, { useState } from 'react'
import axios from 'axios'
import { Card, Form, Col, Button, Table, Container } from 'react-bootstrap'

import { wcBaseUrl, wcEndPoint } from '../utils'

const API4 = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [x, setX] = useState('')
  const [y, setY] = useState('')
  const [z, setZ] = useState('')

  const wcFunction = 'random-array-2'

  const fetchData = async () => {
    setIsError(false)
    setIsLoading(true)
    if (x && y && z) {
      try {
        const result = await axios(
          `${wcBaseUrl}${wcEndPoint}${wcFunction}?x=${x.toString()}&y=${y.toString()}&z=${z.toString()}`
        )
        setData(result.data)
      } catch (error) {
        console.log('>>>-RandomArray-fetchData-error->', error)
        setIsError(true)
      }
    } else {
      setIsError(true)
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
      <Card.Header>
        Session 1, API-4) JSON - JS object of reals and text
      </Card.Header>
      <Card.Body>
        <Card.Title>Simple JSON Object</Card.Title>
        <Card.Text>
          Enter numbers to establish a min and max range, x and y. Enter an
          integer to establish the length, z, of the object. Click to resample.
        </Card.Text>
        <p>
          {x && y
            ? `https://.../${wcFunction}?x=${x.toString()}&y=${y.toString()}&z=${z.toString()}`
            : 'Enter 2 numbers. Any order.'}
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
            <Col sm={{ span: 0, offset: 0 }}>
              <p> samples </p>
            </Col>
            <Col sm={{ span: 2, offset: 0 }}>
              <Form.Control
                className='input'
                type='text'
                placeholder='samples'
                name='z'
                size='sm'
                value={z}
                onChange={event => setZ(event.target.value)}
              />
            </Col>
            <Col sm={{ span: 4, offset: 0 }}>
              <Button type='submit' disabled={isLoading}>
                {isLoading ? '...calling WC...' : 'Get Random JS Object'}
              </Button>
            </Col>
          </Form.Row>
        </Form>
        <br />
        <Container>
          <Col sm={{ span: 12, offset: 0 }}>
            {isError && !x && !y && !z ? (
              <p>Enter Values...</p>
            ) : (
              <Table striped bordered hover size='sm'>
                <thead>
                  <tr>
                    <th>index</th>
                    <th>value</th>
                    <th>name</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(item => (
                    <tr key={item.index}>
                      <td>{item.index}</td>
                      <td>{item.value}</td>
                      <td>{item.name}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Col>
        </Container>
      </Card.Body>
    </Card>
  )
}

export default API4
