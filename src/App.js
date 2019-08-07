import React from "react";

import API1 from "./components/API-1";
import API2 from "./components/API-2";
import API3 from "./components/API-3";
import API4 from "./components/API-4";
import API5 from "./components/API-5";
import API6 from "./components/API-6";
import API7 from "./components/API-7";
import API8 from "./components/API-8";
import API9 from "./components/API-9";
import API10 from "./components/API-10";
import API11 from "./components/API-11";

import { Container, Col } from "react-bootstrap";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">Header</header>
      <main className="App-main">
        <Container>
          <Col md="auto">
            <h1>Single Page Application (SPA)</h1>
            <API1 />
            <API2 />
            <API3 />
            <API4 />
            <API5 />
            <API6 />
            <API7 />
            <API8 />
            <API9 />
            <API10 />
            <API11 />
          </Col>
        </Container>
      </main>
      <footer className="App-footer">Footer</footer>
    </div>
  );
}
