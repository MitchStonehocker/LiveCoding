// src/components/ImageThree.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Form, Col, Button, Badge } from "react-bootstrap";

import { wcBaseUrl, wcEndPoint } from "../utils";

const ImageThree = () => {
  const [data, setData] = useState([]);
  const [image, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  const wcFunction = "sin-png";

  const fetchData = async () => {
    setIsError(false);
    setIsLoading(true);
    if (a && b) {
      try {
        const result = await axios
          .get(`${wcBaseUrl}${wcEndPoint}${wcFunction}?a=${a}&b=${b}`)
          .then(response => {
            console.log(response);
            setImage(response);
          })
          .catch(error => {
            console.log(error);
          });
        // console.log(">>>-ImageThree-fetchData-result->", result);
        // console.log(">>>-ImageThree-fetchData-result.data->", result.data);
        setData(result.data);
        // setX("");
        // setY("");
      } catch (error) {
        console.log(">>>-ImageThree-fetchData-error->", error);
        setIsError(true);
      }
    } else {
      setIsError(true);
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [a, b]);

  const handleSubmit = event => {
    event.preventDefault();
    fetchData();
  };

  return (
    <Card>
      <Card.Header>API-X</Card.Header>
      <Card.Body>
        <Card.Title>Image API</Card.Title>
        <Card.Text>
          Enter integers to establish the min and max of the sampling range, a
          and b. Click to resample.
        </Card.Text>
        <p>
          API end-point is:
          {a && b
            ? ` https://.../${wcFunction}?a=${a}&b=${b}`
            : " Enter 2 integers. Any order."}
        </p>
        <hr />
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Col xs="auto">
              <p>From</p>
            </Col>
            <Col sm={{ span: 2, offset: 0 }}>
              <Form.Control
                className="input"
                type="text"
                placeholder="a"
                name="a"
                size="sm"
                value={a}
                onChange={event => setA(event.target.value)}
              />
            </Col>
            <Col sm={{ span: 0, offset: 0 }}>
              <p> to </p>
            </Col>
            <Col sm={{ span: 2, offset: 0 }}>
              <Form.Control
                className="input"
                type="text"
                placeholder="b"
                name="b"
                size="sm"
                value={b}
                onChange={event => setB(event.target.value)}
              />
            </Col>
            <Col sm={{ span: 4, offset: 0 }}>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "...calling WC..." : "Get Random Integer"}
              </Button>
            </Col>
            <Col sm={{ span: 2, offset: 0 }}>
              {isError && !a && !b ? (
                <p>Enter Values...</p>
              ) : (
                <h4>
                  Result <Badge variant="secondary">{data}</Badge>
                </h4>
              )}
            </Col>
          </Form.Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ImageThree;
