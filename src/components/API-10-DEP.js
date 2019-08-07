// src/components/API-9.js

import React from "react";
import { Card, Col, Container } from "react-bootstrap";

import { wcBaseUrl, wcEndPoint } from "../utils";

const API9 = () => {
  const wcFunction = "geo-pins";
  const it = "users";

  return (
    <Card>
      <Card.Header>Session 3, API-10) Geo image</Card.Header>
      <Card.Body>
        <Card.Title>Geo Image</Card.Title>
        <Card.Text>
          Issue: I've never gotten StartWebSession["Chrome"] and WebExecute[ ]
          to work. Nevertheless, it works here!
        </Card.Text>
        <p>
          API end-point is:
          {it ? `https://.../${wcFunction}?it=${it}` : "working..."}
        </p>
        <hr />

        <Container>
          <Col sm={{ span: 2, offset: 0 }}>
            <img
              src={
                it ? `${wcBaseUrl}${wcEndPoint}${wcFunction}?it=${it}` : null
              }
              alt="geoimage"
            />
          </Col>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default API9;
