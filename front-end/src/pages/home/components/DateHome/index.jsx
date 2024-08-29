// src/pages/Home.js
import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';

function DateHome() {
  return (
      <main className="flex-fill">
        <Container className="mt-4">
          <h1 className="mb-4">Cronograma do Evento</h1>
          <Card>
            <Card.Body>
              <Card.Title>Agenda do Evento</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>13:30 - Júlia (check-in - conectando propósitos)</ListGroup.Item>
                <ListGroup.Item>13:50 às 15:00 - Dhefesson (liderança)</ListGroup.Item>
                <ListGroup.Item>18:00 - Vanessa (brindes)</ListGroup.Item>
                <ListGroup.Item>18:20 às 19:30 - Félix (comercial)</ListGroup.Item>
                <ListGroup.Item>
                  <strong>Encerramento:</strong> 20:40 às 21:00 com as coordenações
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Container>
      </main>
  );
}

export default DateHome;
