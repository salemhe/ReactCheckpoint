import React from 'react';
import { Navbar, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          </Container>
        </Navbar>
        <Container className="mt-4">
          <h1>Heading</h1>
          <Row>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Card 1</Card.Title>
                  <Card.Text>
                    Some additional information for Card 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Card 2</Card.Title>
                  <Card.Text>
                    More details for Card 2. Ut auctor lectus vel nisl ullamcorper, in consequat libero volutpat.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Card 3</Card.Title>
                  <Card.Text>
                    Additional content for Card 3. Sed id condimentum elit. Integer posuere venenatis semper.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="mt-5">
            <h2>Additional Content</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor
              lectus vel nisl ullamcorper, in consequat libero volutpat. Sed id
              condimentum elit. Integer posuere venenatis semper.
            </p>
          </div>
        </Container>
      </div>
      <footer className="text-center py-3">
        <p>© 2023 Your Company</p>
      </footer>
    </React.Fragment>
  );
}

export default App;
