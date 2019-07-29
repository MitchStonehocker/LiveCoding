// src/components/API-9.js

import React, { useState } from 'react'
import { Card, Form, Col, Container } from 'react-bootstrap'

import { wcBaseUrl, wcEndPoint } from '../utils'

const API9 = () => {
  const [xSpacing, setXSpacing] = useState(0)
  const [ySpacing, setYSpacing] = useState(0)
  const [iSize, setISize] = useState(200)
  const [gridFrame, setGridFrame] = useState(true)
  const [imageFrame, setImageFrame] = useState(true)

  const wcFunction = 'equation'

  console.log('>>>-API9-gridFrame->', gridFrame)
  return (
    <Card>
      <Card.Header>Session 2, API-9) Rasterize an Equation</Card.Header>
      <Card.Body>
        <Card.Title>Framing the grid and image</Card.Title>
        <Card.Text>Aspect ratio</Card.Text>
        <p>
          API end-point is:
          {wcFunction
            ? `https://.../${wcFunction}?xSpacing=${xSpacing}&ySpacing=${ySpacing}&iSize=${iSize}&gridFrame=${
              gridFrame ? 'True' : 'False'
            }&imageFrame=${imageFrame ? 'True' : 'False'}`
            : 'Make selection.'}
        </p>
        <hr />
        <Form>
          <Form.Row>
            <Col xs='auto'>
              <p>Equation Image</p>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col sm={{ span: 0, offset: 0 }}>
              <p>Grid x spacing</p>
            </Col>
            <Col sm={{ span: 2, offset: 0 }}>
              <Form.Control
                className='input'
                type='text'
                placeholder='x spacing'
                name='xSpacing'
                size='sm'
                value={xSpacing}
                onChange={event => setXSpacing(event.target.value)}
              />
            </Col>
            <Col sm={{ span: 0, offset: 0 }}>
              <p>Grid Frame</p>
            </Col>
            <Col sm={{ span: 2, offset: 0 }}>
              <Form.Check
                type='checkbox'
                size='sm'
                id='gridFrame'
                checked={gridFrame}
                onChange={() => setGridFrame(!gridFrame)}
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col sm={{ span: 0, offset: 0 }}>
              <p>Grid y spacing</p>
            </Col>
            <Col sm={{ span: 2, offset: 0 }}>
              <Form.Control
                className='input'
                type='text'
                placeholder='y spacing'
                name='ySpacing'
                size='sm'
                value={ySpacing}
                onChange={event => setYSpacing(event.target.value)}
              />
            </Col>
            <Col sm={{ span: 0, offset: 0 }}>
              <p>Image Frame</p>
            </Col>
            <Col sm={{ span: 2, offset: 0 }}>
              <Form.Check
                type='checkbox'
                size='sm'
                id='imageFrame'
                checked={imageFrame}
                onChange={() => setImageFrame(!imageFrame)}
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col sm={{ span: 0, offset: 0 }}>
              <p>Image size</p>
            </Col>
            <Col sm={{ span: 2, offset: 0 }}>
              <Form.Control
                className='input'
                type='text'
                placeholder='image size'
                name='iSize'
                size='sm'
                value={iSize}
                onChange={event => setISize(event.target.value)}
              />
            </Col>
          </Form.Row>

          <Form.Row>
            <Container>
              <Col sm={{ span: 2, offset: 0 }}>
                <img
                  src={
                    xSpacing >= 0 && ySpacing >= 0 && iSize >= 0
                      ? `${wcBaseUrl}${wcEndPoint}${wcFunction}?xSpacing=${xSpacing}&ySpacing=${ySpacing}&iSize=${iSize}&gridFrame=${
                        gridFrame ? 'True' : 'False'
                      }&imageFrame=${imageFrame ? 'True' : 'False'}`
                      : null
                  }
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
