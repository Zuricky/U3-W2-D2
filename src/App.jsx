import "./App.css";
import BookList from "./components/BookList";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";

import fantasy from "./data/fantasy.json";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useState } from "react";

const App = () => {
  const [books, setBooks] = useState(fantasy);

  return (
    <>
      <MyNav />
      <Welcome />

      <div className="d-flex justify-content-center gap-1 my-3">
        <Button variant="primary" onClick={() => setBooks(fantasy)}>
          Fantasy
        </Button>
      </div>

      <Container fluid>
        <Row>
          <Col>
            <BookList books={books} />
          </Col>
        </Row>
      </Container>

      <MyFooter />
    </>
  );
};

export default App;
