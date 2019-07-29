// src/components/API-10.js

import React, { useState } from 'react'
import { Card, Form, Col, Container } from 'react-bootstrap'

import { wcBaseUrl, wcEndPoint } from '../utils'

const API10 = () => {
  const [country, setCountry] = useState('USA')
  const wcFunction = 'geo-test'

  return (
    <Card>
      <Card.Header>Session 2, API-10) Geo images</Card.Header>
      <Card.Body>
        <Card.Title>Geo Image</Card.Title>
        <Card.Text>
          Issue: I've never gotten StartWebSession["Chrome"] and WebExecute[ ]
          to work. Nevertheless, it works here!
        </Card.Text>
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

export default API10
