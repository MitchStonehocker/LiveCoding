// src/components/API-10.js

import React, { useState } from 'react'
import { Card, Form, Col, Container } from 'react-bootstrap'

import { wcBaseUrl, wcEndPoint } from '../utils'

const API10 = () => {
  const [xL, setXL] = useState(0)
  const [xR, setXR] = useState(0)
  const [yT, setYT] = useState(0)
  const [yC, setYC] = useState(0)
  const [yB, setYB] = useState(0)
  const [bpW, setBpW] = useState(200)
  const [w, setW] = useState(16)
  const [h, setH] = useState(9)
  const [fs, setFs] = useState(17.5)
  const [rsMult, setRsMult] = useState(3)
  const [gridFrame, setGridFrame] = useState(true)
  const [imageFrame, setImageFrame] = useState(true)

  const wcFunction = 'equation'

  return (
    <Card>
      <Card.Header>Session 3, API-10) Rasterize an Equation</Card.Header>
      <Card.Body>
        <Card.Title>Using grids and frames on your images</Card.Title>
        <Card.Text>Aspect ratio</Card.Text>
        <p>
          API end-point is:
          {wcFunction
            ? `https://.../${wcFunction}?xL=${xL}&xR=${xR}&yT=${yT}&yC=${yC}&yB=${yB}&yC=${yC}&bpW=${bpW}&w=${w}&h=${h}fs&=${fs}&rsMult=${rsMult}&imageFrame=${
              imageFrame ? 'True' : 'False'
            }&gridFrame=${gridFrame ? 'True' : 'False'}`
            : 'Get your image...'}
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
              <p>x spacing: </p>
            </Col>
            <Col sm={{ span: 0, offset: 0 }}>
              <p>left</p>
            </Col>
            <Col sm={{ span: 2, offset: 0 }}>
              <Form.Control
                className='input'
                type='text'
                placeholder='x left spacing'
                name='xL'
                size='sm'
                value={xL}
                onChange={event => setXL(event.target.value)}
              />
            </Col>
            <Col sm={{ span: 0, offset: 0 }}>
              <p>right</p>
            </Col>
            <Col sm={{ span: 2, offset: 0 }}>
              <Form.Control
                className='input'
                type='text'
                placeholder='x right spacing'
                name='xR'
                size='sm'
                value={xR}
                onChange={event => setXR(event.target.value)}
              />
            </Col>
          </Form.Row>

          <Form.Row>
            <Col sm={{ span: 0, offset: 0 }}>
              <p>y spacing: </p>
            </Col>
            <Col sm={{ span: 0, offset: 0 }}>
              <p>top</p>
            </Col>
            <Col sm={{ span: 2, offset: 0 }}>
              <Form.Control
                className='input'
                type='text'
                placeholder='y top spacing'
                name='yT'
                size='sm'
                value={yT}
                onChange={event => setYT(event.target.value)}
              />
            </Col>
            <Col sm={{ span: 0, offset: 0 }}>
              <p>center</p>
            </Col>
            <Col sm={{ span: 2, offset: 0 }}>
              <Form.Control
                className='input'
                type='text'
                placeholder='y center spacing'
                name='yC'
                size='sm'
                value={yC}
                onChange={event => setYC(event.target.value)}
              />
            </Col>
            <Col sm={{ span: 0, offset: 0 }}>
              <p>bottom</p>
            </Col>
            <Col sm={{ span: 2, offset: 0 }}>
              <Form.Control
                className='input'
                type='text'
                placeholder='y center spacing'
                name='yB'
                size='sm'
                value={yB}
                onChange={event => setYB(event.target.value)}
              />
            </Col>
          </Form.Row>

          <Form.Row>
            <Col sm={{ span: 0, offset: 0 }}>
              <p>base width pixels</p>
            </Col>
            <Col sm={{ span: 2, offset: 0 }}>
              <Form.Control
                className='input'
                type='text'
                placeholder='y center spacing'
                name='bpW'
                size='sm'
                value={bpW}
                onChange={event => setBpW(event.target.value)}
              />
            </Col>

            <Col sm={{ span: 0, offset: 0 }}>
              <p>ratio width</p>
            </Col>
            <Col sm={{ span: 2, offset: 0 }}>
              <Form.Control
                className='input'
                type='text'
                placeholder='y center spacing'
                name='w'
                size='sm'
                value={w}
                onChange={event => setW(event.target.value)}
              />
            </Col>
            <Col sm={{ span: 0, offset: 0 }}>
              <p>ratio height</p>
            </Col>
            <Col sm={{ span: 2, offset: 0 }}>
              <Form.Control
                className='input'
                type='text'
                placeholder='y center spacing'
                name='h'
                size='sm'
                value={h}
                onChange={event => setH(event.target.value)}
              />
            </Col>
          </Form.Row>

          <Form.Row>
            <Col sm={{ span: 0, offset: 0 }}>
              <p>font size</p>
            </Col>
            <Col sm={{ span: 2, offset: 0 }}>
              <Form.Control
                className='input'
                type='text'
                placeholder='y center spacing'
                name='fs'
                size='sm'
                value={fs}
                onChange={event => setFs(event.target.value)}
              />
            </Col>
            <Col sm={{ span: 0, offset: 0 }}>
              <p>raster size multiple</p>
            </Col>
            <Col sm={{ span: 2, offset: 0 }}>
              <Form.Control
                className='input'
                type='text'
                placeholder='y center spacing'
                name='rsMult'
                size='sm'
                value={rsMult}
                onChange={event => setRsMult(event.target.value)}
              />
            </Col>
          </Form.Row>

          <Form.Row>
            <Col sm={{ span: 0, offset: 0 }}>
              <p>grid frame</p>
            </Col>
            <Form.Check
              inline
              type='checkbox'
              value={gridFrame}
              checked={gridFrame}
              onChange={() => setGridFrame(!gridFrame)}
            />
            <Col sm={{ span: 0, offset: 0 }}>
              <p>image frame</p>
            </Col>
            <Form.Check
              inline
              type='checkbox'
              value={imageFrame}
              checked={imageFrame}
              onChange={() => setImageFrame(!imageFrame)}
            />
          </Form.Row>
        </Form>

        <Container>
          <Col sm={{ span: 2, offset: 0 }}>
            <img
              src={
                true
                  ? `${wcBaseUrl}${wcEndPoint}${wcFunction}?xL=${xL}&xR=${xR}&yT=${yT}&yC=${yC}&yB=${yB}&yC=${yC}&bpW=${bpW}&w=${w}&h=${h}&fs=${fs}&rsMult=${rsMult}&imageFrame=${
                    imageFrame ? 'True' : 'False'
                  }&gridFrame=${gridFrame ? 'True' : 'False'}`
                  : null
              }
              alt='equation'
              width={bpW}
              height={bpW * (h / w)}
            />
          </Col>
        </Container>
      </Card.Body>
    </Card>
  )
}

export default API10
