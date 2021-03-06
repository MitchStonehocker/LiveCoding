// src/components/API-6.js

import React, { useState } from "react";
import axios from "axios";
import { Card, Form, Col, Button, Table } from "react-bootstrap";

import { wcBaseUrl, wcEndPoint } from "../utils";

const API6 = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [n, setN] = useState("");

  const wcFunction = "wordcount";
  const part = "body";

  const handleSubmit = event => {
    event.preventDefault();
    fetchData();
  };

  const fetchData = async () => {
    setIsError(false);
    setIsLoading(true);
    if (part && n) {
      try {
        const result = await axios(
          `${wcBaseUrl}${wcEndPoint}${wcFunction}?part=${part.toString()}&n=${n.toString()}`
        );
        setData(result.data);
      } catch (error) {
        console.log(">>>-JsonObjectTwo-fetchData-error->", error);
        setIsError(true);
      }
    } else {
      setIsError(true);
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
  };

  return (
    <Card>
      <Card.Header>Session 2, API-6) Compute word counts</Card.Header>
      <Card.Body>
        <Card.Title>Computation Returned in good JSON</Card.Title>
        <Card.Text>
          Select what you want to get. Enter the number of results you want.
        </Card.Text>
        <p>
          {part && n
            ? `https://.../${wcFunction}?part=${part.toString()}&n=${n.toString()}`
            : "Make selection."}
        </p>
        <hr />
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Col sm={{ span: 2, offset: 0 }}>
              <p>{part}</p>
            </Col>

            {/* Select control goes here */}

            <Col sm={{ span: 0, offset: 0 }}>
              <p> words </p>
            </Col>
            <Col sm={{ span: 2, offset: 0 }}>
              <Form.Control
                className="input"
                type="text"
                placeholder="how many?"
                name="n"
                size="sm"
                value={n}
                onChange={event => setN(event.target.value)}
              />
            </Col>

            <Col sm={{ span: 3, offset: 0 }}>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "...calling WC..." : `Get ${part}`}
              </Button>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col sm={{ span: 12, offset: 0 }}>
              {isError && !part && !n ? (
                <p>Enter Values...</p>
              ) : (
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>word</th>
                      <th>count</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map(item => (
                      <tr key={item.word}>
                        <td>{item.word}</td>
                        <td>{item.count}</td>
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
  );
};

export default API6;
