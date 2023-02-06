import axios from "axios";
import React, { useState } from "react";

import { 
  Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const navigate = useNavigate();

  let obj = {
    name: name,
    age: age,
  };

  const postData = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/data", obj).then((res) => {
      if (res.status === 201) {
        alert(res.statusText);
        setAge("");
        setName("");
        navigate('/result');
      }
    });
  };

  return (
    <>
      <Container fluid="md">
        <Row className="justify-content-center mt-5">
          <Col xs={6}>
            <Form onSubmit={postData}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your full name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your full name"
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Your Age</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Age"
                  required
                  onChange={(e) => setAge(e.target.value)}
                  value={age}
                />
              </Form.Group>
              <Button
                variant="primary"
                style={{ width: "100%", padding: "15px " }}
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
