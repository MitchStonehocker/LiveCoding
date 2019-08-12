// src/components/API-9.js

import React from "react";
import { Card, Col, Container } from "react-bootstrap";

import { wcBaseUrl, wcEndPoint } from "../utils";

const API9 = () => {
  const wcFunction = "geo-pins";
  const it = "users";
  const n = "All";

  return (
    <Card>
      <Card.Header>Session 3, API-9) Geo image</Card.Header>
      <Card.Body>
        <Card.Title>Geo Image</Card.Title>
        <Card.Text>GeoPaths and GeoMarkers</Card.Text>
        <p>
          API end-point is:
          {wcFunction && it ? (
            `https://.../${wcFunction}?it=${it}&n=${n}`
          ) : (
            <p>working...</p>
          )}
        </p>
        <hr />

        <Container>
          <Col sm={{ span: 2, offset: 0 }}>
            <img
              src={
                wcFunction && it
                  ? `${wcBaseUrl}${wcEndPoint}${wcFunction}?it=${it}&n=${n}`
                  : null
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
