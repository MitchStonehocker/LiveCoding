// src/components/API-7.js

import React, { useState } from 'react'
import axios from 'axios'
import { Card, Form, Col, Button, Table, Check } from 'react-bootstrap'

import { wcBaseUrl, wcEndPoint } from '../utils'

const API7 = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [n, setN] = useState('')
  const [completed, setCompleted] = useState('')

  const wcFunction = 'todos'

  const handleSubmit = event => {
    event.preventDefault()
    fetchData()
  }

  const fetchData = async () => {
    setIsError(false)
    setIsLoading(true)
    if (completed && n) {
      try {
        const result = await axios(
          `${wcBaseUrl}${wcEndPoint}${wcFunction}?completeTF=${
            completed === 'completed' ? 'True' : 'False'
          }&n=${n.toString()}`
        )
        // console.log(">>>-JsonObjectTwo-fetchData-result->", result);
        console.log('>>>-JsonObjectTwo-fetchData-result.data->', result.data)
        setData(result.data)
        // setX("");
        // setY("");
      } catch (error) {
        console.log('>>>-JsonObjectTwo-fetchData-error->', error)
        setIsError(true)
      }
    } else {
      setIsError(true)
      setIsLoading(false)
      return
    }
    setIsLoading(false)
  }

  // useEffect(() => {
  //   fetchData();
  // }, [part, n]);

  console.log('>>>-API-7->', completed)

  return (
    <Card>
      <Card.Header>
        Session 2, API-7) Put data to & Get data from WC
      </Card.Header>
      <Card.Body>
        <Card.Title>Todos Returned in good JSON</Card.Title>
        <Card.Text>
          Check complete or incomplete and enter the number of results you want.
        </Card.Text>
        <p>
          {completed && n
            ? `https://.../${wcFunction}?part=${completed.toString()}&n=${n.toString()}`
            : 'Make selection.'}
        </p>
        <hr />
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Col sm={{ span: 0, offset: 0 }}>
              <Form.Check
                inline
                type='checkbox'
                label='Complete'
                id='completed'
                checked={completed === 'completed'}
                onChange={e => setCompleted(e.target.id)}
                onClick={e => setCompleted(e.target.id)}
              />
              <Form.Check
                inline
                type='checkbox'
                label='Incomplete'
                id='incomplete'
                checked={completed === 'incomplete'}
                onChange={e => setCompleted(e.target.id)}
                onClick={e => setCompleted(e.target.id)}
              />
            </Col>

            <Col sm={{ span: 0, offset: 0 }}>
              <p> records </p>
            </Col>
            <Col sm={{ span: 2, offset: 0 }}>
              <Form.Control
                className='input'
                type='text'
                placeholder='how many?'
                name='n'
                size='sm'
                value={n}
                onChange={event => setN(event.target.value)}
              />
            </Col>

            <Col sm={{ span: 3, offset: 0 }}>
              <Button type='submit' disabled={isLoading}>
                {isLoading ? '...calling WC...' : `Get ${completed}`}
              </Button>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col sm={{ span: 12, offset: 0 }}>
              {isError && !completed && !n ? (
                <p>Enter Values...</p>
              ) : (
                <Table striped bordered hover size='sm'>
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>title</th>
                      <th>completed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map(item => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.completed.toString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </Col>
          </Form.Row>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default API7
