import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";

export default function GetData() {
  const [user, setUser] = useState([]);

  const getAllData = () => {
    axios.get("http://localhost:3000/data").then((data) => {
      setUser(data.data);
    });
  };
  useEffect(() => {
    getAllData();
  }, []);


  const deleteData = (id) => {
    axios.delete(`http://localhost:3000/data/${id}`)
      .then((res) => {
        if (res.status === 200) {
          alert("Successfully deleted")
          setUser(user.filter((el) => el.id !== id))
        }
      })
  }
  return (
    <>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col xs={10}>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>id</th>
                  <th>Full Name</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                {user?.map((data) => {
                  return (
                    <>
                      <tr>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.age}</td>
                      </tr>
                        <Button onClick={() => deleteData(data.id)}>Delete</Button>
                    </>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}
