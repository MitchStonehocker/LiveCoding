// src/components/API-5.js

import React, { useState } from "react";
import axios from "axios";
import { Card, Form, Col, Button, Table } from "react-bootstrap";

import { wcBaseUrl, wcEndPoint } from "../utils";

const API5 = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [n, setN] = useState("");
  const [it, setIt] = useState("users");

  const wcFunction = "placeholder";

  const handleSubmit = event => {
    event.preventDefault();
    fetchData();
  };

  const fetchData = async () => {
    setIsError(false);
    setIsLoading(true);
    if (it && n) {
      try {
        const result = await axios(
          `${wcBaseUrl}${wcEndPoint}${wcFunction}?it=${it.toString()}&n=${n.toString()}`
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
      <Card.Header>
        Session 2, API-5) JSON: more complicated structures from external
        sources
      </Card.Header>
      <Card.Body>
        <Card.Title>Structured JSON</Card.Title>
        <Card.Text>
          Select what you want to get. Enter the number of samples you want.
        </Card.Text>
        <p>
          {it && n
            ? `https://.../${wcFunction}?it=${it.toString()}&n=${n.toString()}`
            : "Make selection."}
        </p>
        <hr />
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Col sm={{ span: 2, offset: 0 }}>
              <p>{it}</p>
            </Col>

            {/* a select control for 'it' can go here */}

            <Col sm={{ span: 0, offset: 0 }}>
              <p> records </p>
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
                {isLoading ? "...calling WC..." : `Get ${it}`}
              </Button>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col sm={{ span: 12, offset: 0 }}>
              {isError && !it && !n ? (
                <p>Enter Values...</p>
              ) : (
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>name</th>
                      <th>lat</th>
                      <th>lng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map(item => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.lat}</td>
                        <td>{item.lng}</td>
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

export default API5;
