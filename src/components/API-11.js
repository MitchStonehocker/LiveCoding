// src/components/API-11.js

import React, { useState } from 'react'
import { Card, Form, Col, Container } from 'react-bootstrap'

import { wcBaseUrl, wcEndPoint } from '../utils'

const API11 = () => {
  const [country, setCountry] = useState('USA')
  const wcFunction = 'geo-test'

  return (
    <Card>
      <Card.Header>Session 2, API-11) Combined Grids & Images</Card.Header>
      <Card.Body>
        <Card.Title>Grids & Images</Card.Title>
        <Card.Text>text here...</Card.Text>
        <p>
          API end-point is:
          {`https://.../${wcFunction}?country=${country}`}
        </p>
        <hr />
        <Form>
          <Form.Row>
            <Container flex>
              <Col sm={{ span: 2, offset: 0 }}>
                <img
                  src={`${wcBaseUrl}${wcEndPoint}${wcFunction}?country=${country}`}
                  alt='geoimage'
                />
              </Col>
            </Container>
          </Form.Row>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default API11
